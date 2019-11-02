<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0 shrink-to-fit=no" />
        <title>{{ config('app.name') }}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="manifest" href="/manifest.json">
        {{-- Web App --}}
        <meta name="mobile-web-app-capable" content="yes">
        <!-- Fav -->
        <link rel="icon" href="favicon.png" type="image/png"/>
        <link rel="shortcut icon" href="favicon.ico"/>
        <!-- Styles -->
        <style>
                body {
                    margin: 0px;
                    background: var(--primary-color);
                }
                .noscroll {
                    overflow: hidden;
                }
                .blur {
                    filter: blur(10px);
                }

::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color-darker);
  }
        </style>
        <link  href="/css/app.css" rel="stylesheet" as="style">
        <link  href="/css/import.css" rel="stylesheet" as="style">
        <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css">
    </head>
    <body id="body">
        <div id="modal"></div>
        <div id="root"></div>
        <script rel="preload" src="{{asset('js/app.js')}}" as="script"></script>
        <noscript>
            <h1>javascript disabled</h1>
            <p>We need javascript to run this app</p>
        </noscript>
    </body>
</html>
