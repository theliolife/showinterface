<?php
session_start ();
require_once '../php/db_mysql/dbaccess.php';
$db = new DB ();

$username = $_GET['username'];
$password = $_GET['password'];

$sql = "select * from login where username = '{$username}' and password = '{$password}'";
// echo $sql;die;
$result= $db->getrow ( $sql );
$status = 0;
if(empty($result)){
   $status = -1;
   $arr['status'] = $status;
}else{
   $status = 1;
   $arr['status'] = $status;
   $arr['username']=$result['username'];
   $arr['cn_name']=$result['cn_name'];
   $_SESSION['user']['name'] = $result['username'];
   $arr['sessiontest'] = $_SESSION['user']['name'];

}
echo json_encode ( $arr );



?>