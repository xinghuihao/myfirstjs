define(['scale','drag'],function(scale,drag) {
    function init(){
        var btn=document.getElementById('btn')
        var div1=document.getElementById('div1');
        var div2=document.getElementById('div2')
        var div3=document.getElementById('div3')

        btn.onclick=function(){
            div1.style.display='block'
            scale.scale(div1,div2);
        }
            drag.drag(div3);
    }

    return {
        init:init
    }
    
});