console.log("加载成功");

/*
   引入模块：遵从AMD规范；
   require 第一个参数必须是数组； 
*/
// require(['testdemo/add'],function(addobj){
//     var res= addobj.outB(10,20);
//     alert(res);
//     addobj.outA()
// });

require.config({
    paths:{
      add:'testdemo/add',
      mul:'testdemo/muli'
    }
})
require(['add','mul'],function(addobj,mul){
    var res= addobj.outB(10,20);
    alert(res);
    addobj.outA()
    alert(mul.outmul(10,50));
})

