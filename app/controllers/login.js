import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import cowMixin from '../mixins/cow';

export default Ember.Controller.extend(LoginControllerMixin, cowMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  actions: {
    cow: function() {
      this.moo(); // You can this.moo() to directly refer to the mixin function
    }
  }
});