<?php
require_once(dirname(__FILE__) . '/inc/db.inc.php');
if (isset($_GET['name'])) {

    $className = $_GET['name'];
    $ucfClassName = ucfirst(strtolower($className));
    $str = "<?php\n\trequire_once(dirname(__FILE__).'/inc/db.inc.php');\n";
    $str .= "\trequire_once(dirname(__FILE__).'/ABase.class.php');\n\n";
    $str .= "\tclass A$ucfClassName extends ABase\n\t{\n";

    $query = "DESCRIBE $className";
    $statement = $db->prepare($query);
    $statement->execute();

    $getStr = "";
    $setStr = "";
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $str .= "\t\tprotected \${$row['Field']};\n";

        $getStr .= "\t\tpublic function get{$row['Field']}() {\n";
        $getStr .= "\t\t\treturn \$this->{$row['Field']};\n";
        $getStr .= "\t\t}\n";

        if ($row['Key'] != "PRI") {
            $setStr .= "\t\tpublic function set{$row['Field']}(\$var) {\n";
            $setStr .= "\t\t\treturn \$this->{$row['Field']} = \$var;\n";
            $setStr .= "\t\t}\n";
        }
    }
    $str .= "\n\t\tfunction gettable_name() {
        \treturn \"$className\";\n\t\t}\n";
    $str .= "\n$getStr$setStr";
    $str .= "\t}\n";
    $str .= "?>";
    $fileName = "A{$ucfClassName}.class.php";
    file_put_contents($fileName, $str);
}
?>

