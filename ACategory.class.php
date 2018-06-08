<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class ACategory extends ABase
	{
		protected $id;
		protected $name;

		function gettable_name() {
        	return "category";
		}

		public function getid() {
			return $this->id;
		}
		public function getname() {
			return $this->name;
		}
		public function setname($var) {
			return $this->name = $var;
		}
	}
?>