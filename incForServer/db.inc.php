<?php
require_once(dirname(__FILE__) . "/config.inc.php");
//$db = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=utf8", $dbuser, $dbpass);
$db = new PDO("mysql:host=$dbhost;dbport=$dbport;dbname=$dbname;charset=utf8", $dbuser, $dbpass);
$db->exec("SET NAMES UTF8");
?>