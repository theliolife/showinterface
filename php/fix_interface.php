<?php
header ( 'content-type:text/html;charset=utf-8' );
require_once '../php/db_mysql/dbaccess.php';
// error_reporting(0);
session_start ();

if(empty($_GET['function_name'])&&empty($_GET['path'])&&empty($_GET['id'])){
	echo 2;//空值
}else{
	$db = new DB ();
	$_SESSION['user']['number'] = $_SESSION['user']['name'];
	$_SESSION['user']['modify_person']= $_SESSION['user']['name'];

	$call['function_name']=$_GET['function_name'];
	$call['path']=$_GET['path'];
	$call['interface_detail']=$_GET['interface_detail'];
	$call['modify_time']=date ( 'Y-m-d H:i:s', time () );
	$_SESSION['user']['name']=$_GET['modify_persion'];
	
	$sql="UPDATE showinterfacetable set function_name='{$_GET['function_name']}',path='{$_GET['path']}',interface_detail='{$_GET['interface_detail']}',modify_time='{$call['modify_time']}',modify_person='{$_GET['modify_persion']}' where id={$_GET['id']}";
	//echo $sql;
	$res=$db->execsql( $sql );
	if($res){
		echo 1;//成功
	}else{
		echo 0;//失败
	}
}


?>