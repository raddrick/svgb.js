(function(){

  // name:"main",
  // x:4,
  // y:120,
  // height:205,
  // width: 110,
  // button_css:"",   
  // items:[
  //   {
  //     //svgb.Buttons
  //     title:"Overview",
  //     url:"#overview" 
  //   }
  window.svgb.Models.Menu = window.svgb.Models.Point.extend({
    defaults: {
      "tag":"g",
      "width":0,
      "height":0,
      "name":"",
      "url":"assets/default.png", // xlink:href
      "ui":null
    },
    // [svgb.Button,...]
    items:[],
    //if there is a template, use one? // TODO: implement templating
    template:{},
    //this will get
    initialize: function(){
      this.attributes.items;
    },
    render: function(){
      this.el = document.createElementNS(SVGNS,this.attributes.tag);
      this.el.setAttribute("transform","translate(" + this.attributes.x + "," + this.attributes.y + ")");
      this.el.setAttribute("class",this.attributes.name + " menu");
      
      var count = this.attributes.items.length;
      //TODO this might need a g element to be defined..
      for(var i=0 ; i < count ; i++){
        var item = this.attributes.items[i];
        item.height=this.attributes.height;
        item.width=this.attributes.width/this.attributes.items.length;
        item.x=i*item.width; // horizontal orientation
        item.y=0;//i*item.height //vertical orientation

        //set up the ui template of the button
        //recieved as a new SVGB Control
        //add values needed by the template to complete the
        //rendering of the button
        item.ui=this.attributes.ui;
        if (item.ui){
          item.ui.model=new svgb.Control({
            height:item.height,
            width:item.width
          })
          item.ui.render();
        }

        var button = new svgb.Button(item).render();
        this.items.push(button);
        this.el.appendChild(button);
      }
      
      return this.el;
    } 
  });
})();