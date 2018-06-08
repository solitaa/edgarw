<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class AInfo extends ABase
	{
		protected $id;
		protected $text;
		protected $date;

		function gettable_name() {
        	return "info";
		}

		public function getid() {
			return $this->id;
		}
		public function gettext() {
			return $this->text;
		}
		public function getdate() {
			return $this->date;
		}
		public function settext($var) {
			return $this->text = $var;
		}
		public function setdate($var) {
			return $this->date = $var;
		}
	}
?>