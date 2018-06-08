<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
require_once(dirname(__FILE__) . '/APage.class.php');
require_once(dirname(__FILE__) . '/AInner_page.class.php');
require_once(dirname(__FILE__) . '/ACategory.class.php');
require_once(dirname(__FILE__) . '/ASlider.class.php');
require_once(dirname(__FILE__) . '/ASlider_image.class.php');
require_once(dirname(__FILE__) . '/AVideo.class.php');
require_once(dirname(__FILE__) . '/functions.php');


class PageController extends APage
{
    public static function wholeList()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        $scriptData = ['jquery', 'bootstrap', 'ajax', 'global', 'allProjectsEdit'];
        $cssData = ['bootstrap', 'godfrey', 'all', 'info'];
        $divData = ['.wrapperScrollable', '.content'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        echo createFooterPart($divData);


    }


    public static function edit($id)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        global $icons;
        $scriptData = ['jquery', 'bootstrap', 'jqueryUI', 'ajax', 'quill', 'colorpicker', 'global', 'projects'];
        $cssData = ['jqueryUI', 'bootstrap', 'quill', 'colorpicker', 'godfrey', 'all', 'table', 'info'];
        $divData = ['.wrapperScrollable'];
        echo createHeaderPart($scriptData, $cssData, $divData);

        $project = APage::find(array('id' => $id));


        if ($project instanceof APage) {

            $opacity = 1;
            if ($project->getstatus() == "inactive") {
                $opacity = 0.5;
            }
            $projectId = $project->getid();
            $projectTopLeft = $project->gettop_left_text();
            $projectTopRight = $project->gettop_right_text();
            $projectBottomLeft = $project->getbottom_left_text();
            $projectBottomRight = $project->getbottom_right_text();
            $projectCategories = $project->getcategory();
            $textColor = $project->gettext_color();
            $innerBgColor = $project->getinner_bg_color();
            $innerTextColor = $project->getinner_text_color();
            $projectImageS = $project->getimage_small();
            $projectImageM = $project->getimage_medium();
            $projectImageL = $project->getimage_large();
            $projectImageSizeS = $project->getimage_small_size();
            $projectImageSizeM = $project->getimage_medium_size();
            $projectImageSizeL = $project->getimage_large_size();
            $projectInsightsText = $project->getinner_text();

            $year = $project->getyear();
            $client = $project->getclinet();
            $idFromProjectName = preg_replace('/\P{Xan}+/u', '', $projectBottomLeft);

            if (!$innerTextColor)
                $innerTextColor = '#ffffff';


            require(dirname(__FILE__) . '/view/project/tableStart.php');
            $projectCategoriesArr = explode(",", $projectCategories);


            $categories = ACategory::findAll(array(), 'id');
            foreach ($categories as $category) {
                if ($category instanceof ACategory) {
                    $checked = '';
                    $color = "#ffffff";
                    $cName = $category->getname();
                    $cId = $category->getid();
                    if (in_array($cName, $projectCategoriesArr)) {
                        $checked = 'checked';
                        $color = "#c4daff";
                    }
                    require(dirname(__FILE__) . '/view/project/category.php');
                }
            }
            require(dirname(__FILE__) . '/view/project/tableEnd.php');
            require(dirname(__FILE__) . '/view/project/editInsightsText.php');
            require(dirname(__FILE__) . '/view/project/tableEndClosingTags.php');

        }

