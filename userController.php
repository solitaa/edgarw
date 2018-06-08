<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
require_once(dirname(__FILE__) . '/AUser.class.php');
require_once(dirname(__FILE__) . '/functions.php');

class UserController extends AUser
{
    public static function login()
    {
        global $folderName;
        global $home;
        $scriptData = ['jquery'];
        $cssData = ['godfrey', 'all', 'login'];
        $divData = ['.wrapper'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        require(dirname(__FILE__) . '/view/user/loginStart.php');
        require(dirname(__FILE__) . '/view/user/loginEnd.php');
        echo createFooterPart($divData);
    }

    public static function loginIncorrectInfo()
    {
        global $folderName;
        global $home;
        $scriptData = ['jquery'];
        $cssData = ['godfrey', 'all', 'login'];
        $divData = ['.wrapper'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        require(dirname(__FILE__) . '/view/user/loginStart.php');
        require(dirname(__FILE__) . '/view/user/loginIncorrectInfo.php');
        require(dirname(__FILE__) . '/view/user/loginEnd.php');
        echo createFooterPart($divData);
    }


    public static function checkUserData()
    {
        global $baseURL;
        global $folderName;
        $found = false;
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $user = AUser::find(array("username" => $username));

            if (!($user instanceof AUser)) {
                header("location: {$baseURL}admin/loginIncorrectInfo");
                exit();
            } else {

                $pass_from_db = $user->getpassword();
                if (md5($password) == $pass_from_db) {
                    $found = true;
                    $username = $user->getusername();
                    session_start();
                    $_SESSION['username'] = $username;
                    header("location: {$baseURL}project/wholeList");
                    exit();
                }
                else {
                    header("location: {$baseURL}admin/loginIncorrectInfo");
                    exit();
                }
            }
        } else {
            header("location: {$baseURL}admin/loginIncorrectInfo");
            exit();
        }
    }

    public static function logout()
    {
        global $baseURL;
        session_start();
        session_destroy();
        header("location: {$baseURL}project/view");
        exit();
    }

}