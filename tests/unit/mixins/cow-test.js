import Ember from 'ember';
import CowMixin from '../../../mixins/cow';
import { module, test } from 'qunit';

module('Unit | Mixin | cow');

// Replace this with your real tests.
test('it works', function(assert) {
  var CowObject = Ember.Object.extend(CowMixin);
  var subject = CowObject.create();
  assert.ok(subject);
});
