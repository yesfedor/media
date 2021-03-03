<?php
$themes = [
    'light' => [
        'version' => 2,
        'color' => '#bcaaa4'
    ],
    'dark' => [
        'version' => 2,
        'color' => '#212121'
    ]
];

$themeName = $_POST['themeName'];

if ($themes[$themeName]) {
    $_SESSION['theme'] = $themeName;
    $bigData['themeName'] = $themeName;
    $bigData['themeVersion'] = $themes[$themeName]['version'];
    $bigData['themeColor'] = $themes[$themeName]['color'];
} else {
    $_SESSION['theme'] = 'light';
    $bigData['themeName'] = 'light';
}
?>