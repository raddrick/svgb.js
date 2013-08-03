(function() {
  svgb.Model = Class.extend({
    attributes: [], //key,value pairs
    nodes: [],
    init: function(options){
      if (options){
        if (options.nodes) this.nodes = options.nodes;
      }
    },
    append: function(node){
      console.log(node);
      if (node) this.nodes.push(node);
    },
    to_svg: function(){
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