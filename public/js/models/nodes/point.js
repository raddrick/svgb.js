(function() {
// point
//   x
//   y
//   options
  svgb.models.Point = svgb.Model.extend({
    el:null,
    events:null,
    defaults: {
      'tag': '',
      'id': '',
      'x': 0,
      'y':0,
      'class':'',
      'style':'',
      'defs':'',
      'transform':'' //TODO: support array values for int's
    },
    init: function(options){
      this._super();
      this.transform = new svgb.models.Transform();
      //if (this.attributes.tag) this.render();
      if (options.x)      this.attributes.x = options.x;
      if (options.y)      this.attributes.y = options.y;
      if (options.css)    this.attributes.css = options.css;
      if (options.style)  this.attributes.style = options.style;
      if (options.defs)   this.attributes.defs = options.defs;
      if (options.transform) this.attributes.transform = options.transform;
    },
    transform: null,
    setPin: function(){
      this.attributes.tag = "circle";
      this.attributes.css="pin";
      this.attributes.r=3;
      this.attributes.cx=this.attributes.x;
      this.attributes.cy=this.attributes.y;
      this.attributes.x="";
      this.attributes.y="";

      return this.render();
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
    render: function(){
      var str = "";
      this.el = document.createElementNS(SVGNS, this.attributes.tag);

      function process(key,value,self) {
        function namespace(key){
          var ns = key.split(":")[0].toUpperCase() + "NS";
          
          switch(ns){
            case "SVGNS":
              ns = SVGNS;
              break;
            case "XLINKNS":
              ns = XLINKNS;
              break;
            default:
              ns = SVGNS;
          }
          return ns;
        }
        // log(key + " : "+value);
        if (value && key!='tag'){
          if (key.indexOf(":")>0){
            self.el.setAttributeNS(namespace(key),key,value);
          }else{
            self.el.setAttribute(key,value);
          }
        }
      }
      function traverse(o,func,self) {
            
        for (var i in o) {
          func.apply(this,[i,o[i],self]);
          if (typeof(o[i])=="object") {
            traverse(o[i],func,self);
          }
        }
      }

      traverse(this.attributes,process,this);
      return this.el;
    }
  });
})();