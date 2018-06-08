<?php
$controllers = array("admin" => "userController", "project" => "pageController", "insights" => "innerPageController", "category" => "categoryController", "info" => "infoController");
$params = explode('/', $_SERVER['REQUEST_URI']);
global $home;
foreach ($params as $key => $val) {
    if ($val == 'edgarw') {
        $index = $key;
    };
}
if ((count($params) - 2 == $index)) {
    header("location: {$home}");
    exit();
} else {
    $cntrName = $params[$index + 1];
    $action = $params[$index + 2];
    $a = count($params) - 1;


    if (isset($controllers[$cntrName])) {

        $controller = $controllers[$cntrName];
        require_once(dirname(__FILE__) . "/{$controller}.php");
        if (method_exists($controller, $action)) {
            if (!(isset($params[$index + 3]))) {
                call_user_func("{$controller}::{$action}");
            } else {
                for ($i = $index + 3; $i <= $a; $i++) {
                    $array[] = $params[$i];
                }
                call_user_func_array("{$controller}::{$action}", $array);
            }
        } else{
            header("location: {$home}");
            exit();
        }
    } else{
        header("location: {$home}");
        exit();
    }
}