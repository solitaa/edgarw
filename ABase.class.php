<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');

class ABase
{
    function gettable_name()
    {
        return "";
    }

    public function save()
    {
        $tableName = $this->gettable_name();
        global $db;
        $id = "id";

        if (is_numeric(($this->$id))) {
            $properties = get_object_vars($this);
            $params = array_values($properties);
            $params[] = $this->$id;
            $query = "UPDATE " . $tableName . " SET ";
            $query .= implode(" = ?, ", array_keys($properties));
            $query .= " = ? WHERE  $id = ? ";
            //var_dump($query);
            $statement = $db->prepare($query);
            $statement->execute($params);
            //$arr = $statement->errorInfo();
            //var_dump($arr);

        } else {
            $properties = get_object_vars($this);
            $query = "INSERT INTO " . $tableName . " ";
            $query .= "(" . implode(", ", array_keys($properties)) . ") ";
            $query .= "VALUES (".implode(',', array_fill(0, count($properties), '?')).")";
            $statement = $db->prepare($query);
            //var_dump($query);
            $statement->execute(array_values($properties));
            $id = $db->lastInsertId();
            //$arr = $statement->errorInfo();
            //var_dump($arr);
            return $id;


        }
    }

    public static function find($array)
    {
        global $db;
        $className = get_called_class();

        $obj = new $className();
        $tableName = $obj->gettable_name();

        $query = "SELECT * FROM  " . $tableName . " WHERE 1 ";
        if($array)
            $query .="AND ".implode(" = ? AND ", array_keys($array))." = ? ";
        $query .= "LIMIT 1 ";

        $statement = $db->prepare($query);
        $statement->execute(array_values($array));
        $result = $statement->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            $newObj = new $className();
            foreach ($result as $param => $value) {
                $newObj->$param = $result[$param];
            }
        } else {
            $newObj = NULL;
        }
        return $newObj;
    }


    public static function findAll($array, $field)
    {
        global $db;
 
        $className = get_called_class();

        $obj = new $className();
        $tableName = $obj->gettable_name();

        $query = "SELECT * FROM  " . $tableName . " WHERE 1 ";
        if($array)
            $query .="AND ".implode(" = ? AND ", array_keys($array))." = ? ";
        if($field)
            $query .="ORDER BY $field ";

        $statement = $db->prepare($query);
        $statement->execute(array_values($array));

        $resultArray = $statement->fetchAll(PDO::FETCH_ASSOC);
        $result = array();

        foreach ($resultArray as $res) {
            $newObj = new $className();
            foreach ($res as $param => $value) {
                $newObj->$param = $res[$param];
            }
            $result[] = $newObj;
        }
        return $result;
    }


    public function del($array)
    {
        global $db;
        $tableName = $this->gettable_name();
        $params = array();
        $query = "DELETE FROM " . $tableName . " WHERE 1 ";
        if($array)
            $query .="AND ".implode(" = ? AND ", array_keys($array))." = ? ";

        $statement = $db->prepare($query);
        $statement->execute(array_values($array));
    }
}

?>