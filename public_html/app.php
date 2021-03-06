<?php
$public = $_SERVER['DOCUMENT_ROOT'];
$core = $public.'/engine/core.php';
include_once($core);
?>
<!DOCTYPE html>
<html id="html" lang="<?= $_SESSION['lang'] ?>">
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
        <link rel="stylesheet" href="/css/dark.css?version=3">
        <link rel="stylesheet" href="/css/themes.css?version=4">
        <link rel="stylesheet" href="/css/common.css?version=3">
        <link rel="stylesheet" href="/css/media.css?version=8">
        <link href="/css/auth.41741b9d.css" rel="prefetch">
        <link href="/css/watch.player.0807c2ff.css" rel="prefetch">
        <link href="/js/auth.fb1b1349.js" rel="prefetch">
        <link href="/js/changelog.c6d37d27.js" rel="prefetch">
        <link href="/js/feed.6adb34c8.js" rel="prefetch">
        <link href="/js/history.72090d54.js" rel="prefetch">
        <link href="/js/playlist.ce8c3c35.js" rel="prefetch">
        <link href="/js/search.2cd161e6.js" rel="prefetch">
        <link href="/js/subscriptions.8e861464.js" rel="prefetch">
        <link href="/js/tops.8137d882.js" rel="prefetch">
        <link href="/js/watch.e9b418af.js" rel="prefetch">
        <link href="/js/watch.intro.a346ca41.js" rel="prefetch">
        <link href="/js/watch.player.553d9cde.js" rel="prefetch">
        <link href="/js/welcome.0d007261.js" rel="prefetch">
        <link href="/css/app.48a9f048.css" rel="preload" as="style">
        <link href="/js/app.036eed83.js" rel="preload" as="script">
        <link href="/js/chunk-vendors.ea046241.js" rel="preload" as="script">
        <link href="/css/app.48a9f048.css" rel="stylesheet">

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(68637091, "init", {
                clickmap:false,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:false
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/68637091" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </head>
    <body id="app" scheme="dark">
        <script src="/vendor/js/jquery.js?version=1"></script>
        <script src="/vendor/js/popper.min.js?version=1"></script>
        <script src="/vendor/js/icon.js?version=1"></script>
        <script src="/vendor/js/bootstrap.min.js?version=1"></script>
        <script src="/vendor/js/mdb.min.js?version=1"></script>
        <script src="/js/chunk-vendors.ea046241.js"></script>
        <script src="/js/app.036eed83.js"></script>
    </body>
</html>