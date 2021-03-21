<?php
$public = $_SERVER['DOCUMENT_ROOT'];
$core = $public.'/engine/core.php';
include_once($core);
?>
<!DOCTYPE html>
<html lang="<?= $_SESSION['lang'] ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <!--[if IE]><link rel="icon" href="/favicon.ico"><![endif]-->
        <!-- Standart tag -->
        <title><?= $p['title'] ?></title>
        <meta name="description" content="<?= $p['description'] ?>">
        <meta name="keywords" content="<?= $p['keywords'] ?>">
        <!-- Standart tag -->
        <!-- OpenGraph -->
        <meta property="og:title" content="<?= $p['title'] ?>">
        <meta property="og:type" content="<?= $p['ogtype'] ?>">
        <meta property="og:description" content="<?= $p['description'] ?>">
        <meta property="og:site_name" content="<?= $data['site-name'] ?>">
        <meta property="og:url" content="<?= appGetUrl() ?>">
        <meta property="og:image" content="<?= $p['ogimage'] ?>">
        <link rel="image_src" href="<?= $p['ogimage'] ?>" />
        <meta name="twitter:image" content="<?= $p['ogimage'] ?>">
        <!-- OpenGraph -->

        <link rel="apple-touch-icon" sizes="180x180" href="https://iny.su/web/file/favicon/main/apple-touch-icon.png?option=with_brain_v2">
        <link rel="icon" type="image/png" sizes="32x32" href="https://iny.su/web/file/favicon/main/favicon-32x32.png?option=with_brain_v2">
        <link rel="icon" type="image/png" sizes="192x192" href="https://iny.su/web/file/favicon/main/android-chrome-192x192.png?option=with_brain_v2">
        <link rel="manifest" href="https://iny.su/web/file/favicon/main/site.webmanifest?option=with_brain_v2">
        <link rel="mask-icon" href="https://iny.su/web/file/favicon/main/safari-pinned-tab.svg?option=with_brain_v2" color="#4b515d">
        <link rel="shortcut icon" href="https://iny.su/web/file/favicon/main/favicon.ico?option=with_brain_v2">
        <meta name="apple-mobile-web-app-title" content="INY">
        <meta name="application-name" content="INY">
        <meta name="msapplication-TileColor" content="#ff0000">
        <meta name="msapplication-TileImage" content="https://iny.su/web/file/favicon/main/mstile-144x144.png?option=with_brain_v2">
        <meta name="msapplication-config" content="https://iny.su/web/file/favicon/main/browserconfig.xml?option=with_brain_v2">
        <meta id="header-app-theme-color" name="theme-color" content="#ffffff">

        <link rel="stylesheet" href="/vendor/css/bootstrap.min.css">
        <link rel="stylesheet" href="/vendor/css/mdb.min.css">
        <link rel="stylesheet" href="/css/dark.css">
        <link rel="stylesheet" href="/css/themes.css">
        <link rel="stylesheet" href="/css/common.css">
        <link rel="stylesheet" href="/css/media.css">
        <link href="/js/auth.e605d1c0.js" rel="prefetch">
        <link href="/js/intro.ddf0e348.js" rel="prefetch">
        <link href="/js/playlist.09976427.js" rel="prefetch">
        <link href="/js/search.6ea3d4bd.js" rel="prefetch">
        <link href="/js/subscriptions.9185552e.js" rel="prefetch">
        <link href="/js/tops.e4e6e737.js" rel="prefetch">
        <link href="/js/watch.af12c113.js" rel="prefetch">
        <link href="/css/app.c53cd8cc.css" rel="preload" as="style">
        <link href="/js/app.5aea8d37.js" rel="preload" as="script">
        <link href="/js/chunk-vendors.a9486f64.js" rel="preload" as="script">
        <link href="/css/app.c53cd8cc.css" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>
        <script src="/vendor/js/jquery.js"></script>
        <script src="/vendor/js/popper.min.js"></script>
        <script src="/vendor/js/icon.js"></script>
        <script src="/vendor/js/bootstrap.min.js"></script>
        <script src="/vendor/js/mdb.min.js"></script>
        <script src="/js/chunk-vendors.a9486f64.js"></script>
        <script src="/js/app.5aea8d37.js"></script>
    </body>
</html>