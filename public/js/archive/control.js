// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
(function() {
  
  window.svgb.Models.Control = window.svgb.Models.Point.extend({
    defaults: {
      'visible':true,
      'x':0,
      'y':0
    },
    initialize: function(){
      
    }
  });

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
})();