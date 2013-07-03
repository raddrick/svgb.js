(function(){

// path
  window.svgb.Models.Path = window.svgb.Models.Point.extend({
    defaults: {
      'd': ""
    },
    init: function(){
      
    }
  });

// line
//   x2
//   y2
  window.svgb.Line = window.svgb.Models.Point.extend({
    defaults: {
      'x2': 0,
      'y2': 0
    },
    init: function(){
      
    }
  });

// polyline
//   points
  window.svgb.Ployline = window.svgb.Models.Point.extend({
    defaults: {
      'points':[]
    },
    init: function(){
      
    }
  });

// polygon
//   points
  window.svgb.Ploygon = window.svgb.Models.Point.extend({
    defaults: {
      'points': []
    },
    init: function(){
      
    }
  });

// circle
//   r
  window.svgb.Circle = window.svgb.Models.Point.extend({
    defaults: {
      'r': 0
    },
    init: function(){
      
    }
  });
    
// rect
//   height
//   width
  window.svgb.Rect = window.svgb.Models.Point.extend({
    defaults: {
      'width':500,
      'height':500
    },
    init: function(){
      
    }
  });

// elipse
//   rx
//   ry
  window.svgb.Ellipse = window.svgb.Models.Point.extend({
    defaults: {
      'rx':0,
      'ry':0
    },
    init: function(){
      
    }
  });

})();