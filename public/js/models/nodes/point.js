(function() {
// point
//   x
//   y
//   options
  svgb.models.Point = svgb.Model.extend({
    _type:"svgb.model.point",
    events:{},
    defaults: {
      tag: 'circle',
      id: '',
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      r: 3,
      css: '',
      style: '',
      defs: '',
      transform:'' //TODO: support array values for int's
    },
    transform: null,
    init: function(options){
      this.transform = new svgb.models.Transform({});
      //if (this.attributes.tag) this.render();
      if (options.x)      this.defaults.x = options.x;
      if (options.y)      this.defaults.y = options.y;
      if (options.css)    this.defaults.css = options.css;
      if (options.style)  this.defaults.style = options.style;
      if (options.defs)   this.defaults.defs = options.defs;
      if (options.transform) this.defaults.transform = options.transform;

      this._super(this);
      //this.pin.set_attrs();
    },
    pin:{
      set_attrs: function(){
        this.attributes.tag = "circle";
        this.attributes.css="pin";
        this.attributes.r=3;
        this.attributes.cx=this.attributes.x;
        this.attributes.cy=this.attributes.y;
        this.attributes.x="";
        this.attributes.y="";
      }
    },
    move: function( add_x, add_y, time_ms ){
      
      animate = function(x,y,time,context){
        
      };

      var pos = this.attributes.transform;

      if (typeof pos == "string"){
        if (!indexOf("translate")){
            pos = pos.split("(")[1].split(",");
            _.each(pos, function(i){
              return i = parseInt(i,10);
            });
            pos = { translate: { x: 0, y: 0 } };
        } else if (!indexOf("scale")) {
          
        } else if (!indexOf("matrix")){

        }
      }
      if (pos.translate)

      setTimeout(animate, time_ms );
    }
  });
})();