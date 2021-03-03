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

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css" rel="stylesheet">
        <link href="/css/chunk-76d3de77.9f2699da.css" rel="prefetch">
        <link href="/css/watch.918b136b.css" rel="prefetch">
        <link href="/js/auth.71b7d601.js" rel="prefetch">
        <link href="/js/chart.b420ca15.js" rel="prefetch">
        <link href="/js/chunk-76d3de77.655bc0d7.js" rel="prefetch">
        <link href="/js/search.9a3935b8.js" rel="prefetch">
        <link href="/js/subscriptions.f71b9782.js" rel="prefetch">
        <link href="/js/watch.dcba0b7c.js" rel="prefetch">
        <link href="/css/app.a22040d9.css" rel="preload" as="style">
        <link href="/js/app.4f980718.js" rel="preload" as="script">
        <link href="/js/chunk-vendors.3b39aae5.js" rel="preload" as="script">
        <link href="/css/app.a22040d9.css" rel="stylesheet">
    </head>
    <body>
        <noscript>
            <strong>We're sorry but dev doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jshashes/1.0.8/hashes.min.js"></script>
        <script src="/js/chunk-vendors.3b39aae5.js"></script>
        <script src="/js/app.4f980718.js"></script>
    </body>
</html>