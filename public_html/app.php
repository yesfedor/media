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
        <meta name="yandex-verification" content="4516b047d1a2799c" />
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

        <link rel="stylesheet" href="/vendor/css/bootstrap.min.css?version=1">
        <link rel="stylesheet" href="/vendor/css/mdb.min.css?version=1">
        <link rel="stylesheet" href="/css/dark.css?version=1">
        <link rel="stylesheet" href="/css/themes.css?version=1">
        <link rel="stylesheet" href="/css/common.css?version=1">
        <link rel="stylesheet" href="/css/media.css?version=1">
        <link href="/js/auth.95653d5b.js" rel="prefetch">
        <link href="/js/intro.16d03150.js" rel="prefetch">
        <link href="/js/playlist.e6763614.js" rel="prefetch">
        <link href="/js/search.79bfc2ee.js" rel="prefetch">
        <link href="/js/subscriptions.8f569c73.js" rel="prefetch">
        <link href="/js/tops.87f20b68.js" rel="prefetch">
        <link href="/js/watch.b1ea11d9.js" rel="prefetch">
        <link href="/css/app.618b0ad1.css" rel="preload" as="style">
        <link href="/js/app.050177c8.js" rel="preload" as="script">
        <link href="/js/chunk-vendors.30402a6b.js" rel="preload" as="script">
        <link href="/css/app.618b0ad1.css" rel="stylesheet">

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(68637091, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/68637091" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </head>
    <body>
        <div id="app"></div>
        <script src="/vendor/js/jquery.js?version=1"></script>
        <script src="/vendor/js/popper.min.js?version=1"></script>
        <script src="/vendor/js/icon.js?version=1"></script>
        <script src="/vendor/js/bootstrap.min.js?version=1"></script>
        <script src="/vendor/js/mdb.min.js?version=1"></script>
        <script src="/js/chunk-vendors.30402a6b.js"></script>
        <script src="/js/app.050177c8.js"></script>
    </body>
</html>