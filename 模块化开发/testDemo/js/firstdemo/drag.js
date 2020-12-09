define(function(){
    function drag(node){
        node.onmousedown=function(ev){
            var e =ev || window.event
            var offsetX=e.clientX-this.offsetLeft;
            var offsetY=e.clientY-this.offsetTop;
            console.log(offsetX);
            document.onmousemove=function(ev){
                var e=ev || window.event
                var l=e.clientX-offsetX
                var H=e.clientY-offsetY

                var windoWidth=document.documentElement.clientWidth||document.body.clientWidth;
                var windowHeight=document.documentElement.clientHeight||document.body.clientHeight;

                l=rang(l,0,windoWidth-node.offsetWidth);
                H=rang(H,0,windowHeight-node.offsetHeight);

                node.style.left=l+'px';
                node.style.top=H+'px';
            }
            document.onmouseup=function(){
                document.onmousemove=null
            }
        }
    }
         function rang(icur,imin,imax){
            if(icur>=imax){
               return imax
            }else if(icur<=imin){
               return imin
            }else{
                return icur
            }
         }
        return {
            drag:drag,
            rang:rang
    }
    
});