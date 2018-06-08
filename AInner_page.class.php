<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class AInner_page extends ABase
	{
		protected $id;
		protected $page_id;
		protected $image;
		protected $position_top;
		protected $position_left;
		protected $width;
		protected $height;
		protected $date;
		protected $img_order;
		protected $status;

		function gettable_name() {
        	return "inner_page";
		}

		public function getid() {
			return $this->id;
		}
		public function getpage_id() {
			return $this->page_id;
		}
		public function getimage() {
			return $this->image;
		}
		public function getposition_top() {
			return $this->position_top;
		}
		public function getposition_left() {
			return $this->position_left;
		}
		public function getwidth() {
			return $this->width;
		}
		public function getheight() {
			return $this->height;
		}
		public function getdate() {
			return $this->date;
		}
		public function getimg_order() {
			return $this->img_order;
		}
		public function getstatus() {
			return $this->status;
		}
		public function setpage_id($var) {
			return $this->page_id = $var;
		}
		public function setimage($var) {
			return $this->image = $var;
		}
		public function setposition_top($var) {
			return $this->position_top = $var;
		}
		public function setposition_left($var) {
			return $this->position_left = $var;
		}
		public function setwidth($var) {
			return $this->width = $var;
		}
		public function setheight($var) {
			return $this->height = $var;
		}
		public function setdate($var) {
			return $this->date = $var;
		}
		public function setimg_order($var) {
			return $this->img_order = $var;
		}
		public function setstatus($var) {
			return $this->status = $var;
		}
	}
?>