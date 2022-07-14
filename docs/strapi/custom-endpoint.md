---
sidebar_position: 2
---

# Creazione di endpoint custom

Se gli endpoint generati automaticamente da Strapi non bastano o si hanno bisogno di funzionalità particolari,
è possibile crearne di nuovi e con comportamenti completamente gestiti via codice.

Questa miniguida deriva da [questa pagina](https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#adding-a-new-controller) della documentazione ufficiale.

1. Andare nella cartella `api/{entità_alla_quale_aggiungere_endpoint}/routes`
2. Creare un file con nome ed estensione `custom-{entità_alla_quale_aggiungere_endpoint}.js` (questo sarà il file che elencherà le rotte che si stanno aggiungendo).
3. Aggiungere le rotte necessarie seguendo la seguente struttura:

   ```javascript
   module.exports = {
     routes: [
       {
         method: "GET",
         path: "/{entità_alla_quale_aggiungere_endpoint}s/getSomething",
         handler: "{entità_alla_quale_aggiungere_endpoint}.handlerFunction1",
       },
       {
         method: "GET",
         path: "/{entità_alla_quale_aggiungere_endpoint}s/:id/getSomething",
         handler: "{entità_alla_quale_aggiungere_endpoint}.handlerFunction2",
       },
     ],
   };
   ```

   Le **Handler Function** sono le funzioni che si occuperanno di rispondere alle richieste.

4. Aprire il file `api/{entità_alla_quale_aggiungere_endpoint}/controllers/{entità_alla_quale_aggiungere_endpoint}.js`
5. Modificare

   ```javascript
   module.exports = createCoreController(
     "api::{endpoint_to_edit}.{endpoint_to_edit}"
   );
   ```

   in

   ```javascript
   module.exports = createCoreController('api::{endpoint_to_edit}.{endpoint_to_edit}', ({ strapi }) => ({
        async handlerFunction1(ctx) {
        },
        async handlerFunction2(ctx) {
        }
    })}
   ```

   Notare che **handlerFunction1**, **handlerFunction2** sono le funzioni specificate nel file contenente le rotte.

   **Nota**: in questo controller è possibile modificare anche il comportamento degli endpoint generati da Strapi.
   Per farlo basta dichiarare funzioni come `create`, `find`, `findOne`, `update` o `delete`.
