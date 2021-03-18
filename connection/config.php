<?php
try{

  $server = 'localhost';
  $usern = 'root';
  $password = '';
  $dbname = 'dev_in_india';

  $con = new PDO("mysql:host=$server; dbname=$dbname", $usern,$password);

if(!$con){
	die('no connection');

}}catch(PDOException $e){
   echo "Error: " . $e->getMessage();
}
?>