(function() {
  svgb.View = Class.extend({
    tagName: 'svg',
    className: this.model ? 'svgb ' + this.model.attributes.css : 'svgb',
    el: null,
    model: null,
    initialize: function(){

    },
    selectors: function(s){
      s=s.spilt(" ");
      var el=null;
      for(var i=0 ; i<s.length ; i++){
        var part=s[i];
        switch(true){
          case(part.indexOf("#")===0):
            //$('#id')
            this.el=this.el ? this.el.getElementById(part.replace("#","")) : document.getElementById(part.replace("#",""));
            // Selecting by class (not compatible with IE6-8, but good with everything else):
          break;
          case(part.indexOf(".")===0):
            //$('.bar')
            this.el=this.el ? this.el.getElementsByClassName(part.repalce(".","")) : document.getElementsByClassName(part.repalce(".",""));
          break;
          default:
            switch(!null){
              case(s.tag):
                // Selecting by tag name:
                // $('span')
                this.el=this.el ? this.el.getElementsByTagName(part) : document.getElementsByTagName(part);
              break;
              case(this.html):
                // Selecting "special" elements:
                // $('html')
                this.el=document.documentElement;
              break;
              case(this.head):
                // $('head')
                this.el=document.head;
              break;
              case(this.body):
                // $('body')
                this.el=document.body;
                break;
              default:
                if (!this.el) this.el = document;
                break;
            }
          break;
        }
      }
    }
  });
  // window.svgb.el = function(self) {
  //       var nodes = "";
  //       var node = "";
  //       //build a node set
  //       for (var i = 0 ; i < self.template.length ; i++ ){
  //         node = self.template[i].trim();
  //         if (node) nodes += node;
  //       }

  //       var parser = new DOMParser();
  //       var SVGDoc = parser.parseFromString(nodes, "text/xml");

  //       var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
  //       var adopted = document.importNode(SVGRoot, true);
        
  //       self.el = document.createElementNS(SVGNS, self.el.localName);

  //       for (var i = 0 ; i < adopted.childNodes.length ; i++ ){
  //         self.el.appendChild(adopted.childNodes[i]);
  //       }
  //       return self.el;
  //   };

  //   //this takes a string of svg and translates it into SVG DOM Elements
  //   window.svgb.el.update = function(content) {

  //       var parser = new DOMParser();
  //       if (content.indexOf("svg")<0){
  //         content = "<svg xmlns=\"http://www.w3.org/2000/svg\" " +
  //         "xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
  //         "version=\"1.1\" type=\"image/svg+xml\">" + content + "</svg>";
  //       }
  //       var SVGDoc = parser.parseFromString(content, "text/xml");

  //       var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
  //       var adopted = document.importNode(SVGRoot, true);
  //       content = $(adopted).children();
  //       var el = document.createElementNS(SVGNS, "svg");

  //       for (var i = 0 ; i < content.length ; i++ ){
  //         el.appendChild(content[i]);
  //       }
  //       return $(el).contents();
  //   };
}());