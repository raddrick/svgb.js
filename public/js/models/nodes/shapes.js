(function(){

// path
  window.svgb.models.Path = window.svgb.models.Point.extend({
    defaults: {
      tag: 'path',
      d: ""
    },
    init: function(){
      this._super(options);
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
      this._super(options);
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
      this._super(options);
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
      this._super(options);
      
    }
  });

// circle
//   r
  window.svgb.models.Circle = window.svgb.models.Point.extend({
    _type: 'svgb.model.circle',
    defaults: {
      tag: 'circle',
      cx: 0,
      cy: 0,
      r: 0
    },
    init: function(){
      this._super(options);
    }
  });
    
// rect
//   height
//   width
  window.svgb.models.Rect = window.svgb.models.Point.extend({
    _type: 'svgb.model.rect',
    node: null,
    defaults: {
      tag: 'rect',
      height:10,
      width:10
    },
    init: function(options){
      if (options.width) this.defaults.width=options.width;
      if (options.height) this.defaults.height=options.height;
      this._super(options);
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
      this._super(options);
    }
  });

})();