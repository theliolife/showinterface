<?php
header ( 'content-type:text/html;charset=utf-8' );
require_once '../php/db_mysql/dbaccess.php';
// error_reporting(0);
session_start ();

if(!$_SESSION['user']['name']&&$_GET['id']){
	echo 2;//空值
}else{
	$db = new DB ();
	$_SESSION['user']['number'] = $_SESSION['user']['name'];
	$_SESSION['user']['modify_person']= $_SESSION['user']['name'];
	$sql="update showinterfacetable set version=0 where id = {$_GET['id']}";
	$res=$db->execsql( $sql );
	if($res){
		echo 1;//成功
	}else{
		echo 0;//失败
	}
}
?>