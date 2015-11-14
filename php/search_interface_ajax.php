<?php
session_start ();
header("Content-type: text/html; charset=utf-8");
require_once '../php/db_mysql/dbaccess.php';
// error_reporting(0);
$db = new DB ();

$username = 'lio';
$password = 123;

$sql = "select * from showinterfacetable where version=1";
$result= $db->execsql( $sql );

$num=count($result);
$arr = json_encode($result);
echo $arr;

$status = 0;
if(empty($result)){
	$status = -1;
}else{
	$status = 1;
}

?>