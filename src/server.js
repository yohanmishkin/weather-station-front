import { Server, Factory, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      person: Model
    },

    factories: {
      person: Factory.extend({
        name(i) {
          return `Mrs. ${i}`;
        },
        temperature() {
          return Math.floor(Math.random() * 100);
        }
      })
    },

    seeds(server) {
      server.createList('person', 5);
    },

    routes() {
      this.namespace = 'api';
      // this.timing = 400;

      this.get('/people', ({ db }) => db.people);
    }
  });

  return server;
}
