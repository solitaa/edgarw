<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
require_once(dirname(__FILE__) . '/AInfo.class.php');
require_once(dirname(__FILE__) . '/AInfo_color_image.class.php');
require_once(dirname(__FILE__) . '/functions.php');



class InfoController extends AInfo
{
    public static function infoView()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        $info1 = AInfo::find(array('id' => 1));
        $info3 = AInfo::find(array('id' => 3));
        $info4 = AInfo::find(array('id' => 4));
        $info5 = AInfo::find(array('id' => 5));
        $info6 = AInfo::find(array('id' => 6));
        $info7 = AInfo::find(array('id' => 7));
        $info8 = AInfo::find(array('id' => 8));
        $info9 = AInfo::find(array('id' => 9));
        $info10 = AInfo::find(array('id' => 10));
        $info11 = AInfo::find(array('id' => 11));

        $info = AInfo_color_image::find(array('id' => 1));
        $infoColor = '#ffffff';
        $infoImage = '';
        if ($info instanceof AInfo_color_image) {
            $infoColor = $info->getcolor();
            $infoImage = $info->getimage();
        }
        global $icons;
        $scriptData = ['jquery', 'bootstrap', 'ajax', 'quill', 'colorpicker', 'global', 'infoEdit'];
        $cssData = ['bootstrap', 'quill', 'colorpicker', 'godfrey', 'all', 'table', 'info'];
        $divData = ['.wrapper', '.aboutDiv project activeProject'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        echo createFooterPart($divData);
    }



    public static function infoJson()
    {
        $infos = AInfo::findAll(array(), 'id');

        $sendInfo = array();

        foreach ($infos as $info) {
            if ($info instanceof AInfo) {
                $infoId = $info->getid();
                $infoText = $info->gettext();

                $sendInfo[] = array('id' => $infoId,
                    'text' => $infoText);
            }
        }

        $colorImage = AInfo_color_image::find(array('id' => 1));

        if ($colorImage instanceof AInfo_color_image) {
            $aboutCol = $colorImage->getcolor();
            $aboutImage = $colorImage->getimage();

            $sendInfo[] = array('colors' => $aboutCol,
                'aboutImage' => $aboutImage);
        }


        echo json_encode($sendInfo);

    }

    public static function update()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        if (isset($_POST['info'])) {
            $texts = $_POST['info'];

            foreach ($texts as $index => $text) {
                $info = AInfo::find(array('id' => $index));
                if ($info instanceof AInfo) {
                    $info->settext($text);
                    $info->setdate(date("Y-m-d h:i:s"));
                    $info->save();
                }
            }
        }
    }

    public static function updateImageAndColor()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        $uploaddir = dirname(__FILE__) . $uploadFolderName;

        if (isset($_POST['updateInfoImageColor'])) {
            $info = AInfo_color_image::find(array('id' => 1));
            var_dump($info);

            if (isset($_POST['registryTextColor']) && isset($_POST['registryBgColor']) && isset($_POST['infoTextColor']) && isset($_POST['infoBgColor']) && $_POST['registryTextColor'] != "" && $_POST['registryBgColor'] != "" && $_POST['infoTextColor'] != "" && $_POST['infoBgColor'] != "") {
                $registryTextColor = $_POST['registryTextColor'];
                $registryBgColor = $_POST['registryBgColor'];
                $infoTextColor = $_POST['infoTextColor'];
                $infoBgColor = $_POST['infoBgColor'];

                $cols = json_encode(['infoBgColor' => $infoBgColor, 'infoTextColor' => $infoTextColor, 'registryBgColor' => $registryBgColor, 'registryTextColor' => $registryTextColor]);
                var_dump($cols);

                if ($info instanceof AInfo_color_image) {
                    $info->setcolor($cols);
                }
            }
            if (isset($_FILES["infoImage"])) {
                $image = $_FILES["infoImage"];
                if ($image['name']) {
                    $imgName = $image['name'];
                    move_uploaded_file($_FILES['infoImage']['tmp_name'], $uploaddir . $imgName);

                    $info->setimage($imgName);
                }
            }
            $info->save();
        }
        header("location: {$baseURL}info/infoView");
        exit();
    }
}