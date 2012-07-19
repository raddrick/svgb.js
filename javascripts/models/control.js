// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function($) {
  
  window.svgb.Control = Backbone.Model.extend({
    defaults: {
      'visible':true,
      'x':0,
      'y':0
    },
    initialize: function(){
      
    }
  });
  
  window.svgb.Controls = Backbone.Collection.extend({
    model: svgb.Control,
    url: '/'
  });

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

  window.svgb.Button = window.svgb.Point.extend({
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

})(jQuery);