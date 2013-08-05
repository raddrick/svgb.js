(function(){

// path
  window.svgb.models.Path = window.svgb.models.Point.extend({
    defaults: {
      tag: 'path',
      d: ""
    },
    init: function(){
      this._super(this);
    }
  });

// line
//   x2
//   y2
  window.svgb.models.Line = window.svgb.models.Point.extend({
    defaults: {
      tag: 'line',
      x2: 0,
      y2: 0
    },
    init: function(){
      this._super(this);
    }
  });

// polyline
//   points
  window.svgb.models.Ployline = window.svgb.models.Point.extend({
    defaults: {
      tag: 'polyline',
      points: []
    },
    init: function(){
      this._super(this);
    }
  });

// polygon
//   points
  window.svgb.models.Ploygon = window.svgb.models.Point.extend({
    defaults: {
      tag: 'polygon',
      points: []
    },
    init: function(){
      this._super(this);
      
    }
  });

// circle
//   r
  window.svgb.models.Circle = window.svgb.models.Point.extend({
    defaults: {
      tag: 'circle',
      r: 0
    },
    init: function(){
      this._super(this);
    }
  });
    
// rect
//   height
//   width
  window.svgb.models.Rect = window.svgb.models.Point.extend({
    node: null,
    defaults: {
      tag: 'rect',
      height:10,
      width:10
    },
    init: function(options){
      if (options.width) this.defaults.width=options.width;
      if (options.height) this.defaults.height=options.height;
      this._super(this);
    }
  });

// elipse
//   rx
//   ry
  window.svgb.models.Ellipse = window.svgb.models.Point.extend({
    defaults: {
      tag: 'ellipse',
      rx:0,
      ry:0
    },
    init: function(){
      this._super(this);
    }
  });

})();