<?php
header("Content-Type: text/plain");
$var1 = isset($_GET['parametre1']) ? $_GET['parametre1'] : "";
$var2 = isset($_GET['parametre2']) ? $_GET['parametre2'] : "";
if ($var1 != "" && $var2 != "") {
    echo "YYYyyyeeeeeesssssssssssssss !!!";
}
else {
    echo "Boulet, hein !";
}