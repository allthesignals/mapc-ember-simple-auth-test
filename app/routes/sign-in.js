import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      authenticate: function() {
        console.log(this.get("session"));
        var data = this.getProperties('identification', 'password');
        return this.get('session').authenticate('simple-auth-authenticator:devise', { data: {user_email: "mgardner@mapc.org", password: "password" }});
      }
  }
});
