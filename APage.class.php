<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class APage extends ABase
	{
		protected $id;
		protected $top_left_text;
		protected $top_right_text;
		protected $bottom_left_text;
		protected $bottom_right_text;
		protected $image_small;
		protected $image_small_size;
		protected $image_medium;
		protected $image_medium_size;
		protected $image_large;
		protected $image_large_size;
		protected $image_extra_large;
		protected $image_extra_large_size;
		protected $date;
		protected $category;
		protected $year;
		protected $clinet;
		protected $text_color;
		protected $inner_bg_color;
		protected $inner_text_color;
		protected $inner_text;
		protected $project_order;
		protected $status;

		function gettable_name() {
        	return "page";
		}

		public function getid() {
			return $this->id;
		}
		public function gettop_left_text() {
			return $this->top_left_text;
		}
		public function gettop_right_text() {
			return $this->top_right_text;
		}
		public function getbottom_left_text() {
			return $this->bottom_left_text;
		}
		public function getbottom_right_text() {
			return $this->bottom_right_text;
		}
		public function getimage_small() {
			return $this->image_small;
		}
		public function getimage_small_size() {
			return $this->image_small_size;
		}
		public function getimage_medium() {
			return $this->image_medium;
		}
		public function getimage_medium_size() {
			return $this->image_medium_size;
		}
		public function getimage_large() {
			return $this->image_large;
		}
		public function getimage_large_size() {
			return $this->image_large_size;
		}
		public function getimage_extra_large() {
			return $this->image_extra_large;
		}
		public function getimage_extra_large_size() {
			return $this->image_extra_large_size;
		}
		public function getdate() {
			return $this->date;
		}
		public function getcategory() {
			return $this->category;
		}
		public function getyear() {
			return $this->year;
		}
		public function getclinet() {
			return $this->clinet;
		}
		public function gettext_color() {
			return $this->text_color;
		}
		public function getinner_bg_color() {
			return $this->inner_bg_color;
		}
		public function getinner_text_color() {
			return $this->inner_text_color;
		}
		public function getinner_text() {
			return $this->inner_text;
		}
		public function getproject_order() {
			return $this->project_order;
		}
		public function getstatus() {
			return $this->status;
		}
		public function settop_left_text($var) {
			return $this->top_left_text = $var;
		}
		public function settop_right_text($var) {
			return $this->top_right_text = $var;
		}
		public function setbottom_left_text($var) {
			return $this->bottom_left_text = $var;
		}
		public function setbottom_right_text($var) {
			return $this->bottom_right_text = $var;
		}
		public function setimage_small($var) {
			return $this->image_small = $var;
		}
		public function setimage_small_size($var) {
			return $this->image_small_size = $var;
		}
		public function setimage_medium($var) {
			return $this->image_medium = $var;
		}
		public function setimage_medium_size($var) {
			return $this->image_medium_size = $var;
		}
		public function setimage_large($var) {
			return $this->image_large = $var;
		}
		public function setimage_large_size($var) {
			return $this->image_large_size = $var;
		}
		public function setimage_extra_large($var) {
			return $this->image_extra_large = $var;
		}
		public function setimage_extra_large_size($var) {
			return $this->image_extra_large_size = $var;
		}
		public function setdate($var) {
			return $this->date = $var;
		}
		public function setcategory($var) {
			return $this->category = $var;
		}
		public function setyear($var) {
			return $this->year = $var;
		}
		public function setclinet($var) {
			return $this->clinet = $var;
		}
		public function settext_color($var) {
			return $this->text_color = $var;
		}
		public function setinner_bg_color($var) {
			return $this->inner_bg_color = $var;
		}
		public function setinner_text_color($var) {
			return $this->inner_text_color = $var;
		}
		public function setinner_text($var) {
			return $this->inner_text = $var;
		}
		public function setproject_order($var) {
			return $this->project_order = $var;
		}
		public function setstatus($var) {
			return $this->status = $var;
		}
	}
?>