<?php
$bigData['ui'] = 'false';

$url_pathname = $_POST['pathname'];
$url_query = $_POST['query'];
$url_hash = $_POST['hash'];

$url_pathname = explode('/', $url_pathname);
$_GET['page'] = $url_pathname[1];
$_GET['parameterOne'] = $url_pathname[2];
$_GET['parameterTwo'] = $url_pathname[3];
$_GET['parameterThree'] = $url_pathname[4];
$_GET['parameterFour'] = $url_pathname[5];
$_GET['parameterFive'] = $url_pathname[6];

ob_start();
    $modeModule = true;

    $url_page = $_GET['page'];
    if (!$url_page) $url_page = 'main';

    $p = appRoute($data['routes'][$url_page]);
    if ($p['access'] == 'default') {
        $pFile = $pages.$p['page'].'.php';
        include_once($pFile);
    }
    if ($p['access'] == 'admin') {
        $pFile = $pagesAdmin.$p['page'].'.php';
        include_once($pFile);
    }

    $getWarp = ob_get_contents();
ob_end_clean();

if ($block) $bigData['html'][$block] = $getWarp;
if ($ui) $bigData['ui'] = $ui;

$bigData['title'] = $p['title'];
?>