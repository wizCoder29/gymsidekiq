//gs-checkbox is a check component that can do things with its attributes
import Ember  from "ember";
import jQuery from 'jquery';

export default Ember.Component.extend({
  tagName: 'li',
  file: null,

   didInsertElement: function () {
     var self = document.getElementById('image-display-preview');
     var file = this.get('file');
     var reader = new FileReader();
     reader.addEventListener("load", function () {
        // convert image file to base64 string
        self.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
   }
});
