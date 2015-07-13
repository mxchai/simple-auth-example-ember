// Testing exercise to understand mixins!
import Ember from 'ember';

export default Ember.Mixin.create({
  // Functions declared at the controller level
  // Not usable on template itself via the actions helper
  moo: function() {
    console.log('I am mixin cow. Hear me moo!');
  },

  // Functions declared in the actions hash
  // Directly usable from the actions helper
  actions: {
    actionMoo: function() {
      console.log('I am mixin action cow. Hear me moo too!');
    }
  }

});
