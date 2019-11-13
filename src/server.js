import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      person: Model
    },

    factories: {
      // listing: Factory.extend({
      //   description() {
      //     return 'qwers';
      //   },
      //   remote() {
      //     return Math.random() >= 0.5;
      //   },
      // }),
    },

    seeds(/*server*/) {},

    routes() {
      this.namespace = 'api';
      // this.timing = 400;

      this.get('/people', ({ db }) => db.people);
    }
  });

  return server;
}
