<?php
	require_once(dirname(__FILE__).'/inc/db.inc.php');
	require_once(dirname(__FILE__).'/ABase.class.php');

	class AUser extends ABase
	{
		protected $id;
		protected $username;
		protected $password;
		protected $secret_word;

		function gettable_name() {
        	return "user";
		}

		public function getid() {
			return $this->id;
		}
		public function getusername() {
			return $this->username;
		}
		public function getpassword() {
			return $this->password;
		}
		public function getsecret_word() {
			return $this->secret_word;
		}
		public function setusername($var) {
			return $this->username = $var;
		}
		public function setpassword($var) {
			return $this->password = $var;
		}
		public function setsecret_word($var) {
			return $this->secret_word = $var;
		}
	}
?>