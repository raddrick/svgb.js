(function(){

// path
  window.svgb.Models.Path = window.svgb.Models.Point.extend({
    defaults: {
      'd': ""
    },    
    initialize: function(){
      
    }
  });

// line
//   x2
//   y2
  window.svgb.Line = window.svgb.Point.extend({
    defaults: {
      'x2': 0,
      'y2': 0
    },    
    initialize: function(){
      
    }
  });

// polyline
//   points
  window.svgb.Ployline = window.svgb.Point.extend({
    defaults: {
      'points':[]
    },    
    initialize: function(){
      
    }
  });

// polygon
//   points
  window.svgb.Ploygon = window.svgb.Point.extend({
    defaults: {
      'points': []
    },    
    initialize: function(){
      
    }
  });

// circle
//   r
  window.svgb.Circle = window.svgb.Point.extend({
    defaults: {
      'r': 0
    },    
    initialize: function(){
      
    }
  });
    
// rect
(function($) {
//   height
//   width
  window.svgb.Rect = window.svgb.Point.extend({
    defaults: {
      'width':500,
      'height':500
    },    
    initialize: function(){
      
    }
  });

// elipse
//   rx
//   ry
  window.svgb.Ellipse = window.svgb.Point.extend({
    defaults: {
      'rx':0,
      'ry':0
    },    
    initialize: function(){
      
    }
  });

})();