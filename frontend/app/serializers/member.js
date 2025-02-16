import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  attrs: {
    profile: {
      embedded: 'always'
    },
    plan: {
      embedded: 'always'
    },
    attendances: {
      embedded: 'always'
    }
  }
});
