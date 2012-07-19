// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function($) {
  
  window.svgb.Stage = Backbone.Model.extend({
    
  });
  
  window.svgb.Stages = Backbone.Collection.extend({
    model: svgb.Stage,
    url: '/'
  });
})(jQuery);
