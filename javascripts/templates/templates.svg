<script type="text/template" id="tmpl-svgb-frame">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
    version="1.1" type="image/svg+xml" class="<@= css @>" height="<@= height @>" 
    width="<@= width @>" viewBox="<@= viewbox @>"<@= options @>> 
    
    <%= render 'shared/definitions' %>

    <g class="controls"></g>
    
    <g class="stages"></g>
 
    <g class="mask">
      <g clip-path="url(#svgb-mask)"></g>
      <clipPath id="svgb-mask">
        <rect x="0" y="0" height="<@= height @>" width="<@= width @>" />
      </clipPath>
    </g>
    
  </svg> 
</script>

<script type="text/template" id="tmpl-svgb-stage">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" type="image/svg+xml" >
  <g class='<@= name @> stage-data' transform='<@= transform @>' <@= options @>>
    <g class='base'></g>
    <g class='active'></g>
  </g>
  </svg>
</script>

<script type="text/template" id="tmpl-svgb-main-menu-item">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" type="image/svg+xml" >
    <g>
      <rect class="base" x="<@= x @>" y="<@= y @>" height="<@= height @>" width="<@= width @>" />
      <line class="left" x1="0" y1="0" x2="0" y2="<@= height @>" />
      <line class="right" x1="<@= width-3 @>" y1="0" x2="<@= width-3 @>" y2="<@= height @>" />
    </g>
  </svg>
</script>
