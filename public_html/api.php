<?php
$public = $_SERVER['DOCUMENT_ROOT'];
$core = $public.'/engine/core.php';
include_once($core);

$method = $_GET['method'];
$apiFile = $public.'/api/'.$method.'.php';
$apiCode = $public.'/api/json.v1.php';
$apiErr = [
    'method404' => '{"error":"404","error_description":"method not found"}'
];
if ($method) {
    if (file_exists($apiFile)) {
        include_once($apiFile);
        include_once($apiCode);
    } else echo $apiErr['method404'];
} else echo $apiErr['method404'];
?>