import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser: function() {
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
        },
        error: function(msg) {
          console.log('failure');
          console.log(msg.responseText);
        }        
      })      
    }
  }
});
