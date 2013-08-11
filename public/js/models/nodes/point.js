(function() {
// point
//   x
//   y
//   options
  svgb.models.Point = svgb.Model.extend({
    _type:"svgb.model.point",
    events:{},
    defaults: {
      tag: 'g',
      id: '',
      x: 0,
      y: 0,
      css: '',
      style: '',
      defs: ''
    },
    transform: null,
    init: function(options){
      console.log("MODEL INIT type: " + this._type);
      this.pin.el=null;
      this.pin.visible=false;
      this.transform = new svgb.models.Transform({});
      
      if (options){
        if (options.x)      this.defaults.x = options.x;
        if (options.y)      this.defaults.y = options.y;
        if (options.css)    this.defaults.css = options.css;
        if (options.style)  this.defaults.style = options.style;
        if (options.defs)   this.defaults.defs = options.defs;
        if (options.transform) this.defaults.transform = options.transform;
        if (options.pin)    this.pin.init();
      }
      this._super(this);
    },
    pin: {
      el: null,
      visible: false,
      init: function(pt){
        this.show();
        this.create();
        return 

      },
      create: function(){
        // this.el = new svgb.models.Circle({r:3,cx:0,cy:0});
        this.el = document.createElementNS(SVGNS, 'circle');
        this.el.setAttribute('r',3);
        this.el.setAttribute('cx',0);
        this.el.setAttribute('cy',0);

        return this.el;
      },
      show: function(){
        if (!this.el) this.create();
        this.visible=true;
      },
      hide: function(){
        if (!this.el) this.create();
        this.visible=false;
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
    },
    to_svg: function(create_pin){
      if (this._type == 'svgb.model.point'){
        if (create_pin){
          this.attributes.transform = this.pin.init(this);
          if (this.pin.el) this.nodes.push(this.pin.el);
        }
        this.transform.attr({translate:{x:this.attributes.x, y:this.attributes.y}});
        this.attributes.transform = this.transform.to_s();
        delete this.attributes['x'];
        delete this.attributes['y'];
      }
      return this._super();
    }
  });
})();