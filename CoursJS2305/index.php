<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 23/05/2018
 * Time: 16:29
 */
$chaine = serialize($_POST);

$fichier = fopen("test.txt", "w");
fputs($fichier, $chaine);
fclose($fichier);