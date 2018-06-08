<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class ASlider extends ABase
	{
		protected $id;
		protected $inner_page_id;

		function gettable_name() {
        	return "slider";
		}

		public function getid() {
			return $this->id;
		}
		public function getinner_page_id() {
			return $this->inner_page_id;
		}
		public function setinner_page_id($var) {
			return $this->inner_page_id = $var;
		}
	}
?>