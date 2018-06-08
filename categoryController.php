<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
require_once(dirname(__FILE__) . '/ACategory.class.php');
require_once(dirname(__FILE__) . '/APage.class.php');
require_once(dirname(__FILE__) . '/functions.php');



class CategoryController extends ACategory
{
    public static function add()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        if (isset($_POST['name']) && $_POST['name'] != '') {
            $newCatName = $_POST['name'];

            $c = new ACategory();
            $c->setname($newCatName);
            $id = $c->save();
            echo json_encode(['id'=>$id,'name'=>$newCatName]);
        }
    }

    public static function view()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        global $icons;

        $scriptData = ['jquery', 'ajax', 'global', 'category'];
        $cssData = ['godfrey', 'all', 'info', 'category'];
        $divData = ['#container'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        echo createFooterPart($divData);

    }

    public static function categoryJson()
    {
        global $baseURL;
        $categories = ACategory::findAll(array(), 'id');

        $info = array();

        foreach ($categories as $category) {
            if ($category instanceof ACategory) {

                $categoryId = $category->getid();
                $categoryName = $category->getname();

                $usedInProjects = [];
                $projects = APage::findAll(array(), 'id');
                foreach ($projects as $project) {
                    if ($project instanceof APage) {
                        $checked = '';
                        $projectCategories = $project->getcategory();
                        $projectBottomLeft = $project->getbottom_left_text();
                        $projectId = $project->getid();

                        $projectCategoriesArr = explode(",", $projectCategories);
                        if (in_array($categoryName, $projectCategoriesArr)) {
                            $usedInProjects[] = $projectBottomLeft;
                        }
                    }
                }


                $info[] = array('id' => $categoryId,
                    'name' => $categoryName,
                    'usage' => $usedInProjects);

            }
        }

        echo json_encode($info);

    }


    public static function delete($catid)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        $cat = ACategory::find(array('id' => $catid));
        if ($cat instanceof ACategory) {

            $categoryName = $cat->getname();

            $projects = APage::findAll(array(), 'id');
            foreach ($projects as $project) {
                if ($project instanceof APage) {

                    $projectCategories = $project->getcategory();
                    $projectBottomLeft = $project->getbottom_left_text();
                    $projectId = $project->getid();

                    $projectCategoriesArr = explode(",", $projectCategories);

                    if (($key = array_search($categoryName, $projectCategoriesArr)) !== false) {
                        unset($projectCategoriesArr[$key]);

                    }
                    $updatedCategories = implode(',',$projectCategoriesArr);
                    $project->setcategory($updatedCategories);
                    $project->save();


                }
            }
            $cat->del(array('id' => $catid));
        }
    }

}