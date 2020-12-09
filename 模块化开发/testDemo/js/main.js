console.log('加载成功');

require.config({
    paths:{
        'index':'firstdemo/index',
        'scale':'firstdemo/scale',
         'drag':'firstdemo/drag'
    }
})
require(['index'],function(index){
      index.init();
})