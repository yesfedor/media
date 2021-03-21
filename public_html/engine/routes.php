<?php
$url_page = $_SERVER['REQUEST_URI'];
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
                'title' => ($locale[$pageData['title']] ? $locale[$pageData['title']] : $pageData['title']),
                'description' => ($locale[$pageData['description']] ? $locale[$pageData['description']] : $pageData['description']),
                'keywords' => ($locale[$pageData['keywords']] ? $locale[$pageData['keywords']] : $$pageData['keywords']),
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

function getFilmByKpid($kpid) {
    global $data;

    $ch = curl_init();
    $headers = array('accept: application/json', 'x-api-key: 91d00358-6586-40e6-9d4e-9d9070547812');

    curl_setopt($ch, CURLOPT_URL, 'https://kinopoiskapiunofficial.tech/api/v2.1/films/'.$kpid.'?append_to_response=REVIEW'); # URL to post to
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); # return into a variable
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); # custom headers, see above
    $data = curl_exec($ch); # run!
    curl_close($ch);
    $content = json_decode($data, true);

    $contentType = $content['data']['type'];
    if ($content['data']['type'] === 'FILM') $contentType = 'фильм';
    if ($content['data']['type'] === 'TV_SHOW') $contentType = 'сериал';

    return [
        'title' => 'Смотреть '.$contentType.' '.$content['data']['nameRu'].' ('.$content['data']['year'].') на INY Media',
        'description'  => $content['data']['description'],
        'keywords' => '',
        'ogtype' => 'website',
        'ogsite_name' => $data['site-name'],
        'ogimage' => $content['data']['posterUrl'],
        'page' => 'global/error403',
        'access' => 'default',
        'error' => 403
    ];
}
// watch data
preg_match('/(\/watch)([0-9-_]{1,})/', $url_page, $p_preg);

if ($p_preg[2]) {
    $p = getFilmByKpid($p_preg[2]);
    http_response_code(200);
} else {
    $p = appRoute($data['routes'][$url_page]);
}

// next
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