(function(){
  


  // <symbol id="s_name) %>">
  //   <image x="0" y="0" width="50" height="50" xlink:href="<%=h path_to_image "icons/s_name.png" %>" />
  // </symbol>

  window.svgb.Models.Button = window.svgb.Models.Point.extend({
    events:null,
    defaults: {
      tag:"g",
      css:"",
      url:"",
      title:"",
      ui:null
    },
    initialize: function(){

    },
    render: function(){
      this.el = document.createElementNS(SVGNS,this.attributes.tag);

      this.el.setAttribute("transform","translate(" + this.attributes.x + "," + this.attributes.y + ")");
      this.el.setAttribute("class",this.attributes.title.toLowerCase() + " button");
      if (this.attributes.ui){
        $(this.el).append(this.attributes.ui.el);
      }

      //title text
      var n_text = document.createElementNS(SVGNS,"text");
      n_text.appendChild(document.createTextNode(this.attributes.title));
      n_text.setAttribute("text-anchor","middle");
      var offset = 40;//(this.attributes.width/2);
      n_text.setAttribute("x",this.attributes.width/2);
      n_text.setAttribute("y",20);

      this.el.appendChild(n_text);

      //btn rect
      var n_btn = document.createElementNS(SVGNS,"rect");
      n_btn.setAttribute("height",this.attributes.height);
      n_btn.setAttribute("width",this.attributes.width);
      n_btn.setAttribute("class","btn");
      $(n_btn).on('click', {url:this.attributes.url}, function(event){
        window.location.href = event.data.url;
      });

      this.el.appendChild(n_btn);

      return this.el;
    } 
  });
  
window.svgb.el = function(self) {
      var nodes = "";
      var node = "";
      //build a node set
      for (var i = 0 ; i < self.template.length ; i++ ){
        node = self.template[i].trim();
        if (node) nodes += node;
      }

      var parser = new DOMParser();
      var SVGDoc = parser.parseFromString(nodes, "text/xml");

      var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
      var adopted = document.importNode(SVGRoot, true);
      
      self.el = document.createElementNS(SVGNS, self.el.localName)

      for (var i = 0 ; i < adopted.childNodes.length ; i++ ){
        self.el.appendChild(adopted.childNodes[i]);
      }
      return self.el;
  }
  //this takes a string of svg and translates it into SVG DOM Elements
  window.svgb.el.update = function(content) {

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
      var el = document.createElementNS(SVGNS, "svg")

      for (var i = 0 ; i < content.length ; i++ ){
        el.appendChild(content[i]);
      }
      return $(el).contents();
  }
})();