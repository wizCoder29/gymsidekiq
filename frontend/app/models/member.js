import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default DS.Model.extend({
   membershipType: DS.attr(),
   monthlyPrice: DS.attr(),
   firstName: DS.attr(),
   lastName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   image: DS.attr('file'),
   profileId: DS.attr(),
   planId: DS.attr(),
   profile:  DS.belongsTo('profile', { async: false }),
   trainers: DS.attr(),
   classes: DS.attr(),

   fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
   })
 });
