<?php
header ( 'content-type:text/html;charset=utf-8' );
require_once '../php/db_mysql/dbaccess.php';
// error_reporting(0);
session_start ();

if(empty($_GET['function_name'])&&empty($__GET['path'])){
	echo 2;//空值
}else{
	$db = new DB ();
	$_SESSION['user']['number'] = $_SESSION['user']['name'];
	$_SESSION['user']['modify_person']= $_SESSION['user']['name'];

	$call['function_name']=$_GET['function_name'];
	$call['path']=$_GET['path'];
	$call['interface_detail']=$_GET['interface_detail'];
	$call['create_time']=date ( 'Y-m-d H:i:s', time () );
	$call['modify_time']=date ( 'Y-m-d H:i:s', time () );
	$call['extra']='备注默认';
	$call['create_person']=$_GET['person'];
	$call['modify_person']=$_GET['person'];
	
	$res=$db->insert(showinterfacetable, $call);
	if($res){
		echo 1;//成功
	}else{
		echo 0;//失败
	}
}


?>
