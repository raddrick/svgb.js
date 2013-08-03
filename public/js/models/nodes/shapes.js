(function(){

// path
  window.svgb.models.Path = window.svgb.models.Point.extend({
    defaults: {
      'd': ""
    },
    init: function(){
      
    }
  });

// line
//   x2
//   y2
  window.svgb.models.Line = window.svgb.models.Point.extend({
    defaults: {
      'x2': 0,
      'y2': 0
    },
    init: function(){
      
    }
  });

// polyline
//   points
  window.svgb.models.Ployline = window.svgb.models.Point.extend({
    init: function(){
      defaults['points']=[];
    }
  });

// polygon
//   points
  window.svgb.models.Ploygon = window.svgb.models.Point.extend({
    defaults: {
      'points': []
    },
    init: function(){
      
    }
  });

// circle
//   r
  window.svgb.models.Circle = window.svgb.models.Point.extend({
    defaults: {
      'r': 0
    },
    init: function(){
      
    }
  });
    
// rect
//   height
//   width
  window.svgb.models.Rect = window.svgb.models.Point.extend({
    node: null,
    init: function(options){
      this.defaults['width']=10;
      this.defaults['height']=10;
      this._super(options);
      if (options.width) this.attributes.width=options.width;
      if (options.height) this.attributes.height=options.height;
    }
  });

// elipse
//   rx
//   ry
  window.svgb.models.Ellipse = window.svgb.models.Point.extend({
    defaults: {
      'rx':0,
      'ry':0
    },
    init: function(){
      
    }
  });

})();