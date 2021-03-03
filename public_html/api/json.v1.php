<?php
if ( !$_REQUEST ) {
    die( 'data error' );
}

if ($bigData) {
    $data = $bigData;
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}
?>