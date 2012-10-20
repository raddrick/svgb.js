(function($) {
  window.svgb.ControlView = Backbone.View.extend({
    tagName: 'g',
    class: 'ctrl-view',
    
    initialize: function(){
      _.bindAll(this, 'render');
    },
    render: function( template_css_selector ){

      this.template = _.template($(this.options.template).html());
      //Need to parse the template into an SVG DOM
      this.template = this.template(this.model.toJSON()).split('\n');

      var nodes = "";
      var node = "";
      //build a node set
      for (var i = 0 ; i < this.template.length ; i++ ){
        node = this.template[i].trim();
        if (node) nodes += node;
      }

      var parser = new DOMParser();
      var SVGDoc = parser.parseFromString(nodes, "text/xml");

      var SVGRoot = SVGDoc.getElementsByTagName('svg')[0];
      var adopted = document.importNode(SVGRoot, true);
      
      this.el = document.createElementNS(SVGNS, this.el.localName)
      
      //when appending the node is removed, no increment is neccessary
      for (var i = 0 ; i < adopted.childNodes[0].childNodes.length ; i ){ 
        this.el.appendChild(adopted.childNodes[0].childNodes[i]);
      }
      
      this.el.setAttribute("class","ctrl")
      if (this.options.transform) this.el.setAttribute("transform","scale(0)");

      return this;
    }
  });
})();