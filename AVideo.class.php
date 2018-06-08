<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class AVideo extends ABase
	{
		protected $id;
		protected $inner_page_id;
		protected $video_url;

		function gettable_name() {
        	return "video";
		}

		public function getid() {
			return $this->id;
		}
		public function getinner_page_id() {
			return $this->inner_page_id;
		}
		public function getvideo_url() {
			return $this->video_url;
		}
		public function setinner_page_id($var) {
			return $this->inner_page_id = $var;
		}
		public function setvideo_url($var) {
			return $this->video_url = $var;
		}
	}
?>