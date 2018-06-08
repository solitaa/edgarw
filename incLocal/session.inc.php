<?php
require_once(dirname(__FILE__) . '/db.inc.php');
header('Content-Type: text/html; charset=utf-8');
@session_start();

if (!isset($_SESSION['username'])) {
    global $home;
    var_dump($home);
    header("location: {$home}");
    exit();
}
?>