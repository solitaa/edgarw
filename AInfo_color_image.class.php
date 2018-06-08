<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class AInfo_color_image extends ABase
	{
		protected $id;
		protected $color;
		protected $image;

		function gettable_name() {
        	return "info_color_image";
		}

		public function getid() {
			return $this->id;
		}
		public function getcolor() {
			return $this->color;
		}
		public function getimage() {
			return $this->image;
		}
		public function setcolor($var) {
			return $this->color = $var;
		}
		public function setimage($var) {
			return $this->image = $var;
		}
	}
?>