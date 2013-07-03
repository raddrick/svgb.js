// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function() {
  
  svgb.models.Frame = svgb.Model.extend({
    el: null,
    view: null,
    defaults: {
      'viewBox': [0,0,200,200],
      'width':500,
      'height':500,
      'masked':true
    },
    init: function(options){

    }
  });
})();