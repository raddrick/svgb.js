(function($) {
  window.svgb.Controls = Backbone.Collection.extend({
    model: svgb.Control,
    url: '/'
  });
})();