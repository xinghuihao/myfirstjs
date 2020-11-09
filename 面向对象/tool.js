function show(){
    var d =new Date();
    var year =d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();

    var week=numofchinese(d.getDay());
    var hour=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();

    var str =year +"年"+month+"月"+day+"日"+"星期"+week+hour+"时"+min+"分"+sec+"秒";
    return str;
}
 function numofchinese(n){
     var arr=["日","一","二","三","四","五","六"];
     return arr[n];
 } 
  function doublechinese(n){
      if(n<10){
       return "0"+n;
      }
  }