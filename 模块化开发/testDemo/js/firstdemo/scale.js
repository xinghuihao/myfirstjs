define(['drag'],function(drag) {
    function scale(node1, node2){
      node2.onmousedown=function(ev){
          var e =ev || window.event;
          var l=node1.offsetWidth;
          var w=node1.offsetHeight;
          var j=e.clientX;
          var k=e.clientY;

          document.onmousemove=function(ev){
            var e=ev || window.event;
            
            var L=l+(e.clientX-j)
            var W=w+(e.clientY-k)
            L=drag.rang(L,100,500);
            W=drag.rang(L,100,500);
            node1.style.width=L+'px'
            node1.style.height=W+'px'
          }
      }

      document.onmouseup=function(){
           document.onmousemove=null;
      }
     
      }
      return {
        scale: scale
    }
   
});