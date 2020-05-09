import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';
import { computed } from '@ember/object';

export default DS.Model.extend({
   membershipType: DS.attr(),
   firstName: DS.attr(),
   lastName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   profileId: DS.attr(),
   profile:  DS.belongsTo('profile', { async: true }),
   trainers: DS.attr(),
   klasses:  DS.hasMany('klass'),

   fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
   })
 });
