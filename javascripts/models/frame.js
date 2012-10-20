// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function($) {
  
  window.svgb.Models.Frame = Backbone.Model.extend({
    defaults: {
      'viewBox': [0,0,200,200],
      'width':500,
      'height':500,
      'masked':true
    },    
    initialize: function(){
      
    }
  });
})();