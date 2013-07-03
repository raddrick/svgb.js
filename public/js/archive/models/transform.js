(function() {
  
  svgb.models.Transform = svgb.Model.extend({
    defaults: {
      translate:{ x:0, y:0, dirty:false },
      scale:{ sx:0, sy:[0], dirty:false },
      matrix:{
        scalex:0, skewx:0,
        skewy:0, scaley:0,
        transformx:0, transformy:0,
        dirty:false
      },
      rotate:{ angle:0, cx:[0], cy:[0], dirty:false },
      skew:{ x:0, y:[0], dirty:false },
      skewX:{ angle:0, dirty:false },
      skewY:{ angle:0, dirty:false }
    },
    initialize: function(){
      
    },
    attr: function( options ){
      var t = null;
      var m = this.attributes;
      if (options.translate){
        t = options.translate;
        m.translate.x=t.x?t.x:0;
        m.translate.y=t.y?t.y:0;
        m.translate.dirty=true;
      }
      if (options.scale){
        t = options.scale;
        m.translate.sx=t.sx?t.sx:1;
        m.translate.sy=[t.sy?t.sy:1];
        m.translate.dirty=true;
      }
      if (options.matrix){
        t = options.matrix;
        if (typeof t == "array"){
          m.translate.scalex=t[0];
          m.translate.skewx=t[1];
          m.translate.skewy=t[2];
          m.translate.scaley=t[3];
          m.translate.transformx=t[4];
          m.translate.transformy=t[5];
          m.translate.dirty=true;
        }else{
          m.translate.scalex=t.scalex?t.scalex:0;
          m.translate.skewx=t.skewx?t.skewx:0;
          m.translate.skewy=t.skewy?t.skewy:0;
          m.translate.scaley=t.scaley?t.scaley:0;
          m.translate.transformx=t.transformx?t.transformx:0;
          m.translate.transformy=t.transformy?t.transformy:0;
          m.translate.dirty=true;
        }
      }
      if (options.rotate){
        t = options.rotate;
        m.translate.angle=t.angle?t.angle:0;
        m.translate.cx=[t.cx?t.cx:0];
        m.translate.cy=[t.cy?t.cy:0];
        m.translate.dirty=true;
      }
      if (options.skew){
        t = options.skew;
        m.translate.x=t.x?t.x:0;
        m.translate.y=[t.y?t.y:0];
        m.translate.dirty=true;
      }
      if (options.skewX){
        t = options.skewX;
        m.translate.angle=t.angle?t.angle:0;
        m.translate.dirty=true;
      }
      if (options.skewY){
        t = options.skewY;
        m.translate.angle=t.angle?t.angle:0;
        m.translate.dirty=true;
      }
      return this.to_s();
    },
    translate: {
      attr: function( get, set ){
      this.attr( "translate", get, set );
      },
      reset: function(){
        this.reset( "translate" );
      }
    },
    scale: {
      attr: function( get, set ){
        this.attr( "scale", get, set );
      },
      reset: function(){
        this.reset( "scale" );
      }
    },
    matrix: {
      attr: function( get, set ){
        this.attr( "matrix", get, set );
      },
      reset: function(){
        this.reset( "matrix" );
      }
    },
    rotate: {
      attr: function( get, set ){
        this.attr( "rotate", get, set );
      },
      reset: function(){
        this.reset( "rotate" );
      }
    },
    skew: {
      attr: function( get, set ){
        this.attr( "skew", get, set );
      },
      reset: function(){
        this.reset( "skew" );
      }
    },
    skewX: {
      attr: function( get, set ){
        this.attr( "skewX", get, set );
      },
      reset: function(){
        this.reset( "skewX" );
      }
    },
    skewY: {
      attr: function( get, set ){
        this.attr( "skewY", get, set );
      },
      reset: function(){
        this.reset( "skewY" );
      }
    },
    reset: function(){
      var transform_type = attributes[0];
      if (transform_type){
        
      } else {
        
      }
    },
    to_s: function(){

      var res = "";

      //  this goes through each element of this.attributes and then each
      //  element therein, and builds the content of the transformation
      function process(key,value) {
        if (typeof value == "string" || typeof value == "number"){
            res += value + ",";
            value = 0;
        } else if (typeof value == "array"){
          if (value[0] !== "" || value[0] !== 0){
            res += value + ",";
            value = 0;
          }
        }
        if (key == "dirty") {
          if (res.length > 0){
            res = res.substring(0, res.length - 1) + ") ";
            value = false;
          }
        }

        // log(key + " : "+value);
      }
      function traverse(o,func) {
            
        for (var i in o) {
          func.apply(this,[i,o[i]]);
          if (typeof o[i] == "object" && o[i].dirty){
            res += i + "(";
            traverse(o[i],func);
          }
        }

      }

      traverse(this.attributes,process);

      //TODO when stacking transformations, order counts.  consider using a weighting system
      return  res.length > 0 ? res.substring(0, res.length - 1) : false;
    }
  });
})();