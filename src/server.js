import { Server, Factory, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      person: Model
    },

    factories: {
      person: Factory.extend({
        forecasts() {
          return [
            { shortDescription: 'Partly Sunny' },
            { shortDescription: 'Mostly Cloudy' },
            { shortDescription: 'Mostly Clear' },
            { shortDescription: 'Sunny' }
          ];
        },
        name(i) {
          return `Mrs. ${i}`;
        },
        temperature() {
          return Math.floor(Math.random() * 100);
        }
      })
    },

    seeds(server) {
      server.createList('person', Math.floor(Math.random() * 10) + 5);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 0;

      this.get('/people', ({ db }) => db.people);
      this.get('/people/:id', ({ db }, request) =>
        db.people.find(request.params.id)
      );
    }
  });

  return server;
}
