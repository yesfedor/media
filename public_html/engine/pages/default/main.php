<?php
$ui = 'false';
$block = '#warp';
?>
<div class="container">
    <div class="row justify-content-center align-items-center" style="min-height:70vh;">
        <div class="col-12 text-center">
            <h1 data-lang="localeStr" class="theme-title my-0"></h1>
        </div>
        <div class="col-12 text-center">
            <h3 data-lang="themeСhange" class="theme-title"></h3>
            <button onclick="app.theme.change('dark');" data-lang="themeDark" class="btn btn-outline-primary btn-rounded mx-3 my-3"></button> <button onclick="app.theme.change('light');" data-lang="themeLight" class="btn btn-outline-primary btn-rounded mx-3 my-3"></button>
        </div>
        <div class="col-12 text-center">
            <h3 data-lang="langChange" class="theme-title"></h3>
            <button onclick="app.lang.change('ru');" data-lang="langRu" class="btn btn-outline-primary btn-rounded mx-3 my-3"></button> <button onclick="app.lang.change('en');" data-lang="langEn" class="btn btn-outline-primary btn-rounded mx-3 my-3"></button>
        </div>
    </div>
</div>