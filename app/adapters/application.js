import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://auth.dev.mapc.org'
});