        echo createFooterPart($divData);

    }

    public static function view()
    {
        global $baseURL;
        global $uploadFolderName;
        global $icons;
        $scriptData = ['jquery', 'bootstrap', 'ajax', 'mousewheel', 'global', 'pageView'];
        $cssData = ['bootstrap', 'godfrey', 'scroll', 'info', 'all'];
        $divData = ['.wrapper'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        echo createFooterPart($divData);
    }

    public static function pageInfoJson()
    {
        global $baseURL;
        global $uploadFolderName;
        $projects = APage::findAll(array(), 'project_order');


        $info = array();

        foreach ($projects as $project) {
            if ($project instanceof APage) {
                if ($project->getstatus() != "inactive") {

                    $projectId = $project->getid();
                    $projectTopLeft = $project->gettop_left_text();
                    $projectTopRight = $project->gettop_right_text();
                    $projectBottomLeft = $project->getbottom_left_text();
                    $projectBottomRight = $project->getbottom_right_text();
                    $projectCategories = $project->getcategory();
                    $textColor = $project->gettext_color();
                    $innerBgColor = $project->getinner_bg_color();
                    $innerTextColor = $project->getinner_text_color();
                    $projectImageS = $project->getimage_small();
                    $projectImageM = $project->getimage_medium();
                    $projectImageL = $project->getimage_large();
                    $projectImageSizeS = $project->getimage_small_size();
                    $projectImageSizeM = $project->getimage_medium_size();
                    $projectImageSizeL = $project->getimage_large_size();
                    $insightsText = $project->getinner_text();
                    $year = $project->getyear();
                    $client = $project->getclinet();
                    $date = $project->getdate();


                    $info[] = array('id' => $projectId,
                        'top_left_text' => $projectTopLeft,
                        'top_right_text' => $projectTopRight,
                        'bottom_left_text' => $projectBottomLeft,
                        'bottom_right_text' => $projectBottomRight,
                        'categories' => $projectCategories,
                        'text_color' => $textColor,
                        'inner_bg_color' => $innerBgColor,
                        'inner_text_color' => $innerTextColor,
                        'inner_text' => $insightsText,
                        'year' => $year,
                        'client' => $client,
                        'date' => $date,
                        'image_small' => $uploadFolderName . $projectImageS,
                        'image_medium' => $uploadFolderName . $projectImageM,
                        'image_large' => $uploadFolderName . $projectImageL,
                        'image_small_size' => $projectImageSizeS,
                        'image_medium_size' => $projectImageSizeM,
                        'image_large_size' => $projectImageSizeL);
                }
            }
        }
        echo json_encode($info);

    }

    public static function InsightsTextJson($id)
    {
        global $baseURL;
        $projects = APage::find(array('id' => $id));

        $info = [];

        foreach ($projects as $project) {
            if ($project instanceof APage) {
                $insightsText = $project->getinner_text();
                $info[] = array('insights_text' => $insightsText);
            }
        }
        echo json_encode($info);
    }


    public static function update()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;

        $uploaddir = dirname(__FILE__) . $uploadFolderName;
        $bottomLeft = '';
        if (isset($_POST['update'])) {
            if (isset($_POST['year']) && isset($_POST['client_name']) && isset($_POST['textColor']) && isset($_POST['innerBgColor']) && isset($_POST['innerTextColor']) && isset($_POST['id']) && isset($_POST['top_left']) && isset($_POST['top_right']) && isset($_POST['bottom_left']) && isset($_POST['bottom_right']) && isset($_POST['category']) && isset($_FILES["imageikSmall"]) && isset($_FILES["imageikMedium"]) && isset($_FILES["imageikLarge"])) {

                $id = $_POST['id'];
                $topLeft = $_POST['top_left'];
                $topRight = $_POST['top_right'];
                $bottomLeft = $_POST['bottom_left'];
                $bottomRight = $_POST['bottom_right'];
                $textColor = $_POST['textColor'];
                $innerBgColor = $_POST['innerBgColor'];
                $innerTextColor = $_POST['innerTextColor'];
                $categories = $_POST['category'];
                $client = $_POST['client_name'];
                $year = $_POST['year'];
                $imageSmall = $_FILES["imageikSmall"];
                $imageMedium = $_FILES["imageikMedium"];
                $imageLarge = $_FILES["imageikLarge"];


                $kpac = implode(",", $categories);
                $pageInfoOld = APage::find(array('id' => $id));

                if ($pageInfoOld instanceof APage) {
                    $changes = false;
                    if ($pageInfoOld->gettop_left_text() != $topLeft) {
                        $pageInfoOld->settop_left_text($topLeft);
                        $changes = true;
                    }
                    if ($pageInfoOld->gettop_right_text() != $topRight) {
                        $pageInfoOld->settop_right_text($topRight);
                        $changes = true;
                    }
                    if ($pageInfoOld->getbottom_left_text() != $bottomLeft) {
                        $pageInfoOld->setbottom_left_text($bottomLeft);
                        $changes = true;
                    }
                    if ($pageInfoOld->getbottom_right_text() != $bottomRight) {
                        $pageInfoOld->setbottom_right_text($bottomRight);
                        $changes = true;
                    }
                    if ($pageInfoOld->gettext_color() != $textColor) {
                        $pageInfoOld->settext_color($textColor);
                        $changes = true;
                    }
                    if ($pageInfoOld->getinner_bg_color() != $innerBgColor) {
                        $pageInfoOld->setinner_bg_color($innerBgColor);
                        $changes = true;
                    }
                    if ($pageInfoOld->getinner_text_color() != $innerTextColor) {
                        $pageInfoOld->setinner_text_color($innerTextColor);
                        $changes = true;
                    }

                    if ($pageInfoOld->getcategory() != $kpac) {
                        $pageInfoOld->setcategory($kpac);
                        $changes = true;
                    }
                    if ($pageInfoOld->getyear() != $year) {
                        $pageInfoOld->setyear($year);
                        $changes = true;
                    }
                    if ($pageInfoOld->getclinet() != $client) {
                        $pageInfoOld->setclinet($client);
                        $changes = true;
                    }


                    if ($imageSmall['name']) {
                        $imgSmallName = $imageSmall['name'];
                        $imgSmallSize = round($imageSmall['size'] / 1024);

                        /*if (file_exists($uploaddir . $imgName)) {
                            //unlink($uploaddir . $_FILES['imageik']['name'][$key]);
                            $path_parts = pathinfo($imgName);
                            $imgName = $path_parts['filename'] . rand(1, 99) . '.' . $path_parts['extension'];

                        }*/

                        move_uploaded_file($_FILES['imageikSmall']['tmp_name'], $uploaddir . $imgSmallName);
                        $pageInfoOld->setimage_small($imgSmallName);
                        $pageInfoOld->setimage_small_size($imgSmallSize);
                        //$pageInfoOld->setimage_blob($imageBlob);
                        $changes = true;
                    }


                    if ($imageMedium['name']) {
                        $imgMediumName = $imageMedium['name'];
                        $imgMediumSize = round($imageMedium['size'] / 1024);
                        move_uploaded_file($_FILES['imageikMedium']['tmp_name'], $uploaddir . $imgMediumName);
                        $pageInfoOld->setimage_medium($imgMediumName);
                        $pageInfoOld->setimage_medium_size($imgMediumSize);
                        $changes = true;
                    }
                    if ($imageLarge['name']) {
                        $imgLargeName = $imageLarge['name'];
                        $imgLargeSize = round($imageLarge['size'] / 1024);
                        move_uploaded_file($_FILES['imageikLarge']['tmp_name'], $uploaddir . $imgLargeName);
                        $pageInfoOld->setimage_large($imgLargeName);
                        $pageInfoOld->setimage_large_size($imgLargeSize);

                        $changes = true;
                    }
                    if ($changes) {
                        $pageInfoOld->setdate(date("Y-m-d h:i:s"));
                        $pageInfoOld->save();
                    }

                }
            }
        }
        header("location: {$baseURL}project/edit/{$id}");
        exit();

    }

    public static function updateInsightsText($id)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        if (isset($_POST['info'])) {
            $innerText = $_POST['info'];

            $pageInfoOld = APage::find(array('id' => $id));
            if ($pageInfoOld instanceof APage) {

                $pageInfoOld->setinner_text($innerText);
                $pageInfoOld->setdate(date("Y-m-d h:i:s"));
                $pageInfoOld->save();
            }
        }
    }


    public static function add($afrerId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;

        $uploaddir = dirname(__FILE__) . $uploadFolderName;
        $bottomLeft = '';
        $newProjectId = 0;
        if (isset($_POST['addmore'])) {
            if (isset($_POST['year']) && isset($_POST['client_name']) && isset($_POST['textColor']) && isset($_POST['innerBgColor']) && isset($_POST['innerTextColor']) && isset($_POST['top_left']) && isset($_POST['top_right']) && isset($_POST['bottom_left']) && isset($_POST['bottom_right']) && isset($_POST['category']) && isset($_FILES["imageikSmall"]) && isset($_FILES["imageikMedium"]) && isset($_FILES["imageikLarge"])) {
                //$ids = $_POST['id'];
                $topLeft = $_POST['top_left'];
                $topRight = $_POST['top_right'];
                $bottomLeft = $_POST['bottom_left'];
                $bottomRight = $_POST['bottom_right'];
                $categories = $_POST['category'];
                $textColor = $_POST['textColor'];
                $innerBgColor = $_POST['innerBgColor'];
                $innerTextColor = $_POST['innerTextColor'];
                $client = $_POST['client_name'];
                $year = $_POST['year'];
                $imageSmall = $_FILES["imageikSmall"];
                $imageMedium = $_FILES["imageikMedium"];
                $imageLarge = $_FILES["imageikLarge"];

                $pageInfoNew = new APage();
                if ($pageInfoNew instanceof APage) {
                    if ($_POST['top_left'] != '' && $_POST['top_left'] != '' && $_POST['top_right'] != '' && $_POST['bottom_left'] != '' && $_POST['bottom_right'] != '' && $_POST['client_name'] != '' && $_POST['category'] != '') {

                        $kpac = implode(",", $categories);
                        $pageInfoNew->settop_left_text($topLeft);
                        $pageInfoNew->settop_right_text($topRight);
                        $pageInfoNew->setbottom_left_text($bottomLeft);
                        $pageInfoNew->setbottom_right_text($bottomRight);
                        $pageInfoNew->setcategory($kpac);
                        $pageInfoNew->setstatus("active");
                        $pageInfoNew->settext_color($textColor);
                        $pageInfoNew->setinner_bg_color($innerBgColor);
                        $pageInfoNew->setinner_text_color($innerTextColor);
                        $pageInfoNew->setyear($year);
                        $pageInfoNew->setclinet($client);


                        $prevProject = APage::find(array('id' => $afrerId));
                        if ($prevProject instanceof APage) {
                            $prevProjectOrder = $prevProject->getproject_order();

                            if (is_numeric($prevProjectOrder)) {
                                $pageInfoNew->setproject_order($prevProjectOrder + 1);


                                //updating order
                                $projects = APage::findAll(array(), 'id');
                                foreach ($projects as $project) {
                                    if ($project instanceof APage) {
                                        //  Get post info
                                        if ($project->getproject_order() >= $prevProjectOrder + 1) {
                                            $newOrder = $project->getproject_order() + 1;
                                            $project->setproject_order($newOrder);
                                            $project->save();

                                        }
                                    }
                                }
                            }
                        }

                        $imgSmallName = $imageSmall['name'];
                        $imgMediumName = $imageMedium['name'];
                        $imgLargeName = $imageLarge['name'];

                        $imgSmallSize = round($imageSmall['size'] / 1024);
                        $imgMediumSize = round($imageMedium['size'] / 1024);
                        $imgLargeSize = round($imageLarge['size'] / 1024);


                        move_uploaded_file($_FILES['imageikSmall']['tmp_name'], $uploaddir . $imgSmallName);
                        move_uploaded_file($_FILES['imageikMedium']['tmp_name'], $uploaddir . $imgMediumName);
                        move_uploaded_file($_FILES['imageikLarge']['tmp_name'], $uploaddir . $imgLargeName);

                        $pageInfoNew->setimage_small($imgSmallName);
                        $pageInfoNew->setimage_medium($imgMediumName);
                        $pageInfoNew->setimage_large($imgLargeName);

                        $pageInfoNew->setimage_small_size($imgSmallSize);
                        $pageInfoNew->setimage_medium_size($imgMediumSize);
                        $pageInfoNew->setimage_large_size($imgLargeSize);


                        $pageInfoNew->setdate(date("Y-m-d h:i:s"));
                        $newProjectId = $pageInfoNew->save();


                    }
                }
            }
        }
        if ($newProjectId != 0) {
            header("location: {$baseURL}project/edit/" . $newProjectId);
            exit();
        } else {
            header("location: {$baseURL}project/wholeList");
            exit();
        }


    }

    public static function changeProjectsOrder()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        $order = 1;
        if (isset($_POST['ids'])) {
            $ids = $_POST['ids'];
            foreach ($ids as $id) {
                $project = APage::find(array('id' => $id));
                if ($project instanceof APage) {
                    var_dump($project);
                    $project->setproject_order($order);
                    $project->save();
                    $order++;
                }
            }
        }
    }

    public static function notFound() {

        global $home;
        header("location: {$home}");
        exit();


    }

    public static function inactive($pageid)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        $page = APage::find(array('id' => $pageid));
        if ($page instanceof APage) {
            $opacity = 1;
            if ($page->getstatus() == 'active') {
                $page->setstatus('inactive');
                $opacity = 0.5;
            } else if ($page->getstatus() == 'inactive') {
                $page->setstatus('active');
                $opacity = 1;
            }
            $page->save();
            echo $opacity;
        }
    }

    public static function deleteForever($pageid)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        $page = APage::find(array('id' => $pageid));
        if ($page instanceof APage) {
            $page->del(array('id' => $pageid));
            header("location: {$baseURL}project/wholeList");
            exit();
        }

    }

}