import { Server, Factory, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      forecast: Model,
      person: Model,
      weather: Model
    },

    factories: {
      person: Factory.extend({
        lat: () => randomDecimal(),
        long: () => randomDecimal(),
        name: i => `Mrs. ${i}`
      }),

      forecast: Factory.extend({
        period: () => 'Tomorrow',
        shortDescription: () => 'Sunny'
      }),

      weather: Factory.extend({
        temperature: () => Math.floor(randomDecimal()),
        type: () => 'rain_showers'
      })
    },

    seeds(server) {
      server.createList('person', Math.floor(Math.random() * 10) + 5);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 0;

      this.get('/forecast', ({ db }, request) => {
        let { lat, long } = request.queryParams;
        return db.forecasts.where({ lat, long });
      });
      this.get('/people', ({ db }) => db.people);
      this.get('/people/:id', ({ db }, request) =>
        db.people.find(request.params.id)
      );
      this.get('/weather', ({ db }, request) => {
        let { lat, long } = request.queryParams;
        return db.weathers.where({ lat, long })[0];
      });
    }
  });

  return server;
}

const randomDecimal = () => {
  return (Math.random() * (100 * Math.random()) + 15).toFixed(3);
};
