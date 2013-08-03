// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function() {
  
  svgb.models.Frame = svgb.Model.extend({
    view: null,
    defaults: {
      'viewBox': [0,0,200,200],
      'width':500,
      'height':500,
      'masked':true
    },
    init: function(options){
      if (options){
        if (options.viewBox) this.defaults.viewBox=options.viewBox;
        if (options.width) this.defaults.width=options.width;
        if (options.height) this.defaults.height=options.height;
        if (options.masked) this.defaults.masked=options.masked;
      }
    }
  });
})();