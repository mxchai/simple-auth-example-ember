import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    registerUser: function() {
      var self = this;
      console.log('registering user');
      $.ajax({
        headers: {
          'X-Transaction': 'POST Example',
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        url: 'users',
        type: "POST",
        dataType: 'json',
        data: {
          'user': {
            'email': this.get('email'),
            'password': this.get('password')
            // password_confirmation: this.get('password')
          }
        },
        success: function(msg) {
          console.log('success!');
          self.transitionToRoute('login');
        },
        error: function(msg) {
          console.log('failure');
          console.log(msg.responseText);
          self.set('errorMessage', 'please dont be a pleb');
          return false;
          // self.transitionToRoute('login');
        }        
      })      
    }
  }
});
