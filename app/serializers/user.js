import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    token: {serialize: false},
    secret_thing: {serialize: false}
  }
});
