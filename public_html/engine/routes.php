<?php
$url_page = $_GET['page'];
if (!$url_page) $url_page = 'main';

function appRoute($pageData) {
    global $_SESSION;
    global $data;
    global $locale;

    $pError403 = [
        'title' => $locale['pageError403'],
        'description'  => $locale['pageError403'],
        'keywords' => '',
        'ogtype' => 'website',
        'ogsite_name' => $data['site-name'],
        'ogimage' => '',
        'page' => 'global/error403',
        'access' => 'default',
        'error' => 403
    ];
    $pError404 = [
        'title' => $locale['pageError404'],
        'description'  => $locale['pageError404'],
        'keywords' => '',
        'ogtype' => 'website',
        'ogsite_name' => $data['site-name'],
        'ogimage' => '',
        'page' => 'global/error404',
        'access' => 'default',
        'error' => 404
    ];

    if ($pageData) {
        $access = $pageData['access'];
        if ($access == 'default' or $access == $_SESSION['access']) {
            $p = [
                'title' => $locale[$pageData['title']],
                'description' => $locale[$pageData['description']],
                'keywords' => $locale[$pageData['keywords']],
                'ogtype' => $pageData['ogtype'],
                'ogsite_name' => $data['site-name'],
                'ogimage' => $pageData['ogimage'],
                'page' => $pageData['page'],
                'access' => $pageData['access'],
                'error' => 200
            ];
            return $p;
        } else return $pError403;
    } else return $pError404;
}

$p = appRoute($data['routes'][$url_page]);
if ($modeModule == true) {
    if ($p['access'] == 'default') {
        $pFile = $pages.$p['page'].'.php';
        include_once($pFile);
    }
    if ($p['access'] == 'admin') {
        $pFile = $pagesAdmin.$p['page'].'.php';
        include_once($pFile);
    }
} else {
    if ($p['error']) {
        http_response_code($p['error']);
    }
}
?>