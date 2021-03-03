<?php
$newLang = $_POST['newLang'];
$_SESSION['lang'] = appLangChange($newLang);
$lang = appLangInit();
$bigData['lang'] = appLangGet();
$bigData['locale'] = appLocaleGet();
?>