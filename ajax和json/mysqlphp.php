<?php
  header('content-type:text/html;charset="utf-8"');

  //链接数据数据库；

  // 1，链接数据库
  /*
   1，第一个参数；连接数据库的ip和域名；
   2，第二个参数；用户名
   3，第三个参数：密码
  */
  $link=mysql_connet("localhost","root","123456");
  if(!$link){
    echo "连接失败";
    exit;
  }
   


?>