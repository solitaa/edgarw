<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
require_once(dirname(__FILE__) . '/AInner_page.class.php');
require_once(dirname(__FILE__) . '/APage.class.php');
require_once(dirname(__FILE__) . '/ASlider.class.php');
require_once(dirname(__FILE__) . '/ASlider_image.class.php');
require_once(dirname(__FILE__) . '/AVideo.class.php');
require_once(dirname(__FILE__) . '/functions.php');


class InnerPageController extends AInner_page
{
    public static function innerImagesViewPartInProjectPageJson($projectId)
    {
        global $baseURL;
        global $uploadFolderName;

        $innerImages = AInner_page::findAll(array('page_id' => $projectId), 'img_order');
        $pictures = array();

        foreach ($innerImages as $innerImage) {
            if ($innerImage instanceof AInner_page) {
                $id = $innerImage->getid();
                $width = $innerImage->getwidth();
                $height = $innerImage->getheight();
                $positionTop = $innerImage->getposition_top();
                $positionLeft = $innerImage->getposition_left();
                $slider = ASlider::find(array('inner_page_id' => $id));
                $video = AVideo::find(array('inner_page_id' => $id));


                if ($slider instanceof ASlider) {
                    $sliderId = $slider->getid();

                    $sliderImages = ASlider_image::findAll(array('slider_id' => $sliderId), 'img_order');


                    $slImgs = array();
                    foreach ($sliderImages as $sliderImage) {
                        if ($sliderImage instanceof ASlider_image) {
                            $slImageName = $baseURL . $uploadFolderName . $sliderImage->getimage();
                            $slImgId = $sliderImage->getid();
                            $slImgs[] = array('slider_image_id' => $slImgId, 'image_src' => $slImageName);
                        }
                    }
                    $pictures[] = array('id' => $id, 'width' => $width, 'height' => $height, 'top' => $positionTop, 'left' => $positionLeft, 'slider_id' => $sliderId, 'slider_images' => $slImgs);
                } elseif ($video instanceof AVideo) {
                    $videoId = $video->getid();
                    $videoUrl = $video->getvideo_url();
                    $pictures[] = array('id' => $id, 'width' => $width, 'height' => $height, 'top' => $positionTop, 'left' => $positionLeft, 'video_id' => $videoId, 'url' => $videoUrl);
                } else {
                    $imgSrc = $baseURL . $uploadFolderName . $innerImage->getimage();
                    $pictures[] = array('id' => $id, 'width' => $width, 'height' => $height, 'top' => $positionTop, 'left' => $positionLeft, 'src' => $imgSrc);
                }

            }
        }
        echo json_encode($pictures);
    }


    public static function arrange($projectId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        global $icons;

        $scriptData = ['jquery', 'bootstrap', 'ajax','jqueryUI', 'global','resizeEdit'];
        $cssData = ['bootstrap', 'godfrey','jqueryUI', 'all', 'info', 'draganddrop'];
        $divData = ['#container','#main'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        require_once(dirname(__FILE__) . '/view/innerPage/readyButton.php');
        echo createFooterPart($divData);
    }

    public static function view($projectId)
    {

        global $baseURL;
        global $uploadFolderName;
        global $icons;

        $scriptData = ['jquery', 'bootstrap', 'ajax', 'global','resizeView'];
        $cssData = ['bootstrap', 'godfrey', 'all', 'scroll'];
        $divData = ['#container','#main'];
        echo createHeaderPart($scriptData, $cssData, $divData);
        echo createFooterPart($divData);

    }

    public static function update()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;
        if (isset($_POST['data'])) {

            foreach ($_POST['data'] as $imageInfo) {
                var_dump($imageInfo);
                $innerImage = AInner_page::find(array('id' => $imageInfo["pageid"]));
                var_dump($innerImage);

                if ($innerImage instanceof AInner_page) {
                    $innerImage->setposition_top($imageInfo['top']);
                    $innerImage->setposition_left($imageInfo['left']);
                    $innerImage->setwidth($imageInfo['width']);
                    $innerImage->setheight($imageInfo['height']);
                    $innerImage->setdate(date("Y-m-d h:i:s"));
                    $innerImage->save();

                }
            }
        }
    }


    public static function add($pageid)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $uploadFolderName;

