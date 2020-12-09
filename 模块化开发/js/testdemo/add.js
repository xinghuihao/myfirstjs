define(function(){
    function add(x,y){
        return (x + y)
    }
    function show(){
        console.log("hello world");
    }
    function acc(){
        console.log('运算')
    }
    return {
         outA:show,
         outB:add,
         outC:acc
    }   
})