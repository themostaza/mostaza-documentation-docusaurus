---
sidebar_position: 3
---

# Integrazione con il Mostaza Mail Sender Client

Per utilizzare il client per inviare email per il recupero della password, è necessario installare il package `ms-mail-sender-client` e creare il file `strapi-server.js` nella cartella `src/extensions/users-permissions/` con il seguente codice:

NB: questo codice è stato creato appositamente per il progetto ServiceKey, pertanto è necessario adattarlo al progetto per il quale si sta lavorando. I file importati possono essere recuperati dalla repository **servicekey-backend**.

```javascript
const { formatUserResponse } = require("../../utils/formatResponses");
const { getQueryVariable } = require("../../utils/queries");
const crypto = require("crypto");
const utils = require("@strapi/utils");
const { sanitize } = utils;
const { ApplicationError, ValidationError } = utils.errors;
const { getService } = require("../../utils/getService");
const { sendMail } = require("ms-mail-sender-client");
const { config } = require("./../../../config/mostazaServices");
const { getEmailDomain, generatePassword } = require("../../utils/others");

module.exports = (plugin) => {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const sanitizeUser = (user, ctx) => {
    const { auth } = ctx.state;
    const userSchema = strapi.getModel("plugin::users-permissions.user");

    plugin.controllers.auth.forgotPassword = async (ctx) => {
      let { email } = ctx.request.body;

      // Check if the provided email is valid or not.
      const isEmail = emailRegExp.test(email);

      if (isEmail) {
        email = email.toLowerCase();
      } else {
        throw new ValidationError("Please provide a valid email address");
      }

      const pluginStore = await strapi.store({
        type: "plugin",
        name: "users-permissions",
      });

      // Find the user by email.
      let user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { email: email.toLowerCase() } });

      // User not found.
      if (!user) {
        // Check if the provided email belongs to a CompanyDomain
        const domain = await strapi
          .query("api::company-domain.company-domain")
          .findOne({
            where: { domain: getEmailDomain(email.toLowerCase()) },
            populate: { company: true },
          });

        if (!domain) throw new ApplicationError("This email does not exist");
        else {
          //If the email's domain is in the DB, create a new user
          user = await strapi.query("plugin::users-permissions.user").create({
            data: {
              username: email,
              email,
              company: domain.company.id,
              password: generatePassword(),
              role: 1,
              provider: "local",
            },
          });
        }
      }

      // User blocked
      if (user.blocked) {
        throw new ApplicationError("This user is disabled");
      }

      // Generate random token.
      const resetPasswordToken = crypto.randomBytes(64).toString("hex");

      const settings = await pluginStore
        .get({ key: "email" })
        .then((storeEmail) => {
          try {
            return storeEmail["reset_password"].options;
          } catch (error) {
            return {};
          }
        });

      const advanced = await pluginStore.get({
        key: "advanced",
      });

      const userInfo = await sanitizeUser(user, ctx);

      settings.message = await getService("users-permissions").template(
        settings.message,
        {
          URL: advanced.email_reset_password,
          USER: userInfo,
          TOKEN: resetPasswordToken,
        }
      );

      settings.object = await getService("users-permissions").template(
        settings.object,
        {
          USER: userInfo,
        }
      );

      try {
        // Send an email to the user.
        const response = await sendMail(
          {
            apiToken: config.MOSTAZA_SERVICES_APITOKEN,
            service: "MANDRILL",
            tenant: config.TENANT,
            useTestAccount: config.USE_TEST_ACCOUNT,
          },
          {
            from: settings.from.email,
            subject: settings.object,
            to: [user.email],
            fromName: settings.from.name,
            html: settings.message,
          }
        );
      } catch (err) {
        console.log(err);
        throw new ApplicationError(err.message);
      }

      // Update the user.
      await strapi
        .query("plugin::users-permissions.user")
        .update({ where: { id: user.id }, data: { resetPasswordToken } });

      ctx.send({ ok: true });
    };

    return plugin;
  };
};
```
