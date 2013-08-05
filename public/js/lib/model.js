(function() {
  svgb.Model = Class.extend({
    defaults: {},
    attributes: {}, //key,value pairs
    nodes: [],
    init: function(options){
      this.nodes=[];
      this.attributes={};
      if (options){
        if (options.defaults){
          for( var k in options.defaults ){
            var a = options.defaults[k];
            this.attributes[k]=a;
          }
        }
        if (options.nodes) this.nodes = options.nodes;
        if (options.width) this.attributes.width = options.width;
        if (options.height) this.attributes.height = options.height;
      }
    },
    append: function(node){
      console.log(node);
      if (node) this.nodes.push(node);
    },
    to_svg: function(){
      var str = "";
       var el = document.createElementNS(SVGNS, this.attributes.tag);

      function process(key,value,el) {
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
          if (typeof value == 'object'){
            if (value._type != "svgb.models.transform"){
              el.setAttributeNS(namespace(key),key,value.join(' '));
            } else {
              if (value.to_s()) el.setAttributeNS(namespace(key),key,value.to_s());
            }
          } else if (key.indexOf(":")>0){
            el.setAttributeNS(namespace(key),key,value);
          }else {
            el.setAttribute(key,value);
          }
        }
      }
      function traverse(o,func,el,recursive) {
            
        for (var i in o) {
          func.apply(this,[i,o[i],el]);
          if (typeof(o[i])=="object" && recursive) {
            traverse(o[i],func,el,1);
          }
        }
      }

      traverse(this.attributes,process,el);
      
      for( var i = 0 ; i < this.nodes.length ; i++ ){
        el.appendChild(this.nodes[i].to_svg());
      }

      return el;
    }
    // to_svg: function(v){
    //   if(!this.svg) return this.convert_to('svg', v);
    // },
    // to_html: function(v){
    //   if(!this.html) return convert_to('html',v);
    // },
    // to_s: function(){
    //   if(!this.string) return convert_to('string',v);
    // },
    // convert_to: function(type, value){
    //   var update = {
    //     svg: function(content){
    //       var parser = new DOMParser();
    //       if (!content) content ="";
    //       if (content.indexOf("svg")<0){
    //         content = "<svg xmlns=\"http://www.w3.org/2000/svg\" " +
    //         "xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
    //         "version=\"1.1\" type=\"image/svg+xml\">" + content + "</svg>";
    //       }
    //       var SVGDoc = parser.parseFromString(content, "text/xml");

    //       var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
    //       var adopted = document.importNode(SVGRoot, true);
    //       content = $(adopted).children();
    //       this.svg = document.createElementNS(SVGNS, "svg");

    //       for (var i = 0 ; i < content.context.attributes.length ; i++ ){
    //         var a=content.context.attributes[i];
    //         this.svg.setAttribute(a.nodeName, a.childNodes[0].data);
    //       }
    //       for (var i = 0 ; i < content.length ; i++ ){
    //         this.svg.appendChild(content[i]);
    //       }
    //       return this.svg;
    //     }
    //   };
    //   switch(type){
    //     case "svg":
    //       value=update.svg(value);
    //       for (var i = 0 ; i < this.model.nodes.length ; i++ ){
    //         value.appendChild(this.model.nodes[i].to_svg());
    //       }
    //       break;
    //     case "html":
    //       // TODO
    //       Console.log("convert_to html called, but is not yet implemented");
    //       break;
    //     case "string":
    //       // TODO
    //       Console.log("convert_to string called, but is not yet implemented");
    //       break;
    //     default:
    //       Console.log("convert_to <type> called, but type is unknown");
    //       break;
    //     }
    //   if (!value) { value=false; Console.log("convert_to tried to convert from null"); }
    //   return value;
    // }
  });
})();