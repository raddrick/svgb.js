(function(){
  // <symbol id="s_name) %>">
  //   <image x="0" y="0" width="50" height="50" xlink:href="<%=h path_to_image "icons/s_name.png" %>" />
  // </symbol>

  svgb.models.Button = svgb.models.Point.extend({
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