        $uploaddir = dirname(__FILE__) . $uploadFolderName;
        $page = APage::find(array('id' => $pageid));
        if ($page instanceof APage) {
            if ($page->getstatus() != 'deleted') {

                if (isset($_FILES['innerimages']) && $_FILES['innerimages']['size'] != 0) {
                    if ($_FILES['innerimages']['name'][0] != '') {
                        $innerImages = $_FILES['innerimages'];

                        foreach ($innerImages['name'] as $key => $innerImage) {

                            $max = 0;
                            $innerImagesForOrder = AInner_page::findAll(array('page_id' => $pageid), 'id');
                            foreach ($innerImagesForOrder as $val) {
                                if ($val instanceof AInner_page) {
                                    if ($val->getimg_order() > $max) {
                                        $max = $val->getimg_order();
                                    }
                                }
                            }


                            $innertPageObj = new AInner_page();
                            if ($innertPageObj instanceof AInner_page) {
                                $innertPageObj->setstatus("active");

                                $imgName = $innerImages['name'][$key];
                                /*if (file_exists($uploaddir . $imgName)) {
                                    unlink($uploaddir . $_FILES['imageik']['name'][$key]);
                                    //$path_parts = pathinfo($imgName);
                                    //$imgName = $path_parts['filename'] . rand(1, 99) . '.' . $path_parts['extension'];

                                }*/
                                move_uploaded_file($_FILES['innerimages']['tmp_name'][$key], $uploaddir . $imgName);
                                $innertPageObj->setimage($imgName);
                                $innertPageObj->setpage_id($pageid);
                                $innertPageObj->setposition_top(0);
                                $innertPageObj->setposition_left(0);
                                $innertPageObj->setwidth(20);
                                $innertPageObj->setheight(20);
                                $innertPageObj->setimg_order($max + 1);
                                $innertPageObj->setstatus('active');
                                $innertPageObj->setdate(date("Y-m-d h:i:s"));
                                $innertPageObj->save();
                            }
                        }
                    }
                }
            }
        }
    }

    public static function addSlider($pageId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;

        $uploaddir = dirname(__FILE__) . $uploadFolderName;
        if (isset($_FILES['sliderImages'])) {

            $innerPageId = null;

            $innertPageObj = new AInner_page();


            $max = 0;
            $innerImagesForOrder = AInner_page::findAll(array('page_id' => $pageId),'id');
            foreach ($innerImagesForOrder as $val) {
                if ($val instanceof AInner_page) {
                    if ($val->getimg_order() > $max) {
                        $max = $val->getimg_order();
                    }
                }
            }

            if ($innertPageObj instanceof AInner_page) {
                $innertPageObj->setpage_id($pageId);
                $innertPageObj->setposition_top(0);
                $innertPageObj->setposition_left(0);
                $innertPageObj->setwidth(20);
                $innertPageObj->setheight(20);
                $innertPageObj->setstatus('active');
                $innertPageObj->setimg_order($max + 1);
                $innertPageObj->setdate(date("Y-m-d h:i:s"));
                $innerPageId = $innertPageObj->save();
            }

            if (is_numeric($innerPageId)) {
                $sl = new ASlider();
                if ($sl instanceof ASlider) {
                    $sl->setinner_page_id($innerPageId);
                    $slId = $sl->save();

                    $sliderImages = $_FILES['sliderImages'];

                    foreach ($sliderImages['name'] as $key => $sliderImage) {
                        $sliderObj = new ASlider_image();
                        if ($sliderObj instanceof ASlider_image) {
                            $imgName = $sliderImages['name'][$key];
                            move_uploaded_file($_FILES['sliderImages']['tmp_name'][$key], $uploaddir . $imgName);

                            var_dump($pageId, $slId);
                            $sliderObj->setslider_id($slId);
                            $sliderObj->setimage($imgName);
                            $sliderObj->setposition_top(0);
                            $sliderObj->setposition_left(0);
                            $sliderObj->setwidth(20);
                            $sliderObj->setheight(20);
                            $sliderObj->setstatus('active');

                            $sliderObj->setdate(date("Y-m-d h:i:s"));
                            $sliderObj->save();
                        }
                    }
                }
            }

        }
    }


    public static function addSliderImage($sliderParentId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        global $uploadFolderName;

        $uploaddir = dirname(__FILE__) . $uploadFolderName;

        $slider = ASlider::find(array('inner_page_id' => $sliderParentId));
        if ($slider instanceof ASlider) {
            $slId = $slider->getid();

            if (isset($_FILES['sliderImages'])) {
                $sliderImages = $_FILES['sliderImages'];

                foreach ($sliderImages['name'] as $key => $sliderImage) {
                    $max = 0;
                    $sliderImagesForOrder = ASlider_image::findAll(array('slider_id' => $slId), 'id');
                    foreach ($sliderImagesForOrder as $val) {
                        if ($val instanceof ASlider_image) {
                            if ($val->getimg_order() > $max) {
                                $max = $val->getimg_order();
                            }
                        }
                    }
                    var_dump($max);

                    $sliderObj = new ASlider_image();
                    if ($sliderObj instanceof ASlider_image) {
                        $imgName = $sliderImages['name'][$key];
                        move_uploaded_file($_FILES['sliderImages']['tmp_name'][$key], $uploaddir . $imgName);

                        $sliderObj->setslider_id($slId);
                        $sliderObj->setimage($imgName);
                        $sliderObj->setposition_top(0);
                        $sliderObj->setposition_left(0);
                        $sliderObj->setwidth(20);
                        $sliderObj->setheight(20);
                        $sliderObj->setstatus('active');
                        $sliderObj->setimg_order($max + 1);
                        $sliderObj->setdate(date("Y-m-d h:i:s"));
                        $sliderObj->save();
                    }
                }
            }
        }
    }

    public static function delete($id)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;

        $img = AInner_page::find(array('id' => $id));
        if ($img instanceof AInner_page) {
            $img->del(array('id' => $id));

        }
    }


    public static function deleteSliderImage($sliderId)
    {
        global $baseURL;

        $img = ASlider_image::find(array('id' => $sliderId));
        if ($img instanceof ASlider_image) {
            $img->del(array('id' => $sliderId));

        }
    }


    public static function innerImagesOrder()
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        $order = 1;
        if (isset($_POST['ids'])) {
            $ids = $_POST['ids'];
            foreach ($ids as $id) {
                $img = AInner_page::find(array('id' => $id));
                if ($img instanceof AInner_page) {
                    var_dump($img);
                    $img->setimg_order($order);
                    $img->save();
                    $order++;
                }
            }
        }


    }

    public static function sliderImagesOrder($sliderParentId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        $order = 1;
        if (isset($_POST['ids'])) {
            $ids = $_POST['ids'];
            foreach ($ids as $id) {
                var_dump($id);
                $img = ASlider_image::find(array('id' => $id));
                if ($img instanceof ASlider_image) {
                    $img->setimg_order($order);
                    $img->save();
                    $order++;
                }
            }
        }
    }

    public static function addVideo($pageId)
    {
        require_once(dirname(__FILE__) . '/inc/session.inc.php');

        global $baseURL;
        if (isset($_POST['videoUrl'])) {
            $videoUrl = $_POST['videoUrl'];

            if (strpos($videoUrl, 'youtu') !== false) {
                $videoUrl = str_replace("watch?v=", "embed/", $videoUrl);
                $videoUrl = explode("&", $videoUrl)[0];
            }
            elseif(strpos($videoUrl, 'vimeo') !== false) {
                preg_match('/\d\d+/', $videoUrl, $matches);
                $videoUrl = "https://player.vimeo.com/video/".$matches[0];

            }



            $max = 0;
            $innerImagesForOrder = AInner_page::findAll(array('page_id' => $pageId),'id');
            foreach ($innerImagesForOrder as $val) {
                if ($val instanceof AInner_page) {
                    if ($val->getimg_order() > $max) {
                        $max = $val->getimg_order();
                    }
                }
            }

            $innerPageId = null;
            $innertPageObj = new AInner_page();

            if ($innertPageObj instanceof AInner_page) {
                $innertPageObj->setpage_id($pageId);
                $innertPageObj->setposition_top(0);
                $innertPageObj->setposition_left(0);
                $innertPageObj->setwidth(20);
                $innertPageObj->setheight(20);
                $innertPageObj->setstatus('active');
                $innertPageObj->setimg_order($max + 1);
                $innertPageObj->setdate(date("Y-m-d h:i:s"));
                $innerPageId = $innertPageObj->save();
            }

            if (is_numeric($innerPageId)) {
                $video = new AVideo();
                if ($video instanceof AVideo) {
                    $video->setvideo_url($videoUrl);
                    $video->setinner_page_id($innerPageId);
                    $video->save();
                }
            }

        }
    }


}