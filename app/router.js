import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/:user_id' })
  });
  this.route('sign_in');
  this.route('sign_out');
});

export default Router;
