define(['add'],function(add) {
     function mul(x,y){
         add.outC()
         return x*y
         
     }
     return {
          outmul:mul
     }
});