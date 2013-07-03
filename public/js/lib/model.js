(function() {
  svgb.Model = Class.extend({
    template: null,
    name: "",
    string: "",
    svg: null,
    html: null,
    init: function(){

    },
    to_svg: function(v){
      if(!this.svg) return convert_to('svg', v);
    },
    to_html: function(v){
      if(!this.html) return convert_to('html',v);
    },
    to_s: function(){
      if(!this.string) return convert_to('string',v);
    },
    convert_to: function(type, value){
      var update = {
        svg: function(content){
          var parser = new DOMParser();
          if (content.indexOf("svg")<0){
            content = "<svg xmlns=\"http://www.w3.org/2000/svg\" " +
            "xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
            "version=\"1.1\" type=\"image/svg+xml\">" + content + "</svg>";
          }
          var SVGDoc = parser.parseFromString(content, "text/xml");

          var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
          var adopted = document.importNode(SVGRoot, true);
          content = $(adopted).children();
          var el = document.createElementNS(SVGNS, "svg");

          for (var i = 0 ; i < content.length ; i++ ){
            el.appendChild(content[i]);
          }
          return el.firstChild[0] ? el.firstChild[0] : false;
        }
      };

      switch(type){
        case "svg":
          value=update.svg(value);
          break;
        case "html":
          // TODO
          Console.log("convert_to html called, but is not yet implemented");
          break;
        case "string":
          // TODO
          Console.log("convert_to string called, but is not yet implemented");
          break;
        default:
          Console.log("convert_to <type> called, but type is unknown");
          break;
        }
      if (!value) { value=false; Console.log("convert_to tried to convert from null"); }
      return value;
    },
  });
})();