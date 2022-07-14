---
sidebar_position: 1
---

# Introduzione e installazione

## Cos'è Strapi?

Strapi è un [CMS headless](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/) open source che permette di creare e gestire backend in modo veloce; esso mette a disposizione un pannello di amministrazione molto intuitivo che permette di gestire tabelle, associazioni, ruoli e anche i contenuti del database. Per quest'ultima caratteristica, se un cliente ha bisogno di un gestionale per amministrare i dati, si potrebbe pensare di consegnargli direttamente gli accessi al pannello di Strapi.

Ogni volta che si crea una tabella, vengono automaticamente generate gli endpoint per interagirvi e per ogni endpoint sono disponibili vari parametri specificabili, a [questo link](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-endpoints) è presente la lista completa.

Inoltre è possibile scrivere del codice custom (in Javascript, attualmente Typescript non è supportato) per implementare dei comportamenti non standard, modificando gli endpoint generati da Strapi oppure creandone di nuovi.

## A cosa serve questa documentazione?

L'obiettivo principale di questa documentazione è rispondere alle principali domande che potrebbero sorgere durante l'utilizzo di Strapi.

## Installazione

Per l'installazione è consigliato seguire [questa guida](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/cli.html#preparing-the-installation) con tipo di installazione Custom (manual settings) scegliendo PostgreSQL come database (a meno di esigenze particolari).
