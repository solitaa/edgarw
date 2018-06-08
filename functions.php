<?php

//$scriptData = ['jquery','bootstrap','jqueryUI','ajax','quill','colorpicker','mousewheel','global','projects','allProjectsEdit','pageView', 'resizeEdit', 'resizeView', 'category', 'infoEdit'];
//$cssData = ['jqueryUI','bootstrap','colorpicker','quill','godfrey','all','table','login','info','scroll','draganddrop','category'];



global $baseURL;
$icons = array('left' => 'glyphicon glyphicon-chevron-left', 'right' => 'glyphicon glyphicon-chevron-right', 'remove' => 'glyphicon glyphicon-remove', 'inactive' => 'glyphicon glyphicon-asterisk', 'agree' => 'glyphicon glyphicon-ok', 'open' => 'glyphicon glyphicon-open', 'picture' => 'glyphicon glyphicon-picture');


function createHeadScripts($arr)
{
    global $baseURL;

    $str = '';
    foreach ($arr as $val) {
        if ($val == 'jquery') {
            $str = $str . '<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>';
        }
        if ($val == 'bootstrap') {
            $str = $str . '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
        }
        if ($val == 'jqueryUI') {
            $str = $str . '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>';
        }
        if ($val == 'ajax') {
            $str = $str . '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
        }
        if ($val == 'quill') {
            $str = $str . '<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>';
        }
        if ($val == 'colorpicker') {
            $str = $str . '<script src="https://farbelous.io/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js"></script>';
        }
        if ($val == 'global') {
            $str = $str . '<script src="' . $baseURL . 'js/global.js"></script>';
        }
        if ($val == 'mousewheel') {
            $str = $str . '<script src="' . $baseURL . 'js/lib/jquery.mousewheel.min.js"></script>';
        }
        if ($val == 'projects') {
            $str = $str . '<script src="' . $baseURL . 'js/projects.js"></script>';
        }
        if ($val == 'allProjectsEdit') {
            $str = $str . '<script src="' . $baseURL . 'js/allProjectsEdit.js"></script>';
        }
        if ($val == 'pageView') {
            $str = $str . '<script src="' . $baseURL . 'js/pageView.js"></script>';
        }
        if ($val == 'resizeEdit') {
            $str = $str . '<script src="' . $baseURL . 'js/resizeEdit.js"></script>';
        }
        if ($val == 'resizeView') {
            $str = $str . '<script src="' . $baseURL . 'js/resizeView.js"></script>';
        }
        if ($val == 'category') {
            $str = $str . '<script src="' . $baseURL . 'js/category.js"></script>';
        }
        if ($val == 'infoEdit') {
            $str = $str . '<script src="' . $baseURL . 'js/infoEdit.js"></script>';
        }
    }
    return $str;
}

function createHeadLinks($arr)
{
    global $baseURL;

    $str = '';
    foreach ($arr as $val) {
        if ($val == 'jqueryUI') {
            $str = $str . '<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">';
        }
        if ($val == 'bootstrap') {
            $str = $str . '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">';
        }
        if ($val == 'colorpicker') {
            $str = $str . '<link rel="stylesheet" href="https://farbelous.io/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css">';
        }
        if ($val == 'quill') {
            $str = $str . '<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css">';
        }
        if ($val == 'godfrey') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/MyFontsWebfontsKit.css">';
        }
        if ($val == 'all') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/all.css">';
        }
        if ($val == 'table') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/table.css">';
        }
        if ($val == 'login') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/login.css">';
        }
        if ($val == 'info') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/info.css">';
        }
        if ($val == 'scroll') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/scroll.css">';
        }
        if ($val == 'draganddrop') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/draganddrop.css">';
        }
        if ($val == 'category') {
            $str = $str . '<link rel="stylesheet" href="' . $baseURL . 'css/category.css">';
        }
    }
    return $str;

}


function createHeaderPart($scripts, $links, $divs)
{
    $str = '<!DOCTYPE html>' .
        '<html lang="en">' .
        '<head>' .
        '<title>Studio Edgar Kandratian</title>' .
        '<meta charset="UTF-8">' .
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">' .
        '<meta name="apple-mobile-web-app-capable" content="yes"/>';

    $str = $str . createHeadScripts($scripts) . createHeadLinks($links);
    $str = $str . '</head>' .
        '<body>';

    foreach ($divs as $div) {

        if ($div[0] == '#') {
            $str = $str . '<div id="' . substr($div, 1) . '">';
        } elseif ($div[0] == '.') {
            $str = $str . '<div class="' . substr($div, 1) . '">';
        }
    }

    return $str;

}

function createFooterPart($divs)
{
    $str = '';
    foreach ($divs as $div) {
        $str = $str . '</div>';
    }

    $str = $str . '</body>' .
        '</html>';

    return $str;

}

?>


