





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-pWLt6abkYhNeAHaDrPVG0yXCtIGRuCkwSUqQpsyN6smAIpIt+Iuq2IZKmoH9l3Cy/9ZnjvVrFZnvFFjGiqE3EA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-a3b8a10d4a9e37a78f033ef4a4f525f5.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-AbnC9XK2MV+qxjSa6xek5GLLCpQKNcLgroQ3jXO+JKB3fNQY8tLoytlmhXmabZcI822jPnSpuSeQk6JBfEcTLw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-99237e70e56dcc3c5964d00c50c7382b.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-N5cRdPCXHO5wgAMNwip0pdEIY0qHrTsCnrGLSLxLiQ8TVr0Mi2xZjL6/CzD3LakUjPrFHc06OU5i0jEQ8hCwJA==" rel="stylesheet" href="https://github.githubassets.com/assets/site-bdd55e67f0ed3e8974c7c941589e8c6a.css" />
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>Quickbase-JavaScript-SDK/QuickBaseClient.js at master · QuickbaseAdmirer/Quickbase-JavaScript-SDK · GitHub</title>
    <meta name="description" content="Contribute to QuickbaseAdmirer/Quickbase-JavaScript-SDK development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars2.githubusercontent.com/u/3672329?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="QuickbaseAdmirer/Quickbase-JavaScript-SDK" /><meta property="og:url" content="https://github.com/QuickbaseAdmirer/Quickbase-JavaScript-SDK" /><meta property="og:description" content="Contribute to QuickbaseAdmirer/Quickbase-JavaScript-SDK development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D9AB:0C75:4A62C4:8EF0AC:5C4B2FB0" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="D9AB:0C75:4A62C4:8EF0AC:5C4B2FB0" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NmNkNjk5ZmRjNGUzNGM4ZWMwZjNkZGVmNGZjOWFkZDkyZmUyMjBlNjYwODk1ODQyYmZmMjFlZjJiMzhlNWFhM3x7InJlbW90ZV9hZGRyZXNzIjoiNzMuMTY3LjIxNy4yMzEiLCJyZXF1ZXN0X2lkIjoiRDlBQjowQzc1OjRBNjJDNDo4RUYwQUM6NUM0QjJGQjAiLCJ0aW1lc3RhbXAiOjE1NDg0MzEyOTQsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR">

  <meta name="html-safe-nonce" content="0262b5082d26a08bead19beef2144e1453315d10">

  <meta http-equiv="x-pjax-version" content="2b22d5627512e85bebbcfd51744067e1">
  

      <link href="https://github.com/QuickbaseAdmirer/Quickbase-JavaScript-SDK/commits/master.atom" rel="alternate" title="Recent Commits to Quickbase-JavaScript-SDK:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/QuickbaseAdmirer/Quickbase-JavaScript-SDK git https://github.com/QuickbaseAdmirer/Quickbase-JavaScript-SDK.git">

  <meta name="octolytics-dimension-user_id" content="3672329" /><meta name="octolytics-dimension-user_login" content="QuickbaseAdmirer" /><meta name="octolytics-dimension-repository_id" content="8363383" /><meta name="octolytics-dimension-repository_nwo" content="QuickbaseAdmirer/Quickbase-JavaScript-SDK" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="8363383" /><meta name="octolytics-dimension-repository_network_root_nwo" content="QuickbaseAdmirer/Quickbase-JavaScript-SDK" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/QuickbaseAdmirer/Quickbase-JavaScript-SDK/blob/master/QuickBaseClient.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production emoji-size-boost page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        
<header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out d-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-none">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0" aria-label="Global">
          <ul class="d-flex list-style-none">
              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0  p-4 left-n4 position-absolute">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/case-studies" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Case studies">Case Studies <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class=" mr-3 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, click, go to Enterprise">Enterprise</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0  p-4 left-n4 position-absolute">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                      <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class=" mr-3 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0  p-4 left-n4 position-absolute">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare features">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0  border-top pt-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-flex flex-items-center px-0 text-center text-left">
          <div class="d-lg-flex mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="8363383" data-scoped-search-url="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/search" data-unscoped-search-url="/search" action="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=lz+6+1H7689IcdDabl5T48V9TZ7StkkKk/7Y+ckqeQnnfrWLQTWADMmHHHHE3Dxz7vhGhuW5saOQirOtTeWj/g=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a class="HeaderMenu-link no-underline mr-3" href="/login?return_to=%2FQuickbaseAdmirer%2FQuickbase-JavaScript-SDK%2Fblob%2Fmaster%2FQuickBaseClient.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign&nbsp;in</a>
          <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign&nbsp;up</a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">

</div>



  <div role="main" class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      


  





  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FQuickbaseAdmirer%2FQuickbase-JavaScript-SDK"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/watchers"
     aria-label="10 users are watching this repository">
    10
  </a>

  </li>

  <li>
        <a href="/login?return_to=%2FQuickbaseAdmirer%2FQuickbase-JavaScript-SDK"
      class="btn btn-sm btn-with-count tooltipped tooltipped-s"
      aria-label="You must be signed in to star a repository" rel="nofollow">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
    </a>

    <a class="social-count js-social-count" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/stargazers"
      aria-label="11 users starred this repository">
      11
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FQuickbaseAdmirer%2FQuickbase-JavaScript-SDK"
        class="btn btn-sm btn-with-count tooltipped tooltipped-s"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/network/members" class="social-count"
       aria-label="19 users forked this repository">
      19
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=3672329" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/QuickbaseAdmirer">QuickbaseAdmirer</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK">Quickbase-JavaScript-SDK</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /QuickbaseAdmirer/Quickbase-JavaScript-SDK" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /QuickbaseAdmirer/Quickbase-JavaScript-SDK/issues" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /QuickbaseAdmirer/Quickbase-JavaScript-SDK/pulls" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /QuickbaseAdmirer/Quickbase-JavaScript-SDK/projects" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /QuickbaseAdmirer/Quickbase-JavaScript-SDK/wiki" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts security people /QuickbaseAdmirer/Quickbase-JavaScript-SDK/pulse" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/blob/f05e2475c0fc2d7ab2382ab23471596b6c582333/QuickBaseClient.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:9a61261e47d397e32e3e5af654d62762 -->

        <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="wiXPKTM4dFlEz8pAye8sagQI8SuK5Lw9/4pepwINh42wrpYXHBqgdDCG83q2QCwj6igmBoOVOYqxhK+cD6lXIA==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


    <div class="file-navigation">
      
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left js-load-contents"
  data-contents-url="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/ref-list/master/QuickBaseClient.js?source_action=show&amp;source_controller=blob">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>
    <div class="select-menu-modal">
      <div class="js-select-menu-deferred-content"></div>
      <div class="select-menu-loading-overlay anim-pulse">
        <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </div>
    </div>
  </div>
</div>

      <div class="BtnGroup float-right">
        <a href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK"><span>Quickbase-JavaScript-SDK</span></a></span></span><span class="separator">/</span><strong class="final-path">QuickBaseClient.js</strong>
      </div>
    </div>


    <include-fragment src="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/contributors/master/QuickBaseClient.js" class="commit-tease commit-loader">
      <div>
        Fetching contributors&hellip;
      </div>

      <div class="commit-tease-contributors">
          <img alt="" class="loader-loading float-left" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>



    <div class="file ">
      
<div class="file-header">

  <div class="file-actions">


    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/raw/master/QuickBaseClient.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/blame/master/QuickBaseClient.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/commits/master/QuickBaseClient.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1440 lines (1336 sloc)
      <span class="file-info-divider"></span>
    75.8 KB
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>QuickBase Client for JavaScript</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> updated 7/31/2013 by cjvr</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">QuickBaseClient</span>( <span class="pl-smi">qdbServer</span> )</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( qdbServer )</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">qdbServer</span> <span class="pl-k">=</span> qdbServer;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">qdbServer</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">username</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">password</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">usertoken</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">errortext</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">errormessage</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">apptoken</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\/</span>db<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\?</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\?</span><span class="pl-pds">/</span></span> );</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">dbid</span> <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">Authenticate</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">username</span>, <span class="pl-smi">password</span>, <span class="pl-smi">usertoken</span> )</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">username</span> <span class="pl-k">=</span> username;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">password</span> <span class="pl-k">=</span> password;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (usertoken <span class="pl-k">!=</span> <span class="pl-c1">undefined</span>)</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">usertoken</span> <span class="pl-k">=</span> usertoken;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetTicket</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ()</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">usertoken</span>)</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_Authenticate<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newTicket <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/ticket<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( newTicket )</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">text</span>( newTicket );</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">SetAppToken</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">apptoken</span> )</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">apptoken</span> <span class="pl-k">=</span> apptoken;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetSchema</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetSchema<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetDBInfo</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetDBInfo<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">CloneDatabase</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">newdbname</span>, <span class="pl-smi">newdbdesc</span> )</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>newdbname<span class="pl-pds">&quot;</span></span>, newdbname );</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>newdbdesc<span class="pl-pds">&quot;</span></span>, newdbdesc );</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_CloneDatabase<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newdbid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/newdbid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( newdbid )</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">newdbid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> newdbid;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">AddField</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">label</span>, <span class="pl-smi">type</span>, <span class="pl-smi">mode</span> )</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>label<span class="pl-pds">&quot;</span></span>, label );</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span>, type );</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( mode <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>mode<span class="pl-pds">&quot;</span></span>, mode );</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_AddField<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/fid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( fid )</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">fid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fid;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DeleteField</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">fid</span> )</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fid<span class="pl-pds">&quot;</span></span>, fid );</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_DeleteField<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">FieldAddChoices</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">fid</span>, <span class="pl-smi">choiceArray</span> )</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fid<span class="pl-pds">&quot;</span></span>, fid );</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> choiceCounter <span class="pl-k">=</span> <span class="pl-c1">0</span>; choiceCounter <span class="pl-k">&lt;</span> <span class="pl-smi">choiceArray</span>.<span class="pl-c1">length</span>; choiceCounter<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>choice<span class="pl-pds">&quot;</span></span>, choiceArray[choiceCounter] );</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_FieldAddChoices<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> numadded <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/numadded<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( numadded )</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">numadded</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> numadded;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">FieldRemoveChoices</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">fid</span>, <span class="pl-smi">choiceArray</span> )</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fid<span class="pl-pds">&quot;</span></span>, fid );</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> choiceCounter <span class="pl-k">=</span> <span class="pl-c1">0</span>; choiceCounter <span class="pl-k">&lt;</span> <span class="pl-smi">choiceArray</span>.<span class="pl-c1">length</span>; choiceCounter<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>choice<span class="pl-pds">&quot;</span></span>, choiceArray[choiceCounter] );</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_FieldRemoveChoices<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> numremoved <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/numremoved<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( numremoved )</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">numremoved</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> numremoved;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">SetFieldProperties</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">fid</span>, <span class="pl-smi">propertyName</span>, <span class="pl-smi">value</span> )</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fid<span class="pl-pds">&quot;</span></span>, fid );</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, propertyName, value );</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_SetFieldProperties<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GrantedDBs</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">withembeddedtables</span>, <span class="pl-smi">Excludeparents</span>, <span class="pl-smi">adminOnly</span> )</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( withembeddedtables <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> )</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>withembeddedtables<span class="pl-pds">&quot;</span></span>, withembeddedtables );</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( Excludeparents <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> )</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>Excludeparents<span class="pl-pds">&quot;</span></span>, Excludeparents );</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( adminOnly <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> )</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>adminOnly<span class="pl-pds">&quot;</span></span>, adminOnly );</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GrantedDBs<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">AddRecord</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">recordArray</span>, <span class="pl-smi">ignoreError</span> )</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> fieldCounter <span class="pl-k">=</span> <span class="pl-c1">0</span>; fieldCounter <span class="pl-k">&lt;</span> <span class="pl-smi">recordArray</span>.<span class="pl-c1">length</span>; fieldCounter <span class="pl-k">+=</span> <span class="pl-c1">2</span> )</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addFieldParameter</span>( xmlQDBRequest, recordArray[fieldCounter], recordArray[fieldCounter <span class="pl-k">+</span> <span class="pl-c1">1</span>] );</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( ignoreError )</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>ignoreError<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_AddRecord<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">EditRecord</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">rid</span>, <span class="pl-smi">recordArray</span> )</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>rid<span class="pl-pds">&quot;</span></span>, rid );</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> fieldCounter <span class="pl-k">=</span> <span class="pl-c1">0</span>; fieldCounter <span class="pl-k">&lt;</span> <span class="pl-smi">recordArray</span>.<span class="pl-c1">length</span>; fieldCounter <span class="pl-k">+=</span> <span class="pl-c1">2</span> )</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addFieldParameter</span>( xmlQDBRequest, recordArray[fieldCounter], recordArray[fieldCounter <span class="pl-k">+</span> <span class="pl-c1">1</span>] );</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_EditRecord<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DeleteRecord</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">rid</span> )</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>rid<span class="pl-pds">&quot;</span></span>, rid );</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_DeleteRecord<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>force this.query to use passed in query for the query parameter (not qname or qid) when calling API_DoQuery</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DoQueryWithQueryString</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">slist</span>, <span class="pl-smi">options</span> )</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">query</span>( dbid, query, clist, slist, options, <span class="pl-s"><span class="pl-pds">&quot;</span>structured<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DoQuery</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">slist</span>, <span class="pl-smi">options</span> )</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">query</span>( dbid, query, clist, slist, options, <span class="pl-s"><span class="pl-pds">&quot;</span>structured<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DoQueryADO</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">slist</span>, <span class="pl-smi">options</span> )</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">query</span>( dbid, query, clist, slist, options, <span class="pl-s"><span class="pl-pds">&quot;</span>xado<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">query</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">query</span>( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">slist</span>, <span class="pl-smi">options</span>, <span class="pl-smi">fmt</span>, <span class="pl-smi">useQueryParam</span> )</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fmt<span class="pl-pds">&quot;</span></span>, fmt );</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( useQueryParam )</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>query<span class="pl-pds">&quot;</span></span>, query );</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-smi">query</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\{</span><span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-cce">\}</span><span class="pl-k">$</span><span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>query<span class="pl-pds">&quot;</span></span>, query );</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">query</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>-<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">1-9</span>][<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>qid<span class="pl-pds">&quot;</span></span>, query );</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>qname<span class="pl-pds">&quot;</span></span>, query );</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>clist<span class="pl-pds">&quot;</span></span>, clist );</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>slist<span class="pl-pds">&quot;</span></span>, slist );</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>options<span class="pl-pds">&quot;</span></span>, options );</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_DoQuery<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">PurgeRecords</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span> )</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>query<span class="pl-pds">&quot;</span></span>, query );</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_PurgeRecords<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ImportFromCSV</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-c1">CSV</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">rids</span>, <span class="pl-smi">skipfirst</span> )</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>clist<span class="pl-pds">&quot;</span></span>, clist );</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>skipfirst<span class="pl-pds">&quot;</span></span>, skipfirst );</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addCDATAParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>records_csv<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">CSV</span> );</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_ImportFromCSV<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> RidNodeList <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectNodes</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/rids/rid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ridListLength <span class="pl-k">=</span> <span class="pl-smi">RidNodeList</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> ridListLength; i<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">rids</span>.<span class="pl-c1">push</span>( RidNodeList[i].<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span> );</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( <span class="pl-smi">xmlQDBResponse</span>.<span class="pl-c1">documentElement</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/num_recs_added<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> numrecords <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( result )</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">            numrecords <span class="pl-k">+=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">result</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span> );</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">        result <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( <span class="pl-smi">xmlQDBResponse</span>.<span class="pl-c1">documentElement</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/num_recs_updated<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( result )</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">            numrecords <span class="pl-k">+=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">result</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span> );</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> numrecords;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ListDBPages</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_ListDBpages<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetDBPage</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">page</span> )</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">page</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">1-9</span>][<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pageid<span class="pl-pds">&quot;</span></span>, page );</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pagename<span class="pl-pds">&quot;</span></span>, page );</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetDBPage<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">AddReplaceDBPage</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">page</span>, <span class="pl-smi">pagetype</span>, <span class="pl-smi">pagebody</span> )</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">page</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">1-9</span>][<span class="pl-c1">0-9</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pageid<span class="pl-pds">&quot;</span></span>, page );</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pagename<span class="pl-pds">&quot;</span></span>, page );</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pagetype<span class="pl-pds">&quot;</span></span>, pagetype );</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pagebody<span class="pl-pds">&quot;</span></span>, pagebody );</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_AddReplaceDBPage<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * AddUserToRole: Add a user to a role in an application.</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">userid</span> The unique identifier of a QuickBase user.</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">roleid</span> The unique identifier of a QuickBase role.</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> boolean</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">AddUserToRole</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">userid</span>, <span class="pl-smi">roleid</span> )</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>userid<span class="pl-pds">&quot;</span></span>, userid );</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>roleid<span class="pl-pds">&quot;</span></span>, roleid );</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_AddUserToRole<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * ChangeRecordOwner: Change the owner of a record from a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase database.</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">rid</span> String containing the record ID of the record to be deleted. </span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">newowner</span> String containing the screenname or email address of the new record owner. </span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ChangeRecordOwner</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">rid</span>, <span class="pl-smi">newowner</span> )</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>rid<span class="pl-pds">&quot;</span></span>, rid );</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>newowner<span class="pl-pds">&quot;</span></span>, newowner );</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_ChangeRecordOwner<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * ChangeUserRole: Change the role of a user in a particular application.</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">userid</span> The unique identifier of a QuickBase user.</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">roleid</span> The unique identifier of the user&#39;s current QuickBase role.</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">newroleid</span> The unique identifier of the new QuickBase role for the user.</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ChangeUserRole</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">userid</span>, <span class="pl-smi">roleid</span>, <span class="pl-smi">newroleid</span> )</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>userid<span class="pl-pds">&quot;</span></span>, userid );</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>roleid<span class="pl-pds">&quot;</span></span>, roleid );</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>newroleid<span class="pl-pds">&quot;</span></span>, newroleid );</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_ChangeUserRole<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * CreateDatabase: Create a new application.</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbname</span> The name of the application to create.</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbdesc</span> The description of the application to create.</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">CreateDatabase</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbname</span>, <span class="pl-smi">dbdesc</span> )</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>dbname<span class="pl-pds">&quot;</span></span>, dbname );</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>dbdesc<span class="pl-pds">&quot;</span></span>, dbdesc );</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_CreateDatabase<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newdbid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/newdbid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( newdbid )</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">newdbid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> newdbid;</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * CreateTable: Add a table to an existing application.</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">pnoun</span> The plural noun to use as the name of the table. Records will be referred to as the singular version of this noun.</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> String The unique identifier of the new table.</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">CreateTable</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">pnoun</span> )</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>pnoun<span class="pl-pds">&quot;</span></span>, pnoun );</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_CreateTable<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newdbid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/newdbid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( newdbid )</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">newdbid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            newdbid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/newDBID<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( newdbid )</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">newdbid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> newdbid;</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * DeleteDatabase: Delete an application. Use carefully!</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DeleteDatabase</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_DeleteDatabase<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * FindDBByName: Retrieve the database id associated with the database name.</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbname</span> the complete name of a QuickBase database.</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> the QuickBase database ID</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">FindDBByName</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbname</span> )</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>dbname<span class="pl-pds">&quot;</span></span>, dbname );</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_FindDBByName<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> dbid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/dbid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( dbid )</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">dbid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> dbid;</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetDBvar: Retrieve the value of an application variable.</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">varname</span> The name of the variable to retrieve.</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> String The value of the aplication variable.</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetDBvar</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">varname</span> )</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>varname<span class="pl-pds">&quot;</span></span>, varname );</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetDBvar<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/value<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( value )</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">value</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetNumRecords:</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> num_records The number of records in the QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetNumRecords</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetNumRecords<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> num_records <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/num_records<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( num_records )</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">num_records</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> num_records;</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GenAddRecordForm: Get the HTML for adding a record to a particular table.</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">fieldvalues</span> an Array of field:value strings in the format field:value.</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> String HTML for adding a record.</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GenAddRecordForm</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">fieldvalues</span> )</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> action <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>API_GenAddRecordForm<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> fieldIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; fieldIndex <span class="pl-k">&lt;</span> <span class="pl-smi">fieldvalues</span>.<span class="pl-c1">length</span>; fieldIndex<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            fieldValuePair <span class="pl-k">=</span> fieldvalues[fieldIndex].<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">            action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> fieldValuePair[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> fieldValuePair[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">GetURL</span>( dbid, action );</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GenResultsTable: HTML representation of zero or more QuickBase records.</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">query</span> A QuickBase query that selects zero or more records. </span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">clist</span> A period delimited list of field identifiers defining which fields to output. </span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">slist</span> A period delimited list of field identifiers defining which fields to sort on. </span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">options</span> A string indicating ascending vs descending sort order and data output format. </span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span>  HTML table of field names across the top and one row for each record.</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GenResultsTable</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">query</span>, <span class="pl-smi">clist</span>, <span class="pl-smi">slist</span>, <span class="pl-smi">jht</span>, <span class="pl-smi">jsa</span>, <span class="pl-smi">options</span> )</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> action <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>API_GenResultsTable<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;query=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> query;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;clist=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> clist;</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;slist=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> slist;</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;jht=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> jht;</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;jsa=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> jsa;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">        action <span class="pl-k">=</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;options=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> options;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">GetURL</span>( dbid, action );</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetOneTimeTicket: Retrieve a ticket valid for the next 5 minutes only. Designed for uploading files.</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> String The ticket.</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetOneTimeTicket</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ()</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetOneTimeTicket<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ticket <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/ticket<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( ticket )</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">ticket</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> ticket;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetRecordAsHTML: Retrieve the HTML of a single database record.</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase database.</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">rid</span> The unique identifier of a QuickBase record. </span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Two column HTML table of field names and field values.</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetRecordAsHTML</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">rid</span> )</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">GetURL</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetRecordAsHTML&amp;rid=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> rid );</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetRecordInfo: Returns a Xml Document of all the field values of a given record.</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase table.</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">rid</span> The unique identifier of a QuickBase record.</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Document The XML document of record information.</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetRecordInfo</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">rid</span> )</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>rid<span class="pl-pds">&quot;</span></span>, rid );</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetRecordInfo<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetRoleInfo: Returns an Xml Document of role information for an application.</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Document The XML Document of role information.</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetRoleInfo</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetRoleInfo<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetUserInfo: Returns an Xml Document of information about a user.</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">email</span> The email address of the user.</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Document The XML Document of user information.</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetUserInfo</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">email</span> )</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>email<span class="pl-pds">&quot;</span></span>, email );</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetUserInfo<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * GetUserRole: Returns an Xml Document of role information for a given user and application.</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">userid</span> The unique identifier of a QuickBase user.</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Document The XML Document of User Role information for the specified user.</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetUserRole</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">userid</span> )</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>userid<span class="pl-pds">&quot;</span></span>, userid );</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_GetUserRole<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * ProvisionUser: Add information about a potential new user to an application.</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">roleid</span> The unique identifier of a QuickBase role.</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">email</span> The new user&#39;s email address.</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">fname</span> The new user&#39;s first name.</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">lname</span> The new user&#39;s last name.</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> String The userid of the new user.</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ProvisionUser</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">roleid</span>, <span class="pl-smi">email</span>, <span class="pl-smi">fname</span>, <span class="pl-smi">lname</span> )</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>roleid<span class="pl-pds">&quot;</span></span>, roleid );</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>email<span class="pl-pds">&quot;</span></span>, email );</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>fname<span class="pl-pds">&quot;</span></span>, fname );</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>lname<span class="pl-pds">&quot;</span></span>, lname );</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_ProvisionUser<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> userid <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>( xmlQDBResponse, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/userid<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( userid )</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">userid</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> userid;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * RemoveUserFromRole: Remove a user from a role in an application.</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">userid</span> The unique identifier of a QuickBase user.</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">roleid</span> The unique identifier of a QuickBase role.</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">RemoveUserFromRole</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">userid</span>, <span class="pl-smi">roleid</span> )</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>userid<span class="pl-pds">&quot;</span></span>, userid );</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>roleid<span class="pl-pds">&quot;</span></span>, roleid );</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_RemoveUserFromRole<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * RenameApp: Change the name of an application.</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">newappname</span> The new name for the application.</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">RenameApp</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">newappname</span> )</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>newappname<span class="pl-pds">&quot;</span></span>, newappname );</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_RenameApp<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * SetDBvar: Set the value of an application variable.</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">varname</span> The name of the variable to set.</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">value</span> The value to set.</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">SetDBvar</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">varname</span>, <span class="pl-smi">value</span> )</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>varname<span class="pl-pds">&quot;</span></span>, varname );</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span>, value );</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_SetDBvar<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * SendInvitation: Send an email from QuickBase inviting a user to an application. </span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">userid</span> The unique identifier of a QuickBase user.</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">SendInvitation</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">userid</span> )</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>userid<span class="pl-pds">&quot;</span></span>, userid );</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_SendInvitation<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * SignOut: Sign out of QuickBase explicitly. </span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * Means username and password will be used for the next API call.</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">SignOut</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ()</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>API_SignOut<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * UserRoles: Returns an Xml Document of information about the roles defined for an application.</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">dbid</span> The unique identifier of a QuickBase application.</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> Document The XML Document of all User Role information.</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">UserRoles</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span> )</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlQDBRequest <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span>();</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">        xmlQDBResponse <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span>( dbid, <span class="pl-s"><span class="pl-pds">&quot;</span>API_UserRoles<span class="pl-pds">&quot;</span></span>, xmlQDBRequest );</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBResponse;</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> xmlQDBRequest;</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">     <span class="pl-k">function</span> <span class="pl-en">createXMLDOM</span>()</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Microsoft.XmlDom<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">catch</span>(e)</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">implementation</span>.<span class="pl-c1">createDocument</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">catch</span>(ex) { }</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sorry. Your browser does not support QuickBaseClient.js.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ex</span>.<span class="pl-smi">message</span>);</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">initXMLRequest</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ()</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">        xmlQDBRequest <span class="pl-k">=</span> <span class="pl-en">createXMLDOM</span>();</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-smi">async</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-smi">resolveExternals</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> root <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createElement</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>qdbapi<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">removeChild</span>( <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">documentElement</span> );</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">catch</span> ( e )</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">appendChild</span>( root );</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">usertoken</span>)</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>usertoken<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">usertoken</span> );</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> )</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( <span class="pl-c1">this</span>.<span class="pl-smi">username</span> )</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>username<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">username</span> );</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>password<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">password</span> );</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>ticket<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> );</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-c1">this</span>.<span class="pl-smi">apptoken</span> )</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span>( xmlQDBRequest, <span class="pl-s"><span class="pl-pds">&quot;</span>apptoken<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">apptoken</span> );</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> xmlQDBRequest;</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addParameter</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">xmlQDBRequest</span>, <span class="pl-smi">Name</span>, <span class="pl-smi">Value</span> )</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Root <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">documentElement</span>;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ElementNode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createElement</span>( Name );</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> TextNode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createTextNode</span>( Value );</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ElementNode</span>.<span class="pl-c1">appendChild</span>( TextNode );</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Root</span>.<span class="pl-c1">appendChild</span>( ElementNode );</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addFieldParameter</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">xmlQDBRequest</span>, <span class="pl-smi">fieldName</span>, <span class="pl-smi">Value</span> )</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Root <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">documentElement</span>;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ElementNode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createElement</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>field<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> attrField;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">fieldName</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">1-9</span>]</span><span class="pl-c1">\d</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">ElementNode</span>.<span class="pl-c1">setAttribute</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>fid<span class="pl-pds">&quot;</span></span>, fieldName )</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">            fieldName <span class="pl-k">=</span> <span class="pl-smi">fieldName</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">a-z0-9</span>]</span><span class="pl-pds">/</span>ig</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> ).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">ElementNode</span>.<span class="pl-c1">setAttribute</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span>, fieldName )</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> TextNode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createTextNode</span>( Value );</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ElementNode</span>.<span class="pl-c1">appendChild</span>( TextNode );</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Root</span>.<span class="pl-c1">appendChild</span>( ElementNode );</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">addCDATAParameter</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">xmlQDBRequest</span>, <span class="pl-smi">Name</span>, <span class="pl-smi">Value</span> )</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> Root <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">documentElement</span>;</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ElementNode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createElement</span>( Name );</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> CDATANode <span class="pl-k">=</span> <span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">createCDATASection</span>( Value );</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ElementNode</span>.<span class="pl-c1">appendChild</span>( CDATANode );</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Root</span>.<span class="pl-c1">appendChild</span>( ElementNode );</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> xmlHTTPPost;</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">XMLhttpInit</span>();</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line"> <span class="pl-k">function</span> <span class="pl-en">XMLhttpInit</span>()</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>(xmlHTTPPost)</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">			xmlHTTPPost <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Msxml2.XMLHTTP<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> { <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-smi">responseType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>msxml-document<span class="pl-pds">&quot;</span></span>; } <span class="pl-k">catch</span>(err) { }</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">catch</span>(e)</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">			xmlHTTPPost <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> { <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-smi">responseType</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>msxml-document<span class="pl-pds">&quot;</span></span>; } <span class="pl-k">catch</span>(err) { }</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">catch</span>(e)</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">			xmlHTTPPost <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">catch</span>(e)</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Sorry. This browser does not support QuickBaseClient. <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">e</span>.<span class="pl-smi">message</span>);</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">     <span class="pl-c1">this</span>.<span class="pl-en">APIXMLPost</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">dbid</span>, <span class="pl-smi">action</span>, <span class="pl-smi">xmlQDBRequest</span>)</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> script;</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">            script <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">qdbServer</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/db/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> dbid <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?act=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> action;</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>, script, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">setRequestHeader</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Content-Type<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>text/xml<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">send</span>(xmlQDBRequest);</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">catch</span>(e)</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">serializer</span>)</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">serializer</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLSerializer</span>();</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">send</span>(<span class="pl-c1">this</span>.<span class="pl-smi">serializer</span>.<span class="pl-en">serializeToString</span>(<span class="pl-smi">xmlQDBRequest</span>.<span class="pl-c1">documentElement</span>));</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> xmlAPI <span class="pl-k">=</span> <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">responseXML</span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>(xmlAPI, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/errcode<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span>)</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">text</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span>);</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">errortext</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>(xmlAPI, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/errtext<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errortext</span>)</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errortext</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">text</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errortext</span>);</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errortext</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>(xmlAPI, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/errdetail<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span>)</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">text</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span>);</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span>(xmlAPI, <span class="pl-s"><span class="pl-pds">&quot;</span>/*/ticket<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">ticket</span>)</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">text</span>(<span class="pl-c1">this</span>.<span class="pl-smi">ticket</span>);</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">ticket</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">errormessage</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n\r\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">errordetail</span>;</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> xmlAPI;</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">nsResolver</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">     <span class="pl-c1">this</span>.<span class="pl-en">selectSingleNode</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">aNode</span>, <span class="pl-smi">aExpr</span>)</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>((<span class="pl-k">typeof</span> <span class="pl-smi">aNode</span>.<span class="pl-smi">selectSingleNode</span>) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">aNode</span>.<span class="pl-en">selectSingleNode</span>(aExpr);</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(XPathEvaluator)</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">xpe</span> <span class="pl-k">==</span> <span class="pl-c1">null</span>)</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XPathEvaluator</span>();</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">nsResolver</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span>.<span class="pl-c1">createNSResolver</span>(<span class="pl-smi">aNode</span>.<span class="pl-c1">ownerDocument</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-smi">aNode</span>.<span class="pl-c1">documentElement</span> <span class="pl-k">:</span> <span class="pl-smi">aNode</span>.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">documentElement</span>);</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span>.<span class="pl-c1">evaluate</span>(aExpr, aNode, <span class="pl-c1">this</span>.<span class="pl-smi">nsResolver</span>, <span class="pl-c1">0</span>, <span class="pl-c1">null</span>).<span class="pl-en">iterateNext</span>();</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">wgxpath</span>)</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">this</span>.<span class="pl-smi">wgxpath</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">wgxpath</span>.<span class="pl-en">install</span>(<span class="pl-c1">window</span>);</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> expression <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-c1">createExpression</span>(aExpr);</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-smi">expression</span>.<span class="pl-c1">evaluate</span>(aNode, <span class="pl-smi">wgxpath</span>.<span class="pl-smi">XPathResultType</span>.<span class="pl-c1">FIRST_ORDERED_NODE_TYPE</span>);</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">selectNodes</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">aNode</span>, <span class="pl-smi">aExpr</span>)</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>((<span class="pl-k">typeof</span> <span class="pl-smi">aNode</span>.<span class="pl-smi">selectNodes</span>) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">aNode</span>.<span class="pl-en">selectNodes</span>(aExpr);</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span>(XPathEvaluator)</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>((<span class="pl-c1">this</span>.<span class="pl-smi">xpe</span> <span class="pl-k">==</span> <span class="pl-c1">null</span>) <span class="pl-k">&amp;&amp;</span> XPathEvaluator)</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XPathEvaluator</span>();</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">nsResolver</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span>.<span class="pl-c1">createNSResolver</span>(<span class="pl-smi">aNode</span>.<span class="pl-c1">ownerDocument</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-smi">aNode</span>.<span class="pl-c1">documentElement</span> <span class="pl-k">:</span> <span class="pl-smi">aNode</span>.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">documentElement</span>);</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">xpe</span>.<span class="pl-c1">evaluate</span>(aExpr, aNode, <span class="pl-c1">this</span>.<span class="pl-smi">nsResolver</span>, <span class="pl-c1">0</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">wgxpath</span>)</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">this</span>.<span class="pl-smi">wgxpath</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">wgxpath</span>.<span class="pl-en">install</span>(<span class="pl-c1">window</span>);</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> expression <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-c1">createExpression</span>(aExpr);</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-smi">expression</span>.<span class="pl-c1">evaluate</span>(aNode, <span class="pl-smi">wgxpath</span>.<span class="pl-smi">XPathResultType</span>.<span class="pl-c1">ORDERED_NODE_ITERATOR_TYPE</span>);</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> found <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> res;</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">while</span>(res <span class="pl-k">=</span> <span class="pl-smi">result</span>.<span class="pl-en">iterateNext</span>())</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">found</span>.<span class="pl-c1">push</span>(res);</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> found;</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">text</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">node</span> )</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">		{</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( ( <span class="pl-k">typeof</span> <span class="pl-smi">node</span>.<span class="pl-c1">text</span> ) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">node</span>.<span class="pl-c1">text</span>;</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">node</span>.<span class="pl-smi">textContent</span>;</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">GetURL</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">action</span> )</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> script;</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">        script <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">qdbServer</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/db/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> dbid <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?act=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> action <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;apptoken=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">apptoken</span>;</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">open</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, script, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">send</span>( <span class="pl-c1">null</span> );</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">responseText</span>;</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">displayErrorAlert</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">message</span> )</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-c1">this</span>.<span class="pl-smi">errorcode</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">alert</span>( message <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">errormessage</span> );</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">HTTPPost</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">dbid</span>, <span class="pl-smi">querystring</span>, <span class="pl-smi">content</span>, <span class="pl-smi">contentType</span> )</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> script;</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> xmlHTTPPost <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">        script <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">qdbServer</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/db/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> dbid <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> querystring;</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">open</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>, script, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">setRequestHeader</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>Content-Type<span class="pl-pds">&quot;</span></span>, contentType );</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">send</span>( content );</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">xmlHTTPPost</span>.<span class="pl-c1">responseText</span>;</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">    monthNames <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>( <span class="pl-c1">12</span> )</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>January<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>February<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">3</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>March<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">4</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>April<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">5</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>May<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">6</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>June<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">7</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>July<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">8</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>August<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">9</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>September<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">10</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>October<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">11</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>November<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">    monthNames[<span class="pl-c1">12</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>December<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">    dayNames <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>( <span class="pl-c1">7</span> )</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Sunday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Monday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">3</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Tuesday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">4</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Wednesday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">5</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Thursday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">6</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Friday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">    dayNames[<span class="pl-c1">7</span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Saturday<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">format</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">data</span>, <span class="pl-smi">format</span> )</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>date<span class="pl-pds">/</span>i</span> ) )</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intData <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( data );</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> objGMTDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( intData );</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> milliGMToffset <span class="pl-k">=</span> <span class="pl-smi">objGMTDate</span>.<span class="pl-c1">getTimezoneOffset</span>() <span class="pl-k">*</span> <span class="pl-c1">60000</span>;</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> oneDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( intData <span class="pl-k">+</span> milliGMToffset );</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> date <span class="pl-k">=</span> <span class="pl-smi">oneDate</span>.<span class="pl-c1">getDate</span>();</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> day <span class="pl-k">=</span> <span class="pl-smi">oneDate</span>.<span class="pl-c1">getDay</span>() <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> month <span class="pl-k">=</span> <span class="pl-smi">oneDate</span>.<span class="pl-c1">getMonth</span>() <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> theYear <span class="pl-k">=</span> <span class="pl-smi">oneDate</span>.<span class="pl-c1">getYear</span>();</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( theYear <span class="pl-k">&lt;</span> <span class="pl-c1">1900</span> )</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">                theYear <span class="pl-k">+=</span> <span class="pl-c1">1900</span>;</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span>friend<span class="pl-pds">/</span>i</span> ) )</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> monthNames[month] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> date <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> theYear;</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span>long<span class="pl-pds">/</span>i</span> ) )</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> dayNames[day] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> monthNames[month] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> date <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> theYear;</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span>timestamp<span class="pl-pds">/</span>i</span> ) )</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-smi">oneDate</span>.<span class="pl-c1">toLocaleString</span>();</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> month <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> date <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> theYear;</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">format</span>.<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>timeofday<span class="pl-pds">/</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">            data <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( data );</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intHours <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( data <span class="pl-k">/</span> <span class="pl-c1">3600000</span> );</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intMinutes <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>( data <span class="pl-k">/</span> <span class="pl-c1">60000</span> ) <span class="pl-k">%</span> <span class="pl-c1">60</span>;</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( intMinutes <span class="pl-k">&lt;</span> <span class="pl-c1">10</span> ) { intMinutes <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intMinutes; }</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intHours <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intMinutes;</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> objGMTDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> milliGMToffset <span class="pl-k">=</span> ( <span class="pl-smi">objGMTDate</span>.<span class="pl-c1">getTimezoneOffset</span>() <span class="pl-k">*</span> <span class="pl-c1">60000</span> ) <span class="pl-k">+</span> ( <span class="pl-c1">12</span> <span class="pl-k">*</span> <span class="pl-c1">3600000</span> );</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">DisplayDate</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-c1">XMLDOM</span> )</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> objDate <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> nodeDate <span class="pl-k">=</span> <span class="pl-c1">XMLDOM</span>.<span class="pl-en">selectSingleNode</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-k">!</span>nodeDate )</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> strDate <span class="pl-k">=</span> <span class="pl-smi">nodeDate</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeValue</span>;</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( strDate <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">            strDate <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( strDate ) <span class="pl-k">+</span> milliGMToffset;</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">objDate</span>.<span class="pl-c1">setTime</span>( strDate );</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intMonth <span class="pl-k">=</span> ( <span class="pl-smi">objDate</span>.<span class="pl-c1">getMonth</span>() ) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intYear <span class="pl-k">=</span> <span class="pl-smi">objDate</span>.<span class="pl-c1">getYear</span>();</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> intDay <span class="pl-k">=</span> <span class="pl-smi">objDate</span>.<span class="pl-c1">getDate</span>();</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( intYear <span class="pl-k">&lt;</span> <span class="pl-c1">100</span> )</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intMonth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intDay <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-19<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intYear;</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intMonth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intDay <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> intYear;</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">parseQueryString</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ()</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> queryString <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-c1">location</span>.<span class="pl-smi">search</span>;</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">        queryString <span class="pl-k">=</span> <span class="pl-smi">queryString</span>.<span class="pl-c1">substring</span>( <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> queryNameValuePairs <span class="pl-k">=</span> <span class="pl-smi">queryString</span>.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> NameValues <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">queryNameValuePairs</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> queryNameValuePair <span class="pl-k">=</span> queryNameValuePairs[i].<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">            NameValues[<span class="pl-c1">unescape</span>( queryNameValuePair[<span class="pl-c1">0</span>] )] <span class="pl-k">=</span> <span class="pl-c1">unescape</span>( queryNameValuePair[<span class="pl-c1">1</span>] );</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> NameValues;</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">ParseDelimited</span> <span class="pl-k">=</span> <span class="pl-k">function</span> ( <span class="pl-smi">data</span>, <span class="pl-smi">delim</span> )</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> output <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> offset <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> field <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> lineEmpty <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> maxsize <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> numfields <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> field <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Parse lines until the eof is hit</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> ( <span class="pl-en">GetNextLine</span>() )</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( <span class="pl-k">!</span>lineEmpty )</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">output</span>.<span class="pl-c1">push</span>( line );</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">                numfields <span class="pl-k">=</span> <span class="pl-smi">line</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( numfields <span class="pl-k">&gt;</span> maxsize )</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">                    maxsize <span class="pl-k">=</span> numfields;</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If there are any lines which are shorter than the longest</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> lines, fill them out with &quot;&quot; entries here. This simplifies</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> checking later.</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> ( <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">output</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span> )</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> ( output[i].<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> maxsize )</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">                output[i].<span class="pl-c1">push</span>( <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">GetNextLine</span>()</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">            line <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>();</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>skip any empty lines</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> ( ( offset <span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span> ) <span class="pl-k">&amp;&amp;</span> ( ( <span class="pl-smi">data</span>.<span class="pl-c1">substr</span>( offset, <span class="pl-c1">1</span> ) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span> ) <span class="pl-k">||</span> ( <span class="pl-smi">data</span>.<span class="pl-c1">substr</span>( offset, <span class="pl-c1">1</span> ) <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> ) ) )</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">                offset<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( offset <span class="pl-k">&gt;=</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span> )</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">            lineEmpty <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> moreToCome <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> ( moreToCome )</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">                moreToCome <span class="pl-k">=</span> <span class="pl-en">GetNextField</span>();</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">line</span>.<span class="pl-c1">push</span>( field );</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( field )</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">                    lineEmpty <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">GetNextField</span>()</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-c1">BEFORE_FIELD</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-c1">IN_QUOTED_FIELD</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-c1">IN_UNQUOTED_FIELD</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-c1">DOUBLE_QUOTE_TEST</span> <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> state <span class="pl-k">=</span> <span class="pl-c1">BEFORE_FIELD</span>;</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> p <span class="pl-k">=</span> offset;</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> endofdata <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">            field <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> ( <span class="pl-c1">true</span> )</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( p <span class="pl-k">&gt;=</span> endofdata )</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> File, line and field are done</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">                    offset <span class="pl-k">=</span> p;</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">                c <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-c1">substr</span>( p, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ( state <span class="pl-k">==</span> <span class="pl-c1">DOUBLE_QUOTE_TEST</span> )</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> These checks are ordered by likelihood */</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> ( c <span class="pl-k">==</span> delim )</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c"><span class="pl-c">//</span> Field is done; delimiter means more to come</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">                        offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c"><span class="pl-c">//</span> Line and field are done</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">                            offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c"><span class="pl-c">//</span> It is doubled, so append one quote</span></td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">                                field <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">                                p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">                                state <span class="pl-k">=</span> <span class="pl-c1">IN_QUOTED_FIELD</span>;</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c"><span class="pl-c">//</span> !!! Shouldn&#39;t have anything else after an end quote!</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c"><span class="pl-c">//</span> But do something reasonable to recover: go into unquoted mode</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">                                field <span class="pl-k">+=</span> c;</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">                                p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">                                state <span class="pl-k">=</span> <span class="pl-c1">IN_UNQUOTED_FIELD</span>;</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> ( state <span class="pl-k">==</span> <span class="pl-c1">BEFORE_FIELD</span> )</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c"><span class="pl-c">//</span> These checks are ordered by likelihood */</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> ( c <span class="pl-k">==</span> delim )</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c"><span class="pl-c">//</span> Field is blank; delimiter means more to come</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">                            offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c"><span class="pl-c">//</span> Found the beginning of a quoted field</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">                                p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">                                state <span class="pl-k">=</span> <span class="pl-c1">IN_QUOTED_FIELD</span>;</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-c"><span class="pl-c">//</span> Field is blank and line is done</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">                                    offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">                                    {</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-c"><span class="pl-c">//</span> Ignore leading spaces</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">                                        p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">                                    }</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">                                    {</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">                                        <span class="pl-c"><span class="pl-c">//</span> Found some other character, beginning an unquoted field</span></td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">                                        field <span class="pl-k">+=</span> c;</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">                                        p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">                                        state <span class="pl-k">=</span> <span class="pl-c1">IN_UNQUOTED_FIELD</span>;</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">                                    }</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">                    {</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">if</span> ( state <span class="pl-k">==</span> <span class="pl-c1">IN_UNQUOTED_FIELD</span> )</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c"><span class="pl-c">//</span> These checks are ordered by likelihood */</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> ( c <span class="pl-k">==</span> delim )</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">                                <span class="pl-c"><span class="pl-c">//</span> Field is done; delimiter means more to come</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">                                offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-c"><span class="pl-c">//</span> Line and field are done</span></td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">                                    offset <span class="pl-k">=</span> p <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-c"><span class="pl-c">//</span> Found some other character, add it to the field</span></td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">                                    field <span class="pl-k">+=</span> c;</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">                                    p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">                        {</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> ( state <span class="pl-k">==</span> <span class="pl-c1">IN_QUOTED_FIELD</span> )</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">                            {</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">if</span> ( c <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">                                    p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">                                    state <span class="pl-k">=</span> <span class="pl-c1">DOUBLE_QUOTE_TEST</span>;</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">                                {</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">                                    <span class="pl-c"><span class="pl-c">//</span> Found some other character, add it to the field</span></td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">                                    field <span class="pl-k">+=</span> c;</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">                                    p<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">                                }</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>()</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">h</span>(<span class="pl-smi">a</span>) { <span class="pl-k">throw</span> a; } <span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-k">void</span> <span class="pl-c1">0</span>, j <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>, k <span class="pl-k">=</span> <span class="pl-c1">null</span>, l <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>; <span class="pl-k">function</span> <span class="pl-en">m</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-c1">this</span>[a] } } <span class="pl-k">function</span> <span class="pl-en">aa</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> a } } <span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-c1">this</span>; <span class="pl-k">function</span> <span class="pl-en">p</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> a } <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">2147483648</span> <span class="pl-k">*</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>()).<span class="pl-c1">toString</span>(<span class="pl-c1">36</span>); <span class="pl-k">function</span> <span class="pl-en">q</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> t; <span class="pl-k">function</span> <span class="pl-en">c</span>() { } <span class="pl-smi">c</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">prototype</span>; <span class="pl-smi">a</span>.<span class="pl-smi">t</span> <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">prototype</span>; <span class="pl-smi">a</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">c</span> }; <span class="pl-k">var</span> u, ba, ca, da; <span class="pl-k">function</span> <span class="pl-en">ea</span>() { <span class="pl-k">return</span> <span class="pl-smi">n</span>.<span class="pl-smi">navigator</span> <span class="pl-k">?</span> <span class="pl-smi">n</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span> <span class="pl-k">:</span> k } da <span class="pl-k">=</span> ca <span class="pl-k">=</span> ba <span class="pl-k">=</span> u <span class="pl-k">=</span> l; <span class="pl-k">var</span> fa; <span class="pl-k">if</span>(fa <span class="pl-k">=</span> <span class="pl-en">ea</span>()) { <span class="pl-k">var</span> ga <span class="pl-k">=</span> <span class="pl-smi">n</span>.<span class="pl-smi">navigator</span>; u <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">==</span> <span class="pl-smi">fa</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Opera<span class="pl-pds">&quot;</span></span>); ba <span class="pl-k">=</span> <span class="pl-k">!</span>u <span class="pl-k">&amp;&amp;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-smi">fa</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>MSIE<span class="pl-pds">&quot;</span></span>); ca <span class="pl-k">=</span> <span class="pl-k">!</span>u <span class="pl-k">&amp;&amp;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-smi">fa</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>WebKit<span class="pl-pds">&quot;</span></span>); da <span class="pl-k">=</span> <span class="pl-k">!</span>u <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>ca <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Gecko<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-smi">ga</span>.<span class="pl-c1">product</span> } <span class="pl-k">var</span> w <span class="pl-k">=</span> ba, ha <span class="pl-k">=</span> da, ia <span class="pl-k">=</span> ca, ja;</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">    a<span class="pl-k">:</span> { <span class="pl-k">var</span> ka <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, y; <span class="pl-k">if</span>(u <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">n</span>.<span class="pl-smi">opera</span>) <span class="pl-k">var</span> la <span class="pl-k">=</span> <span class="pl-smi">n</span>.<span class="pl-smi">opera</span>.<span class="pl-c1">version</span>, ka <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> la <span class="pl-k">?</span> <span class="pl-en">la</span>() <span class="pl-k">:</span> la; <span class="pl-k">else</span> <span class="pl-k">if</span>(ha <span class="pl-k">?</span> y <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>rv<span class="pl-cce">\:</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\)</span>;]</span><span class="pl-k">+</span>)(<span class="pl-cce">\)</span><span class="pl-k">|</span>;)<span class="pl-pds">/</span></span> <span class="pl-k">:</span> w <span class="pl-k">?</span> y <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>MSIE<span class="pl-c1">\s</span><span class="pl-k">+</span>(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\)</span>;]</span><span class="pl-k">+</span>)(<span class="pl-cce">\)</span><span class="pl-k">|</span>;)<span class="pl-pds">/</span></span> <span class="pl-k">:</span> ia <span class="pl-k">&amp;&amp;</span> (y <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>WebKit<span class="pl-cce">\/</span>(<span class="pl-c1">\S</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>), y) <span class="pl-k">var</span> ma <span class="pl-k">=</span> <span class="pl-smi">y</span>.<span class="pl-c1">exec</span>(<span class="pl-en">ea</span>()), ka <span class="pl-k">=</span> ma <span class="pl-k">?</span> ma[<span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; <span class="pl-k">if</span>(w) { <span class="pl-k">var</span> na, oa <span class="pl-k">=</span> <span class="pl-smi">n</span>.<span class="pl-smi">document</span>; na <span class="pl-k">=</span> oa <span class="pl-k">?</span> <span class="pl-smi">oa</span>.<span class="pl-smi">documentMode</span> <span class="pl-k">:</span> i; <span class="pl-k">if</span>(na <span class="pl-k">&gt;</span> <span class="pl-c1">parseFloat</span>(ka)) { ja <span class="pl-k">=</span> <span class="pl-c1">String</span>(na); <span class="pl-k">break</span> a } } ja <span class="pl-k">=</span> ka } <span class="pl-k">var</span> pa <span class="pl-k">=</span> ja, qa <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">ra</span>(<span class="pl-smi">a</span>)</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>qa[a])</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span>(<span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-c1">0</span>, c <span class="pl-k">=</span> <span class="pl-c1">String</span>(pa).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\xa0</span>]</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\xa0</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>), d <span class="pl-k">=</span> <span class="pl-c1">String</span>(a).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\xa0</span>]</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\xa0</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>), e <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">c</span>.<span class="pl-c1">length</span>, <span class="pl-smi">d</span>.<span class="pl-c1">length</span>), f <span class="pl-k">=</span> <span class="pl-c1">0</span>; <span class="pl-c1">0</span> <span class="pl-k">==</span> b <span class="pl-k">&amp;&amp;</span> f <span class="pl-k">&lt;</span> e; f<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> g <span class="pl-k">=</span> c[f] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, r <span class="pl-k">=</span> d[f] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, v <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-cce">\\</span>d*)(<span class="pl-cce">\\</span>D*)<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>), <span class="pl-c1">J</span> <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-cce">\\</span>d*)(<span class="pl-cce">\\</span>D*)<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>); <span class="pl-k">do</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> s <span class="pl-k">=</span> <span class="pl-smi">v</span>.<span class="pl-c1">exec</span>(g) <span class="pl-k">||</span> [<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>], x <span class="pl-k">=</span> <span class="pl-c1">J</span>.<span class="pl-c1">exec</span>(r) <span class="pl-k">||</span> [<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>]; <span class="pl-k">if</span>(<span class="pl-c1">0</span> <span class="pl-k">==</span> s[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">0</span> <span class="pl-k">==</span> x[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>) <span class="pl-k">break</span>; b <span class="pl-k">=</span> ((<span class="pl-c1">0</span> <span class="pl-k">==</span> s[<span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseInt</span>(s[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>)) <span class="pl-k">&lt;</span> (<span class="pl-c1">0</span> <span class="pl-k">==</span> x[<span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseInt</span>(x[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>)) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> (<span class="pl-c1">0</span> <span class="pl-k">==</span> s[<span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseInt</span>(s[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>)) <span class="pl-k">&gt;</span></td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">                    (<span class="pl-c1">0</span> <span class="pl-k">==</span> x[<span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseInt</span>(x[<span class="pl-c1">1</span>], <span class="pl-c1">10</span>)) <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">||</span> ((<span class="pl-c1">0</span> <span class="pl-k">==</span> s[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>) <span class="pl-k">&lt;</span> (<span class="pl-c1">0</span> <span class="pl-k">==</span> x[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> (<span class="pl-c1">0</span> <span class="pl-k">==</span> s[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>) <span class="pl-k">&gt;</span> (<span class="pl-c1">0</span> <span class="pl-k">==</span> x[<span class="pl-c1">2</span>].<span class="pl-c1">length</span>) <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">||</span> (s[<span class="pl-c1">2</span>] <span class="pl-k">&lt;</span> x[<span class="pl-c1">2</span>] <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> s[<span class="pl-c1">2</span>] <span class="pl-k">&gt;</span> x[<span class="pl-c1">2</span>] <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">while</span>(<span class="pl-c1">0</span> <span class="pl-k">==</span> b)</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">            } qa[a] <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;=</span> b</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">var</span> sa <span class="pl-k">=</span> {}; <span class="pl-k">function</span> <span class="pl-en">z</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> sa[a] <span class="pl-k">||</span> (sa[a] <span class="pl-k">=</span> w <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!!</span><span class="pl-c1">document</span>.<span class="pl-smi">documentMode</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">document</span>.<span class="pl-smi">documentMode</span> <span class="pl-k">&gt;=</span> a) }; <span class="pl-k">function</span> <span class="pl-en">A</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> b <span class="pl-k">||</span> <span class="pl-c1">1</span>; <span class="pl-c1">this</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> c <span class="pl-k">||</span> <span class="pl-c1">1</span> }; <span class="pl-k">var</span> <span class="pl-c1">B</span> <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>, ta <span class="pl-k">=</span> <span class="pl-c1">B</span>.<span class="pl-smi">indexOf</span> <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-c1">B</span>.<span class="pl-smi">indexOf</span>.<span class="pl-c1">call</span>(a, b, c) } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { c <span class="pl-k">=</span> c <span class="pl-k">==</span> k <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">0</span> <span class="pl-k">&gt;</span> c <span class="pl-k">?</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">a</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> c) <span class="pl-k">:</span> c; <span class="pl-k">if</span>(<span class="pl-en">p</span>(a)) <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-en">p</span>(b) <span class="pl-k">||</span> <span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-smi">b</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-c1">indexOf</span>(b, c); <span class="pl-k">for</span>(; c <span class="pl-k">&lt;</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>; c<span class="pl-k">++</span>) <span class="pl-k">if</span>(c <span class="pl-k">in</span> a <span class="pl-k">&amp;&amp;</span> a[c] <span class="pl-k">===</span> b) <span class="pl-k">return</span> c; <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span> }, <span class="pl-c1">C</span> <span class="pl-k">=</span> <span class="pl-c1">B</span>.<span class="pl-smi">forEach</span> <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-c1">B</span>.<span class="pl-smi">forEach</span>.<span class="pl-c1">call</span>(a, b, c) } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>, e <span class="pl-k">=</span> <span class="pl-en">p</span>(a) <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> a, f <span class="pl-k">=</span> <span class="pl-c1">0</span>; f <span class="pl-k">&lt;</span> d; f<span class="pl-k">++</span>) f <span class="pl-k">in</span> e <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">b</span>.<span class="pl-c1">call</span>(c, e[f], f, a) }, ua <span class="pl-k">=</span> <span class="pl-c1">B</span>.<span class="pl-smi">filter</span> <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-c1">B</span>.<span class="pl-smi">filter</span>.<span class="pl-c1">call</span>(a, b, c) } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>)</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>, e <span class="pl-k">=</span> [], f <span class="pl-k">=</span> <span class="pl-c1">0</span>, g <span class="pl-k">=</span> <span class="pl-en">p</span>(a) <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">        a, r <span class="pl-k">=</span> <span class="pl-c1">0</span>; r <span class="pl-k">&lt;</span> d; r<span class="pl-k">++</span>) <span class="pl-k">if</span>(r <span class="pl-k">in</span> g) { <span class="pl-k">var</span> v <span class="pl-k">=</span> g[r]; <span class="pl-smi">b</span>.<span class="pl-c1">call</span>(c, v, r, a) <span class="pl-k">&amp;&amp;</span> (e[f<span class="pl-k">++</span>] <span class="pl-k">=</span> v) } <span class="pl-k">return</span> e</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">    }; <span class="pl-k">function</span> <span class="pl-en">va</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">reduce</span>) <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-en">reduce</span>(b, c); <span class="pl-k">var</span> d <span class="pl-k">=</span> c; <span class="pl-en">C</span>(a, <span class="pl-k">function</span>(<span class="pl-smi">c</span>, <span class="pl-smi">f</span>) { d <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">call</span>(i, d, c, f, a) }); <span class="pl-k">return</span> d } <span class="pl-k">var</span> wa <span class="pl-k">=</span> <span class="pl-c1">B</span>.<span class="pl-smi">some</span> <span class="pl-k">?</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-c1">B</span>.<span class="pl-smi">some</span>.<span class="pl-c1">call</span>(a, b, c) } <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>, e <span class="pl-k">=</span> <span class="pl-en">p</span>(a) <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> a, f <span class="pl-k">=</span> <span class="pl-c1">0</span>; f <span class="pl-k">&lt;</span> d; f<span class="pl-k">++</span>) <span class="pl-k">if</span>(f <span class="pl-k">in</span> e <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">b</span>.<span class="pl-c1">call</span>(c, e[f], f, a)) <span class="pl-k">return</span> j; <span class="pl-k">return</span> l }; <span class="pl-k">function</span> <span class="pl-en">xa</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-c1">B</span>.<span class="pl-smi">concat</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">B</span>, <span class="pl-c1">arguments</span>) } <span class="pl-k">function</span> <span class="pl-en">ya</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-c1">2</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">B</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(a, b) <span class="pl-k">:</span> <span class="pl-c1">B</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(a, b, c) }; <span class="pl-k">!</span>w <span class="pl-k">||</span> <span class="pl-en">z</span>(<span class="pl-c1">9</span>); <span class="pl-k">!</span>ha <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>w <span class="pl-k">||</span> w <span class="pl-k">&amp;&amp;</span> <span class="pl-en">z</span>(<span class="pl-c1">9</span>) <span class="pl-k">||</span> ha <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ra</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>1.9.1<span class="pl-pds">&quot;</span></span>); w <span class="pl-k">&amp;&amp;</span> <span class="pl-en">ra</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>9<span class="pl-pds">&quot;</span></span>); <span class="pl-k">function</span> <span class="pl-en">za</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">contains</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">1</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span>) <span class="pl-k">return</span> a <span class="pl-k">==</span> b <span class="pl-k">||</span> <span class="pl-smi">a</span>.<span class="pl-c1">contains</span>(b); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> <span class="pl-smi">a</span>.<span class="pl-smi">compareDocumentPosition</span>) <span class="pl-k">return</span> a <span class="pl-k">==</span> b <span class="pl-k">||</span> <span class="pl-c1">Boolean</span>(<span class="pl-smi">a</span>.<span class="pl-c1">compareDocumentPosition</span>(b) <span class="pl-k">&amp;</span> <span class="pl-c1">16</span>); <span class="pl-k">for</span>(; b <span class="pl-k">&amp;&amp;</span> a <span class="pl-k">!=</span> b;) b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>; <span class="pl-k">return</span> b <span class="pl-k">==</span> a }</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Aa</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>)</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(a <span class="pl-k">==</span> b) <span class="pl-k">return</span> <span class="pl-c1">0</span>; <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">compareDocumentPosition</span>) <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">compareDocumentPosition</span>(b) <span class="pl-k">&amp;</span> <span class="pl-c1">2</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; <span class="pl-k">if</span>(w <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">z</span>(<span class="pl-c1">9</span>)) { <span class="pl-k">if</span>(<span class="pl-c1">9</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span>) <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; <span class="pl-k">if</span>(<span class="pl-c1">9</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span>) <span class="pl-k">return</span> <span class="pl-c1">1</span> } <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>sourceIndex<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> a <span class="pl-k">||</span> <span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>sourceIndex<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> <span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span>, d <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span>; <span class="pl-k">if</span>(c <span class="pl-k">&amp;&amp;</span> d) <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">sourceIndex</span> <span class="pl-k">-</span> <span class="pl-smi">b</span>.<span class="pl-smi">sourceIndex</span>; <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">parentNode</span>, f <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>; <span class="pl-k">return</span> e <span class="pl-k">==</span> f <span class="pl-k">?</span> <span class="pl-en">Ba</span>(a, b) <span class="pl-k">:</span> <span class="pl-k">!</span>c <span class="pl-k">&amp;&amp;</span> <span class="pl-en">za</span>(e, b) <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> <span class="pl-en">Ca</span>(a, b) <span class="pl-k">:</span> <span class="pl-k">!</span>d <span class="pl-k">&amp;&amp;</span> <span class="pl-en">za</span>(f, a) <span class="pl-k">?</span> <span class="pl-en">Ca</span>(b, a) <span class="pl-k">:</span> (c <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-smi">sourceIndex</span> <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">sourceIndex</span>) <span class="pl-k">-</span> (d <span class="pl-k">?</span> <span class="pl-smi">b</span>.<span class="pl-smi">sourceIndex</span> <span class="pl-k">:</span> <span class="pl-smi">f</span>.<span class="pl-smi">sourceIndex</span>) } d <span class="pl-k">=</span> <span class="pl-c1">9</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">?</span> a <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-c1">ownerDocument</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">a</span>.<span class="pl-smi">document</span>; c <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">createRange</span>(); <span class="pl-smi">c</span>.<span class="pl-c1">selectNode</span>(a); <span class="pl-smi">c</span>.<span class="pl-c1">collapse</span>(j); d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">createRange</span>(); <span class="pl-smi">d</span>.<span class="pl-c1">selectNode</span>(b); <span class="pl-smi">d</span>.<span class="pl-c1">collapse</span>(j); <span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-c1">compareBoundaryPoints</span>(<span class="pl-smi">n</span>.<span class="pl-smi">Range</span>.<span class="pl-c1">START_TO_END</span>, d)</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">    } function Ca(a, b) { var c = a.parentNode; if(c == b) return -1; for(var d = b; d.parentNode != c;) d = d.parentNode; return Ba(d, a) } function Ba(a, b) { for(var c = b; c = c.previousSibling;) if(c == a) return -1; return 1 }; var D = w &amp;&amp; !z(9), Da = w &amp;&amp; !z(8); function E(a, b, c, d) { this.a = a; this.nodeName = c; this.nodeValue = d; this.nodeType = 2; this.parentNode = this.ownerElement = b } function Ea(a, b) { var c = Da &amp;&amp; &quot;href&quot; == b.nodeName ? a.getAttribute(b.nodeName, 2) : b.nodeValue; return new E(b, a, b.nodeName, c) }; function Fa(a) { this.b = a; this.a = 0 } var Ga = RegExp(&quot;\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\&quot;[^\&quot;]*\&quot;|&#39;[^&#39;]*&#39;|[!&lt;&gt;]=|\\s+|.&quot;, &quot;g&quot;), Ha = /^\s/; function F(a, b) { return a.b[a.a + (b || 0)] } function G(a) { return a.b[a.a++] }; function H(a) { var b = k, c = a.nodeType; 1 == c &amp;&amp; (b = a.textContent, b = b == i || b == k ? a.innerText : b, b = b == i || b == k ? &quot;&quot; : b); if(&quot;string&quot; != typeof b) if(D &amp;&amp; &quot;title&quot; == a.nodeName.toLowerCase() &amp;&amp; 1 == c) b = a.text; else if(9 == c || 1 == c) for(var a = 9 == c ? a.documentElement : a.firstChild, c = 0, d = [], b = &quot;&quot;; a;) { do 1 != a.nodeType &amp;&amp; (b += a.nodeValue), D &amp;&amp; &quot;title&quot; == a.nodeName.toLowerCase() &amp;&amp; (b += a.text), d[c++] = a; while(a = a.firstChild); for(; c &amp;&amp; !(a = d[--c].nextSibling) ;); } else b = a.nodeValue; return &quot;&quot; + b }</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">I</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">if</span>(b <span class="pl-k">===</span> k) <span class="pl-k">return</span> j; <span class="pl-k">try</span> { <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">a</span>.<span class="pl-smi">getAttribute</span>) <span class="pl-k">return</span> l } <span class="pl-k">catch</span>(d) { <span class="pl-k">return</span> l } Da <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> b <span class="pl-k">&amp;&amp;</span> (b <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>className<span class="pl-pds">&quot;</span></span>); <span class="pl-k">return</span> c <span class="pl-k">==</span> k <span class="pl-k">?</span> <span class="pl-k">!!</span><span class="pl-smi">a</span>.<span class="pl-c1">getAttribute</span>(b) <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-c1">getAttribute</span>(b, <span class="pl-c1">2</span>) <span class="pl-k">==</span> c } <span class="pl-k">function</span> <span class="pl-en">Ia</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">return</span> (<span class="pl-c1">D</span> <span class="pl-k">?</span> Ja <span class="pl-k">:</span> Ka).<span class="pl-c1">call</span>(k, a, b, <span class="pl-en">p</span>(c) <span class="pl-k">?</span> c <span class="pl-k">:</span> k, <span class="pl-en">p</span>(d) <span class="pl-k">?</span> d <span class="pl-k">:</span> k, e <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">K</span>) }</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Ja</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">if</span>(a <span class="pl-k">instanceof</span> <span class="pl-c1">L</span> <span class="pl-k">||</span> <span class="pl-c1">8</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">||</span> c <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> k) { <span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">all</span>; <span class="pl-k">if</span>(<span class="pl-k">!</span>f) <span class="pl-k">return</span> e; a <span class="pl-k">=</span> <span class="pl-en">La</span>(a); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> a <span class="pl-k">&amp;&amp;</span> (f <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">getElementsByTagName</span>(a), <span class="pl-k">!</span>f)) <span class="pl-k">return</span> e; <span class="pl-k">if</span>(c) { <span class="pl-k">for</span>(<span class="pl-k">var</span> g <span class="pl-k">=</span> [], r <span class="pl-k">=</span> <span class="pl-c1">0</span>; b <span class="pl-k">=</span> f[r<span class="pl-k">++</span>];) <span class="pl-en">I</span>(b, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">g</span>.<span class="pl-c1">push</span>(b); f <span class="pl-k">=</span> g } <span class="pl-k">for</span>(r <span class="pl-k">=</span> <span class="pl-c1">0</span>; b <span class="pl-k">=</span> f[r<span class="pl-k">++</span>];) (<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-smi">b</span>.<span class="pl-c1">tagName</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b); <span class="pl-k">return</span> e } <span class="pl-en">Ma</span>(a, b, c, d, e); <span class="pl-k">return</span> e }</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Ka</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-smi">b</span>.<span class="pl-smi">getElementsByName</span> <span class="pl-k">&amp;&amp;</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> c <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>w <span class="pl-k">?</span> (b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">getElementsByName</span>(d), <span class="pl-en">C</span>(b, <span class="pl-k">function</span>(<span class="pl-smi">b</span>) { <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b) })) <span class="pl-k">:</span> <span class="pl-smi">b</span>.<span class="pl-smi">getElementsByClassName</span> <span class="pl-k">&amp;&amp;</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> c <span class="pl-k">?</span> (b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">getElementsByClassName</span>(d), <span class="pl-en">C</span>(b, <span class="pl-k">function</span>(<span class="pl-smi">b</span>) { <span class="pl-smi">b</span>.<span class="pl-c1">className</span> <span class="pl-k">==</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b) })) <span class="pl-k">:</span> a <span class="pl-k">instanceof</span> <span class="pl-c1">N</span> <span class="pl-k">?</span> <span class="pl-en">Ma</span>(a, b, c, d, e) <span class="pl-k">:</span> <span class="pl-smi">b</span>.<span class="pl-smi">getElementsByTagName</span> <span class="pl-k">&amp;&amp;</span> (b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-smi">a</span>.<span class="pl-en">d</span>()), <span class="pl-en">C</span>(b, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-en">I</span>(a, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, a) })); <span class="pl-k">return</span> e }</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Na</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">var</span> f; <span class="pl-k">if</span>((a <span class="pl-k">instanceof</span> <span class="pl-c1">L</span> <span class="pl-k">||</span> <span class="pl-c1">8</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">||</span> c <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> k) <span class="pl-k">&amp;&amp;</span> (f <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">childNodes</span>)) { <span class="pl-k">var</span> g <span class="pl-k">=</span> <span class="pl-en">La</span>(a); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> g <span class="pl-k">&amp;&amp;</span> (f <span class="pl-k">=</span> <span class="pl-en">ua</span>(f, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">tagName</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-c1">tagName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">==</span> g }), <span class="pl-k">!</span>f)) <span class="pl-k">return</span> e; c <span class="pl-k">&amp;&amp;</span> (f <span class="pl-k">=</span> <span class="pl-en">ua</span>(f, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-en">I</span>(a, c, d) })); <span class="pl-en">C</span>(f, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { (<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> g <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-smi">a</span>.<span class="pl-c1">tagName</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> g <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-smi">a</span>.<span class="pl-c1">nodeType</span>)) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, a) }); <span class="pl-k">return</span> e } <span class="pl-k">return</span> <span class="pl-en">Oa</span>(a, b, c, d, e) } <span class="pl-k">function</span> <span class="pl-en">Oa</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">for</span>(b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">firstChild</span>; b; b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">nextSibling</span>) <span class="pl-en">I</span>(b, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b); <span class="pl-k">return</span> e }</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Ma</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">for</span>(b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">firstChild</span>; b; b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">nextSibling</span>) <span class="pl-en">I</span>(b, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b), <span class="pl-en">Ma</span>(a, b, c, d, e) } <span class="pl-k">function</span> <span class="pl-en">La</span>(<span class="pl-smi">a</span>) { <span class="pl-k">if</span>(a <span class="pl-k">instanceof</span> <span class="pl-c1">N</span>) { <span class="pl-k">if</span>(<span class="pl-c1">8</span> <span class="pl-k">==</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span>) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span>; <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> k) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> } <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-en">d</span>() }; <span class="pl-k">function</span> <span class="pl-en">K</span>() { <span class="pl-c1">this</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> k; <span class="pl-c1">this</span>.<span class="pl-smi">i</span> <span class="pl-k">=</span> <span class="pl-c1">0</span> } <span class="pl-k">function</span> <span class="pl-en">Pa</span>(<span class="pl-smi">a</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> k } <span class="pl-k">function</span> <span class="pl-en">Qa</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) { <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">b</span>.<span class="pl-smi">a</span>) <span class="pl-k">return</span> a } <span class="pl-k">else</span> <span class="pl-k">return</span> b; <span class="pl-k">for</span>(<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>, d <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-smi">a</span>, e <span class="pl-k">=</span> k, f <span class="pl-k">=</span> k, g <span class="pl-k">=</span> <span class="pl-c1">0</span>; c <span class="pl-k">&amp;&amp;</span> d;) <span class="pl-smi">c</span>.<span class="pl-smi">b</span> <span class="pl-k">==</span> <span class="pl-smi">d</span>.<span class="pl-smi">b</span> <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">b</span> <span class="pl-k">instanceof</span> <span class="pl-c1">E</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">d</span>.<span class="pl-smi">b</span> <span class="pl-k">instanceof</span> <span class="pl-c1">E</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">b</span>.<span class="pl-smi">a</span> <span class="pl-k">==</span> <span class="pl-smi">d</span>.<span class="pl-smi">b</span>.<span class="pl-smi">a</span> <span class="pl-k">?</span> (f <span class="pl-k">=</span> c, c <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">a</span>, d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-smi">a</span>) <span class="pl-k">:</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;</span> <span class="pl-en">Aa</span>(<span class="pl-smi">c</span>.<span class="pl-smi">b</span>, <span class="pl-smi">d</span>.<span class="pl-smi">b</span>) <span class="pl-k">?</span> (f <span class="pl-k">=</span> d, d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-smi">a</span>) <span class="pl-k">:</span> (f <span class="pl-k">=</span> c, c <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">a</span>), (<span class="pl-smi">f</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> e) <span class="pl-k">?</span> <span class="pl-smi">e</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> f <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> f, e <span class="pl-k">=</span> f, g<span class="pl-k">++</span>; <span class="pl-k">for</span>(f <span class="pl-k">=</span> c <span class="pl-k">||</span> d; f;) <span class="pl-smi">f</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> e, e <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> f, g<span class="pl-k">++</span>, f <span class="pl-k">=</span> <span class="pl-smi">f</span>.<span class="pl-smi">a</span>; <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> e; <span class="pl-smi">a</span>.<span class="pl-smi">i</span> <span class="pl-k">=</span> g; <span class="pl-k">return</span> a } <span class="pl-k">function</span> <span class="pl-en">Ra</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Pa</span>(b); <span class="pl-smi">c</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>; <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> c <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> c; <span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> c; <span class="pl-smi">a</span>.<span class="pl-smi">i</span><span class="pl-k">++</span> }</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">    function M(a, b) { var c = new Pa(b); c.d = a.b; a.a ? a.b.a = c : a.a = a.b = c; a.b = c; a.i++ } function Sa(a) { return (a = a.a) ? a.b : k } function Ta(a) { return (a = Sa(a)) ? H(a) : &quot;&quot; } function O(a, b) { return new Ua(a, !!b) } function Ua(a, b) { this.d = a; this.b = (this.c = b) ? a.b : a.a; this.a = k } function P(a) { var b = a.b; if(b == k) return k; var c = a.a = b; a.b = a.c ? b.d : b.a; return c.b }; function t(a) { this.g = a; this.b = this.f = l; this.d = k } function Q(a, b) { var c = a.a(b); return c instanceof K ? +Ta(c) : +c } function R(a, b) { var c = a.a(b); return c instanceof K ? Ta(c) : &quot;&quot; + c } function S(a, b) { var c = a.a(b); return c instanceof K ? !!c.i : !!c }; function Va(a, b, c) { t.call(this, a.g); this.c = a; this.e = b; this.j = c; this.f = b.f || c.f; this.b = b.b || c.b; this.c == Wa &amp;&amp; (!c.b &amp;&amp; !c.f &amp;&amp; 4 != c.g &amp;&amp; 0 != c.g &amp;&amp; b.d ? this.d = { name: b.d.name, l: c } : !b.b &amp;&amp; (!b.f &amp;&amp; 4 != b.g &amp;&amp; 0 != b.g &amp;&amp; c.d) &amp;&amp; (this.d = { name: c.d.name, l: b })) } q(Va);</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">T</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>)</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-en">a</span>(d), c <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-en">a</span>(d), f; <span class="pl-k">if</span>(b <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">&amp;&amp;</span> c <span class="pl-k">instanceof</span> <span class="pl-c1">K</span>) { f <span class="pl-k">=</span> <span class="pl-en">O</span>(b); <span class="pl-k">for</span>(b <span class="pl-k">=</span> <span class="pl-en">P</span>(f) ; b; b <span class="pl-k">=</span> <span class="pl-en">P</span>(f)) { e <span class="pl-k">=</span> <span class="pl-en">O</span>(c); <span class="pl-k">for</span>(d <span class="pl-k">=</span> <span class="pl-en">P</span>(e) ; d; d <span class="pl-k">=</span> <span class="pl-en">P</span>(e)) <span class="pl-k">if</span>(<span class="pl-en">a</span>(<span class="pl-en">H</span>(b), <span class="pl-en">H</span>(d))) <span class="pl-k">return</span> j } <span class="pl-k">return</span> l } <span class="pl-k">if</span>(b <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">||</span> c <span class="pl-k">instanceof</span> <span class="pl-c1">K</span>) { b <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> e <span class="pl-k">=</span> b <span class="pl-k">:</span> (e <span class="pl-k">=</span> c, c <span class="pl-k">=</span> b); e <span class="pl-k">=</span> <span class="pl-en">O</span>(e); b <span class="pl-k">=</span> <span class="pl-k">typeof</span> c; <span class="pl-k">for</span>(d <span class="pl-k">=</span> <span class="pl-en">P</span>(e) ; d; d <span class="pl-k">=</span> <span class="pl-en">P</span>(e)) { <span class="pl-k">switch</span>(b) { <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>: f <span class="pl-k">=</span> <span class="pl-k">+</span><span class="pl-en">H</span>(d); <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span>: f <span class="pl-k">=</span> <span class="pl-k">!!</span><span class="pl-en">H</span>(d); <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>: f <span class="pl-k">=</span> <span class="pl-en">H</span>(d); <span class="pl-k">break</span>; <span class="pl-k">default</span>: <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Illegal primitive type for comparison.<span class="pl-pds">&quot;</span></span>)) } <span class="pl-k">if</span>(<span class="pl-en">a</span>(f, c)) <span class="pl-k">return</span> j } <span class="pl-k">return</span> l } <span class="pl-k">return</span> e <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> b <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> c <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">a</span>(<span class="pl-k">!!</span>b, <span class="pl-k">!!</span>c) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> b <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> c <span class="pl-k">?</span> <span class="pl-en">a</span>(<span class="pl-k">+</span>b, <span class="pl-k">+</span>c) <span class="pl-k">:</span> <span class="pl-en">a</span>(b, c) <span class="pl-k">:</span> <span class="pl-en">a</span>(<span class="pl-k">+</span>b, <span class="pl-k">+</span>c)</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">    } <span class="pl-smi">Va</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">a</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-en">k</span>(<span class="pl-c1">this</span>.<span class="pl-smi">e</span>, <span class="pl-c1">this</span>.<span class="pl-smi">j</span>, a) }; <span class="pl-smi">Va</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> a <span class="pl-k">=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>binary expression: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>, a <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-c1">toString</span>(a) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>); <span class="pl-k">return</span> b <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">j</span>.<span class="pl-c1">toString</span>(a) }; <span class="pl-k">function</span> <span class="pl-en">Xa</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">p</span> <span class="pl-k">=</span> b; <span class="pl-c1">this</span>.<span class="pl-smi">g</span> <span class="pl-k">=</span> c; <span class="pl-c1">this</span>.<span class="pl-smi">k</span> <span class="pl-k">=</span> d } <span class="pl-smi">Xa</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toString</span> <span class="pl-k">=</span> <span class="pl-en">m</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>); <span class="pl-k">var</span> Ya <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">U</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { a <span class="pl-k">in</span> Ya <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Binary operator already created: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> a)); a <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Xa</span>(a, b, c, d); <span class="pl-k">return</span> Ya[<span class="pl-smi">a</span>.<span class="pl-c1">toString</span>()] <span class="pl-k">=</span> a } <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">6</span>, <span class="pl-c1">1</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">Q</span>(a, c) <span class="pl-k">/</span> <span class="pl-en">Q</span>(b, c) }); <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mod<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">6</span>, <span class="pl-c1">1</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">Q</span>(a, c) <span class="pl-k">%</span> <span class="pl-en">Q</span>(b, c) }); <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">6</span>, <span class="pl-c1">1</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">Q</span>(a, c) <span class="pl-k">*</span> <span class="pl-en">Q</span>(b, c) }); <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>+<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>, <span class="pl-c1">1</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">Q</span>(a, c) <span class="pl-k">+</span> <span class="pl-en">Q</span>(b, c) }); <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>, <span class="pl-c1">1</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">Q</span>(a, c) <span class="pl-k">-</span> <span class="pl-en">Q</span>(b, c) }); <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">4</span>, <span class="pl-c1">2</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> <span class="pl-en">T</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> a <span class="pl-k">&lt;</span> b }, a, b, c) });</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">    U(&quot;&gt;&quot;, 4, 2, function(a, b, c) { return T(function(a, b) { return a &gt; b }, a, b, c) }); U(&quot;&lt;=&quot;, 4, 2, function(a, b, c) { return T(function(a, b) { return a &lt;= b }, a, b, c) }); U(&quot;&gt;=&quot;, 4, 2, function(a, b, c) { return T(function(a, b) { return a &gt;= b }, a, b, c) }); var Wa = U(&quot;=&quot;, 3, 2, function(a, b, c) { return T(function(a, b) { return a == b }, a, b, c, j) }); U(&quot;!=&quot;, 3, 2, function(a, b, c) { return T(function(a, b) { return a != b }, a, b, c, j) }); U(&quot;and&quot;, 2, 2, function(a, b, c) { return S(a, c) &amp;&amp; S(b, c) }); U(&quot;or&quot;, 1, 2, function(a, b, c) { return S(a, c) || S(b, c) }); function Za(a, b) { b.a.length &amp;&amp; 4 != a.g &amp;&amp; h(Error(&quot;Primary expression must evaluate to nodeset if filter has predicate(s).&quot;)); t.call(this, a.g); this.c = a; this.e = b; this.f = a.f; this.b = a.b } q(Za); Za.prototype.a = function(a) { a = this.c.a(a); return $a(this.e, a) }; Za.prototype.toString = function(a) { var a = a || &quot;&quot;, b = a + &quot;Filter: \n&quot;, a = a + &quot;  &quot;, b = b + this.c.toString(a); return b += this.e.toString(a) }; function ab(a, b) { b.length &lt; a.o &amp;&amp; h(Error(&quot;Function &quot; + a.h + &quot; expects at least&quot; + a.o + &quot; arguments, &quot; + b.length + &quot; given&quot;)); a.n !== k &amp;&amp; b.length &gt; a.n &amp;&amp; h(Error(&quot;Function &quot; + a.h + &quot; expects at most &quot; + a.n + &quot; arguments, &quot; + b.length + &quot; given&quot;)); a.s &amp;&amp; C(b, function(b, d) { 4 != b.g &amp;&amp; h(Error(&quot;Argument &quot; + d + &quot; to function &quot; + a.h + &quot; is not of type Nodeset: &quot; + b)) }); t.call(this, a.g); this.e = a; this.c = b; this.f = a.f || wa(b, function(a) { return a.f }); this.b = a.r &amp;&amp; !b.length || a.q &amp;&amp; !!b.length || wa(b, function(a) { return a.b }) } q(ab);</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ab</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">a</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-smi">k</span>.<span class="pl-c1">apply</span>(k, <span class="pl-en">xa</span>(a, <span class="pl-c1">this</span>.<span class="pl-smi">c</span>)) }; <span class="pl-smi">ab</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, a <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Function: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>; <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> (a <span class="pl-k">+=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Arguments:<span class="pl-pds">&quot;</span></span>, b <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>, a <span class="pl-k">=</span> <span class="pl-en">va</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">d</span>) { <span class="pl-k">return</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-c1">toString</span>(b) }, a)); <span class="pl-k">return</span> a }; <span class="pl-k">function</span> <span class="pl-en">bb</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>, <span class="pl-smi">f</span>, <span class="pl-smi">g</span>, <span class="pl-smi">r</span>, <span class="pl-smi">v</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">h</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">g</span> <span class="pl-k">=</span> b; <span class="pl-c1">this</span>.<span class="pl-smi">f</span> <span class="pl-k">=</span> c; <span class="pl-c1">this</span>.<span class="pl-smi">r</span> <span class="pl-k">=</span> d; <span class="pl-c1">this</span>.<span class="pl-smi">q</span> <span class="pl-k">=</span> e; <span class="pl-c1">this</span>.<span class="pl-smi">k</span> <span class="pl-k">=</span> f; <span class="pl-c1">this</span>.<span class="pl-smi">o</span> <span class="pl-k">=</span> g; <span class="pl-c1">this</span>.<span class="pl-smi">n</span> <span class="pl-k">=</span> r <span class="pl-k">!==</span> i <span class="pl-k">?</span> r <span class="pl-k">:</span> g; <span class="pl-c1">this</span>.<span class="pl-smi">s</span> <span class="pl-k">=</span> <span class="pl-k">!!</span>v } <span class="pl-smi">bb</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toString</span> <span class="pl-k">=</span> <span class="pl-en">m</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>h<span class="pl-pds">&quot;</span></span>); <span class="pl-k">var</span> cb <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">V</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>, <span class="pl-smi">f</span>, <span class="pl-smi">g</span>, <span class="pl-smi">r</span>) { a <span class="pl-k">in</span> cb <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Function already created: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>)); cb[a] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">bb</span>(a, b, c, d, l, e, f, g, r) } <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-en">S</span>(b, a) }, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ceiling<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>(<span class="pl-en">Q</span>(b, a)) }, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>concat<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-en">ya</span>(<span class="pl-c1">arguments</span>, <span class="pl-c1">1</span>); <span class="pl-k">return</span> <span class="pl-en">va</span>(c, <span class="pl-k">function</span>(<span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">return</span> b <span class="pl-k">+</span> <span class="pl-en">R</span>(c, a) }, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) }, <span class="pl-c1">2</span>, k); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>contains<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { b <span class="pl-k">=</span> <span class="pl-en">R</span>(b, a); a <span class="pl-k">=</span> <span class="pl-en">R</span>(c, a); <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-smi">b</span>.<span class="pl-c1">indexOf</span>(a) }, <span class="pl-c1">2</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>count<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-en">a</span>(a).<span class="pl-smi">i</span> }, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>, j); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>false<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-en">aa</span>(l), <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>floor<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-en">Q</span>(b, a)) }, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">4</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">function</span> <span class="pl-en">c</span>(<span class="pl-smi">a</span>) { <span class="pl-k">if</span>(<span class="pl-c1">D</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">all</span>[a]; <span class="pl-k">if</span>(b) { <span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">&amp;&amp;</span> a <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">id</span>) <span class="pl-k">return</span> b; <span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-c1">length</span>) { <span class="pl-k">var</span> c; a<span class="pl-k">:</span> { <span class="pl-en">c</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">b</span>) { <span class="pl-k">return</span> a <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">id</span> }; <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">length</span>, f <span class="pl-k">=</span> <span class="pl-en">p</span>(b) <span class="pl-k">?</span> <span class="pl-smi">b</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> b, g <span class="pl-k">=</span> <span class="pl-c1">0</span>; g <span class="pl-k">&lt;</span> d; g<span class="pl-k">++</span>) <span class="pl-k">if</span>(g <span class="pl-k">in</span> f <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-c1">call</span>(i, f[g])) { c <span class="pl-k">=</span> g; <span class="pl-k">break</span> a } c <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span> } <span class="pl-k">return</span> <span class="pl-c1">0</span> <span class="pl-k">&gt;</span> c <span class="pl-k">?</span> k <span class="pl-k">:</span> <span class="pl-en">p</span>(b) <span class="pl-k">?</span> <span class="pl-smi">b</span>.<span class="pl-c1">charAt</span>(c) <span class="pl-k">:</span> b[c] } } <span class="pl-k">return</span> k } <span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-c1">getElementById</span>(a) } <span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>, e <span class="pl-k">=</span> <span class="pl-c1">9</span> <span class="pl-k">==</span> <span class="pl-smi">d</span>.<span class="pl-c1">nodeType</span> <span class="pl-k">?</span> d <span class="pl-k">:</span> <span class="pl-smi">d</span>.<span class="pl-c1">ownerDocument</span>, d <span class="pl-k">=</span> <span class="pl-en">R</span>(b, a).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>), f <span class="pl-k">=</span> []; <span class="pl-en">C</span>(d, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { (a <span class="pl-k">=</span> <span class="pl-en">c</span>(a)) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-c1">0</span> <span class="pl-k">&lt;=</span> <span class="pl-en">ta</span>(f, a)) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">f</span>.<span class="pl-c1">push</span>(a) }); <span class="pl-smi">f</span>.<span class="pl-c1">sort</span>(Aa); <span class="pl-k">var</span> g <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>; <span class="pl-en">C</span>(f, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-en">M</span>(g, a) }); <span class="pl-k">return</span> g },</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>lang<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-en">aa</span>(l), <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>last<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, j, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-c1">1</span> <span class="pl-k">!=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Function last expects ()<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">d</span> }, <span class="pl-c1">0</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>local-name<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> b <span class="pl-k">?</span> <span class="pl-en">Sa</span>(<span class="pl-smi">b</span>.<span class="pl-en">a</span>(a)) <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>; <span class="pl-k">return</span> c <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, j); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> b <span class="pl-k">?</span> <span class="pl-en">Sa</span>(<span class="pl-smi">b</span>.<span class="pl-en">a</span>(a)) <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>; <span class="pl-k">return</span> c <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, j); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>namespace-uri<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, j, l, <span class="pl-en">aa</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, j); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>normalize-space<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> (b <span class="pl-k">?</span> <span class="pl-en">R</span>(b, a) <span class="pl-k">:</span> <span class="pl-en">H</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-c1">\xa0</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>not<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-en">S</span>(b, a) }, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> b <span class="pl-k">?</span> <span class="pl-en">Q</span>(b, a) <span class="pl-k">:</span> <span class="pl-k">+</span><span class="pl-en">H</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>position<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, j, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> }, <span class="pl-c1">0</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>round<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(<span class="pl-en">Q</span>(b, a)) }, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>starts-with<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { b <span class="pl-k">=</span> <span class="pl-en">R</span>(b, a); a <span class="pl-k">=</span> <span class="pl-en">R</span>(c, a); <span class="pl-k">return</span> <span class="pl-c1">0</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">lastIndexOf</span>(a, <span class="pl-c1">0</span>) }, <span class="pl-c1">2</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> b <span class="pl-k">?</span> <span class="pl-en">R</span>(b, a) <span class="pl-k">:</span> <span class="pl-en">H</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>string-length<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">1</span>, l, j, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> (b <span class="pl-k">?</span> <span class="pl-en">R</span>(b, a) <span class="pl-k">:</span> <span class="pl-en">H</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)).<span class="pl-c1">length</span> }, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>substring<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { c <span class="pl-k">=</span> <span class="pl-en">Q</span>(c, a); <span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(c) <span class="pl-k">||</span> <span class="pl-c1">Infinity</span> <span class="pl-k">==</span> c <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">==</span> c) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; d <span class="pl-k">=</span> d <span class="pl-k">?</span> <span class="pl-en">Q</span>(d, a) <span class="pl-k">:</span> <span class="pl-c1">Infinity</span>; <span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(d) <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">Infinity</span> <span class="pl-k">===</span> d) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(c) <span class="pl-k">-</span> <span class="pl-c1">1</span>, e <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(c, <span class="pl-c1">0</span>), a <span class="pl-k">=</span> <span class="pl-en">R</span>(b, a); <span class="pl-k">if</span>(<span class="pl-c1">Infinity</span> <span class="pl-k">==</span> d) <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">substring</span>(e); b <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(d); <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">substring</span>(e, c <span class="pl-k">+</span> b) }, <span class="pl-c1">2</span>, <span class="pl-c1">3</span>); <span class="pl-en">V</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>substring-after<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">3</span>, l, l, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { b <span class="pl-k">=</span> <span class="pl-en">R</span>(b, a); a <span class="pl-k">=</span> <span class="pl-en">R</span>(c, a); c <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">indexOf</span>(a); <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">==</span> c <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(c <span class="pl-k">+</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>) }, <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">    V(&quot;substring-before&quot;, 3, l, l, function(a, b, c) { b = R(b, a); a = R(c, a); a = b.indexOf(a); return -1 == a ? &quot;&quot; : b.substring(0, a) }, 2); V(&quot;sum&quot;, 1, l, l, function(a, b) { for(var c = O(b.a(a)), d = 0, e = P(c) ; e; e = P(c)) d += +H(e); return d }, 1, 1, j); V(&quot;translate&quot;, 3, l, l, function(a, b, c, d) { for(var b = R(b, a), c = R(c, a), e = R(d, a), a = [], d = 0; d &lt; c.length; d++) { var f = c.charAt(d); f in a || (a[f] = e.charAt(d)) } c = &quot;&quot;; for(d = 0; d &lt; b.length; d++) f = b.charAt(d), c += f in a ? a[f] : f; return c }, 3); V(&quot;true&quot;, 2, l, l, aa(j), 0); function N(a, b) { this.e = a; this.c = b !== i ? b : k; this.b = k; switch(a) { case &quot;comment&quot;: this.b = 8; break; case &quot;text&quot;: this.b = 3; break; case &quot;processing-instruction&quot;: this.b = 7; break; case &quot;node&quot;: break; default: h(Error(&quot;Unexpected argument&quot;)) } } function db(a) { return &quot;comment&quot; == a || &quot;text&quot; == a || &quot;processing-instruction&quot; == a || &quot;node&quot; == a } N.prototype.a = function(a) { return this.b === k || this.b == a.nodeType }; N.prototype.d = m(&quot;e&quot;);</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">    N.prototype.toString = function(a) { var a = a || &quot;&quot;, b = a + &quot;kindtest: &quot; + this.e; this.c === k || (b += &quot;\n&quot; + this.c.toString(a + &quot;  &quot;)); return b }; function eb(a) { t.call(this, 3); this.c = a.substring(1, a.length - 1) } q(eb); eb.prototype.a = m(&quot;c&quot;); eb.prototype.toString = function(a) { return (a || &quot;&quot;) + &quot;literal: &quot; + this.c }; function L(a) { this.h = a.toLowerCase() } L.prototype.a = function(a) { var b = a.nodeType; if(1 == b || 2 == b) return &quot;*&quot; == this.h || this.h == a.nodeName.toLowerCase() ? j : this.h == (a.namespaceURI || &quot;http://www.w3.org/1999/xhtml&quot;) + &quot;:*&quot; }; L.prototype.d = m(&quot;h&quot;); L.prototype.toString = function(a) { return (a || &quot;&quot;) + &quot;nametest: &quot; + this.h }; function fb(a) { t.call(this, 1); this.c = a } q(fb); fb.prototype.a = m(&quot;c&quot;); fb.prototype.toString = function(a) { return (a || &quot;&quot;) + &quot;number: &quot; + this.c }; function gb(a, b) { t.call(this, a.g); this.e = a; this.c = b; this.f = a.f; this.b = a.b; if(1 == this.c.length) { var c = this.c[0]; !c.m &amp;&amp; c.e == hb &amp;&amp; (c = c.j, &quot;*&quot; != c.d() &amp;&amp; (this.d = { name: c.d(), l: k })) } } q(gb); function ib() { t.call(this, 4) } q(ib); ib.prototype.a = function(a) { var b = new K, a = a.a; 9 == a.nodeType ? M(b, a) : M(b, a.ownerDocument); return b }; ib.prototype.toString = function(a) { return a + &quot;RootHelperExpr&quot; }; function jb() { t.call(this, 4) } q(jb); jb.prototype.a = function(a) { var b = new K; M(b, a.a); return b };</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">jb</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ContextHelperExpr<span class="pl-pds">&quot;</span></span> }; <span class="pl-smi">gb</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">a</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-en">a</span>(a); b <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>FilterExpr must evaluate to nodeset.<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">for</span>(<span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>, c <span class="pl-k">=</span> <span class="pl-c1">0</span>, d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>; c <span class="pl-k">&lt;</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">b</span>.<span class="pl-smi">i</span>; c<span class="pl-k">++</span>) { <span class="pl-k">var</span> e <span class="pl-k">=</span> a[c], f <span class="pl-k">=</span> <span class="pl-en">O</span>(b, <span class="pl-smi">e</span>.<span class="pl-smi">e</span>.<span class="pl-smi">a</span>), g; <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">e</span>.<span class="pl-smi">f</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">e</span> <span class="pl-k">==</span> kb) { <span class="pl-k">for</span>(g <span class="pl-k">=</span> <span class="pl-en">P</span>(f) ; (b <span class="pl-k">=</span> <span class="pl-en">P</span>(f)) <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span><span class="pl-smi">g</span>.<span class="pl-smi">contains</span> <span class="pl-k">||</span> <span class="pl-smi">g</span>.<span class="pl-c1">contains</span>(b)) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">b</span>.<span class="pl-c1">compareDocumentPosition</span>(g) <span class="pl-k">&amp;</span> <span class="pl-c1">8</span>; g <span class="pl-k">=</span> b); b <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(g)) } <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">e</span>.<span class="pl-smi">f</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">e</span> <span class="pl-k">==</span> lb) g <span class="pl-k">=</span> <span class="pl-en">P</span>(f), b <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(g)); <span class="pl-k">else</span> { g <span class="pl-k">=</span> <span class="pl-en">P</span>(f); <span class="pl-k">for</span>(b <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(g)) ; (g <span class="pl-k">=</span> <span class="pl-en">P</span>(f)) <span class="pl-k">!=</span> k;) g <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(g)), b <span class="pl-k">=</span> <span class="pl-en">Qa</span>(b, g) } } <span class="pl-k">return</span> b };</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">gb</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, c <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>PathExpr:<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>, c <span class="pl-k">=</span> c <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-c1">toString</span>(b); <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> (c <span class="pl-k">+=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Steps:<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>, <span class="pl-en">C</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { c <span class="pl-k">+=</span> <span class="pl-smi">a</span>.<span class="pl-c1">toString</span>(b) })); <span class="pl-k">return</span> c }; <span class="pl-k">function</span> <span class="pl-en">mb</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> <span class="pl-k">!!</span>b } <span class="pl-k">function</span> <span class="pl-en">$a</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>) { <span class="pl-k">for</span>(c <span class="pl-k">=</span> c <span class="pl-k">||</span> <span class="pl-c1">0</span>; c <span class="pl-k">&lt;</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">length</span>; c<span class="pl-k">++</span>) <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>[c], e <span class="pl-k">=</span> <span class="pl-en">O</span>(b), f <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-smi">i</span>, g, r <span class="pl-k">=</span> <span class="pl-c1">0</span>; g <span class="pl-k">=</span> <span class="pl-en">P</span>(e) ; r<span class="pl-k">++</span>) { <span class="pl-k">var</span> v <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">?</span> f <span class="pl-k">-</span> r <span class="pl-k">:</span> r <span class="pl-k">+</span> <span class="pl-c1">1</span>; g <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(g, v, f)); <span class="pl-k">var</span> <span class="pl-c1">J</span>; <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> g <span class="pl-k">?</span> <span class="pl-c1">J</span> <span class="pl-k">=</span> v <span class="pl-k">==</span> g <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> g <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> g <span class="pl-k">?</span> <span class="pl-c1">J</span> <span class="pl-k">=</span> <span class="pl-k">!!</span>g <span class="pl-k">:</span> g <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-c1">J</span> <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;</span> <span class="pl-smi">g</span>.<span class="pl-smi">i</span> <span class="pl-k">:</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Predicate.evaluate returned an unexpected type.<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">J</span>) { v <span class="pl-k">=</span> e; g <span class="pl-k">=</span> <span class="pl-smi">v</span>.<span class="pl-smi">d</span>; <span class="pl-k">var</span> s <span class="pl-k">=</span> <span class="pl-smi">v</span>.<span class="pl-smi">a</span>; s <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Next must be called at least once before remove.<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">d</span>, s <span class="pl-k">=</span> <span class="pl-smi">s</span>.<span class="pl-smi">a</span>; x <span class="pl-k">?</span> <span class="pl-smi">x</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> s <span class="pl-k">:</span> <span class="pl-smi">g</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> s; s <span class="pl-k">?</span> <span class="pl-smi">s</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> x <span class="pl-k">:</span> <span class="pl-smi">g</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> x; <span class="pl-smi">g</span>.<span class="pl-smi">i</span><span class="pl-k">--</span>; <span class="pl-smi">v</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> k } } <span class="pl-k">return</span> b }</td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">mb</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, a <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Predicates:<span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>; <span class="pl-k">return</span> <span class="pl-en">va</span>(<span class="pl-c1">this</span>.<span class="pl-smi">a</span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">d</span>) { <span class="pl-k">return</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> b <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-c1">toString</span>(b) }, a) }; <span class="pl-k">function</span> <span class="pl-en">W</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-smi">t</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, <span class="pl-c1">4</span>); <span class="pl-c1">this</span>.<span class="pl-smi">e</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">j</span> <span class="pl-k">=</span> b; <span class="pl-c1">this</span>.<span class="pl-smi">c</span> <span class="pl-k">=</span> c <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">mb</span>([]); <span class="pl-c1">this</span>.<span class="pl-smi">m</span> <span class="pl-k">=</span> <span class="pl-k">!!</span>d; b <span class="pl-k">=</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-smi">a</span>[<span class="pl-c1">0</span>].<span class="pl-smi">d</span> <span class="pl-k">:</span> k; <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">&amp;&amp;</span> b <span class="pl-k">&amp;&amp;</span> (a <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">name</span>, a <span class="pl-k">=</span> <span class="pl-c1">D</span> <span class="pl-k">?</span> <span class="pl-smi">a</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">:</span> a, <span class="pl-c1">this</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> { name<span class="pl-k">:</span> a, l<span class="pl-k">:</span> <span class="pl-smi">b</span>.<span class="pl-smi">l</span> }); a<span class="pl-k">:</span> { a <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>; <span class="pl-k">for</span>(b <span class="pl-k">=</span> <span class="pl-c1">0</span>; b <span class="pl-k">&lt;</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">length</span>; b<span class="pl-k">++</span>) <span class="pl-k">if</span>(c <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>[b], <span class="pl-smi">c</span>.<span class="pl-smi">f</span> <span class="pl-k">||</span> <span class="pl-c1">1</span> <span class="pl-k">==</span> <span class="pl-smi">c</span>.<span class="pl-smi">g</span> <span class="pl-k">||</span> <span class="pl-c1">0</span> <span class="pl-k">==</span> <span class="pl-smi">c</span>.<span class="pl-smi">g</span>) { a <span class="pl-k">=</span> j; <span class="pl-k">break</span> a } a <span class="pl-k">=</span> l } <span class="pl-c1">this</span>.<span class="pl-smi">f</span> <span class="pl-k">=</span> a } <span class="pl-en">q</span>(<span class="pl-c1">W</span>);</td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">W</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">a</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>, c <span class="pl-k">=</span> k, c <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">d</span>, d <span class="pl-k">=</span> k, e <span class="pl-k">=</span> k, f <span class="pl-k">=</span> <span class="pl-c1">0</span>; c <span class="pl-k">&amp;&amp;</span> (d <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-c1">name</span>, e <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">l</span> <span class="pl-k">?</span> <span class="pl-en">R</span>(<span class="pl-smi">c</span>.<span class="pl-smi">l</span>, a) <span class="pl-k">:</span> k, f <span class="pl-k">=</span> <span class="pl-c1">1</span>); <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">m</span>) <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">f</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span> <span class="pl-k">==</span> nb) c <span class="pl-k">=</span> <span class="pl-en">Ia</span>(<span class="pl-c1">this</span>.<span class="pl-smi">j</span>, b, d, e), c <span class="pl-k">=</span> <span class="pl-en">$a</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>, c, f); <span class="pl-k">else</span> <span class="pl-k">if</span>(a <span class="pl-k">=</span> <span class="pl-en">O</span>((<span class="pl-k">new</span> <span class="pl-en">W</span>(ob, <span class="pl-k">new</span> <span class="pl-en">N</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>node<span class="pl-pds">&quot;</span></span>))).<span class="pl-en">a</span>(a)), b <span class="pl-k">=</span> <span class="pl-en">P</span>(a)) <span class="pl-k">for</span>(c <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">k</span>(b, d, e, f) ; (b <span class="pl-k">=</span> <span class="pl-en">P</span>(a)) <span class="pl-k">!=</span> k;) c <span class="pl-k">=</span> <span class="pl-en">Qa</span>(c, <span class="pl-c1">this</span>.<span class="pl-en">k</span>(b, d, e, f)); <span class="pl-k">else</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>; <span class="pl-k">else</span> c <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">k</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>, d, e, f); <span class="pl-k">return</span> c }; <span class="pl-c1">W</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">k</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { a <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-en">d</span>(<span class="pl-c1">this</span>.<span class="pl-smi">j</span>, a, b, c); <span class="pl-k">return</span> a <span class="pl-k">=</span> <span class="pl-en">$a</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>, a, d) };</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">W</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">toString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> a <span class="pl-k">=</span> a <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Step: <span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>, a <span class="pl-k">=</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>  <span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> (a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Operator: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">m</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>); <span class="pl-c1">this</span>.<span class="pl-smi">e</span>.<span class="pl-smi">h</span> <span class="pl-k">&amp;&amp;</span> (b <span class="pl-k">+=</span> a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Axis: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">e</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>); b <span class="pl-k">+=</span> <span class="pl-c1">this</span>.<span class="pl-smi">j</span>.<span class="pl-c1">toString</span>(a); <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-c1">length</span>) <span class="pl-k">for</span>(<span class="pl-k">var</span> b <span class="pl-k">=</span> b <span class="pl-k">+</span> (a <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Predicates: <span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>), c <span class="pl-k">=</span> <span class="pl-c1">0</span>; c <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-c1">length</span>; c<span class="pl-k">++</span>) <span class="pl-k">var</span> d <span class="pl-k">=</span> c <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">c</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, b <span class="pl-k">=</span> b <span class="pl-k">+</span> (<span class="pl-c1">this</span>.<span class="pl-smi">c</span>[c].<span class="pl-c1">toString</span>(a) <span class="pl-k">+</span> d); <span class="pl-k">return</span> b }; <span class="pl-k">function</span> <span class="pl-en">pb</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-c1">this</span>.<span class="pl-smi">h</span> <span class="pl-k">=</span> a; <span class="pl-c1">this</span>.<span class="pl-smi">d</span> <span class="pl-k">=</span> b; <span class="pl-c1">this</span>.<span class="pl-smi">a</span> <span class="pl-k">=</span> c; <span class="pl-c1">this</span>.<span class="pl-smi">b</span> <span class="pl-k">=</span> d } <span class="pl-smi">pb</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">toString</span> <span class="pl-k">=</span> <span class="pl-en">m</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>h<span class="pl-pds">&quot;</span></span>); <span class="pl-k">var</span> qb <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">X</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { a <span class="pl-k">in</span> qb <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Axis already created: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> a)); b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">pb</span>(a, b, c, <span class="pl-k">!!</span>d); <span class="pl-k">return</span> qb[a] <span class="pl-k">=</span> b } <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ancestor<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>, d <span class="pl-k">=</span> b; d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">parentNode</span>;) <span class="pl-smi">a</span>.<span class="pl-en">a</span>(d) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">Ra</span>(c, d); <span class="pl-k">return</span> c }, j); <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ancestor-or-self<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>, d <span class="pl-k">=</span> b; <span class="pl-k">do</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(d) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">Ra</span>(c, d); <span class="pl-k">while</span>(d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">parentNode</span>); <span class="pl-k">return</span> c }, j);</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> hb <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>attribute<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>, d <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-en">d</span>(); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">b</span>.<span class="pl-c1">style</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">D</span>) <span class="pl-k">return</span> <span class="pl-en">M</span>(c, <span class="pl-k">new</span> <span class="pl-en">E</span>(<span class="pl-smi">b</span>.<span class="pl-c1">style</span>, b, <span class="pl-s"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">b</span>.<span class="pl-c1">style</span>.<span class="pl-smi">cssText</span>)), c; <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">attributes</span>; <span class="pl-k">if</span>(e) <span class="pl-k">if</span>(a <span class="pl-k">instanceof</span> <span class="pl-c1">N</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-smi">b</span> <span class="pl-k">===</span> k <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> d) <span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-c1">0</span>, f; f <span class="pl-k">=</span> e[d]; d<span class="pl-k">++</span>) <span class="pl-c1">D</span> <span class="pl-k">?</span> <span class="pl-smi">f</span>.<span class="pl-c1">nodeValue</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(c, <span class="pl-en">Ea</span>(b, f)) <span class="pl-k">:</span> <span class="pl-en">M</span>(c, f); <span class="pl-k">else</span>(f <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">getNamedItem</span>(d)) <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">D</span> <span class="pl-k">?</span> <span class="pl-smi">f</span>.<span class="pl-c1">nodeValue</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(c, <span class="pl-en">Ea</span>(b, f)) <span class="pl-k">:</span> <span class="pl-en">M</span>(c, f)); <span class="pl-k">return</span> c }, l), nb <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>child<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">e</span>) { <span class="pl-k">return</span> (<span class="pl-c1">D</span> <span class="pl-k">?</span> Na <span class="pl-k">:</span> Oa).<span class="pl-c1">call</span>(k, a, b, <span class="pl-en">p</span>(c) <span class="pl-k">?</span> c <span class="pl-k">:</span> k, <span class="pl-en">p</span>(d) <span class="pl-k">?</span> d <span class="pl-k">:</span> k, e <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">K</span>) }, l, j); <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>descendant<span class="pl-pds">&quot;</span></span>, Ia, l, j);</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ob <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>descendant-or-self<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>; <span class="pl-en">I</span>(b, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b); <span class="pl-k">return</span> <span class="pl-en">Ia</span>(a, b, c, d, e) }, l, j), kb <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>following<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>; <span class="pl-k">do</span> <span class="pl-k">for</span>(<span class="pl-k">var</span> f <span class="pl-k">=</span> b; f <span class="pl-k">=</span> <span class="pl-smi">f</span>.<span class="pl-c1">nextSibling</span>;) <span class="pl-en">I</span>(f, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(f) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, f), e <span class="pl-k">=</span> <span class="pl-en">Ia</span>(a, f, c, d, e); <span class="pl-k">while</span>(b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>); <span class="pl-k">return</span> e }, l, j); <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>following-sibling<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>, d <span class="pl-k">=</span> b; d <span class="pl-k">=</span> <span class="pl-smi">d</span>.<span class="pl-c1">nextSibling</span>;) <span class="pl-smi">a</span>.<span class="pl-en">a</span>(d) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(c, d); <span class="pl-k">return</span> c }, l); <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>namespace<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">K</span> }, l);</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> rb <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>parent<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>; <span class="pl-k">if</span>(<span class="pl-c1">9</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span>) <span class="pl-k">return</span> c; <span class="pl-k">if</span>(<span class="pl-c1">2</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">nodeType</span>) <span class="pl-k">return</span> <span class="pl-en">M</span>(c, <span class="pl-smi">b</span>.<span class="pl-smi">ownerElement</span>), c; <span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>; <span class="pl-smi">a</span>.<span class="pl-en">a</span>(d) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(c, d); <span class="pl-k">return</span> c }, l), lb <span class="pl-k">=</span> <span class="pl-en">X</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>preceding<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>) { <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">K</span>, f <span class="pl-k">=</span> []; <span class="pl-k">do</span> <span class="pl-smi">f</span>.<span class="pl-c1">unshift</span>(b); <span class="pl-k">while</span>(b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>); <span class="pl-k">for</span>(<span class="pl-k">var</span> g <span class="pl-k">=</span> <span class="pl-c1">1</span>, r <span class="pl-k">=</span> <span class="pl-smi">f</span>.<span class="pl-c1">length</span>; g <span class="pl-k">&lt;</span> r; g<span class="pl-k">++</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> v <span class="pl-k">=</span> [], b <span class="pl-k">=</span> f[g]; b <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-smi">previousSibling</span>;) <span class="pl-smi">v</span>.<span class="pl-c1">unshift</span>(b); <span class="pl-k">for</span>(<span class="pl-k">var</span> <span class="pl-c1">J</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>, s <span class="pl-k">=</span> <span class="pl-smi">v</span>.<span class="pl-c1">length</span>; <span class="pl-c1">J</span> <span class="pl-k">&lt;</span> s; <span class="pl-c1">J</span><span class="pl-k">++</span>) b <span class="pl-k">=</span> v[<span class="pl-c1">J</span>], <span class="pl-en">I</span>(b, c, d) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-en">a</span>(b) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">M</span>(e, b), e <span class="pl-k">=</span> <span class="pl-en">Ia</span>(a, b, c, d, e) } <span class="pl-k">return</span> e }, j, j);</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">    X(&quot;preceding-sibling&quot;, function(a, b) { for(var c = new K, d = b; d = d.previousSibling;) a.a(d) &amp;&amp; Ra(c, d); return c }, j); var sb = X(&quot;self&quot;, function(a, b) { var c = new K; a.a(b) &amp;&amp; M(c, b); return c }, l); function tb(a) { t.call(this, 1); this.c = a; this.f = a.f; this.b = a.b } q(tb); tb.prototype.a = function(a) { return -Q(this.c, a) }; tb.prototype.toString = function(a) { var a = a || &quot;&quot;, b = a + &quot;UnaryExpr: -\n&quot;; return b += this.c.toString(a + &quot;  &quot;) }; function ub(a) { t.call(this, 4); this.c = a; this.f = wa(this.c, function(a) { return a.f }); this.b = wa(this.c, function(a) { return a.b }) } q(ub); ub.prototype.a = function(a) { var b = new K; C(this.c, function(c) { c = c.a(a); c instanceof K || h(Error(&quot;PathExpr must evaluate to NodeSet.&quot;)); b = Qa(b, c) }); return b }; ub.prototype.toString = function(a) { var b = a || &quot;&quot;, c = b + &quot;UnionExpr:\n&quot;, b = b + &quot;  &quot;; C(this.c, function(a) { c += a.toString(b) + &quot;\n&quot; }); return c.substring(0, c.length) }; function vb(a) { this.a = a } function wb(a) { for(var b, c = []; ;) { Y(a, &quot;Missing right hand side of binary expression.&quot;); b = xb(a); var d = G(a.a); if(!d) break; var e = (d = Ya[d] || k) &amp;&amp; d.p; if(!e) { a.a.a--; break } for(; c.length &amp;&amp; e &lt;= c[c.length - 1].p;) b = new Va(c.pop(), c.pop(), b); c.push(b, d) } for(; c.length;) b = new Va(c.pop(), c.pop(), b); return b } function Y(a, b) { a.a.b.length &lt;= a.a.a &amp;&amp; h(Error(b)) } function yb(a, b) { var c = G(a.a); c != b &amp;&amp; h(Error(&quot;Bad token, expected: &quot; + b + &quot; got: &quot; + c)) }</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">zb</span>(<span class="pl-smi">a</span>) { a <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> a <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Bad token: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> a)) } <span class="pl-k">function</span> <span class="pl-en">Ab</span>(<span class="pl-smi">a</span>) { a <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-c1">2</span> <span class="pl-k">&gt;</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unclosed literal string<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">eb</span>(a) } <span class="pl-k">function</span> <span class="pl-en">Bb</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>, <span class="pl-c1">1</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>, <span class="pl-c1">2</span>) <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">L</span>(<span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">+</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">+</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">L</span>(<span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) }</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Cb</span>(<span class="pl-smi">a</span>)</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> b, c <span class="pl-k">=</span> [], d; <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) { b <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); d <span class="pl-k">=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> b <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-smi">b</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span>(?!<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span>)<span class="pl-c1">[<span class="pl-c1">\w</span>]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(d))) <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">ib</span>; d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ib</span>; <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing next location step.<span class="pl-pds">&quot;</span></span>); b <span class="pl-k">=</span> <span class="pl-en">Db</span>(a, b); <span class="pl-smi">c</span>.<span class="pl-c1">push</span>(b) } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">            a<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">                b <span class="pl-k">=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); d <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>); <span class="pl-k">switch</span>(d)</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">                {</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>$<span class="pl-pds">&quot;</span></span>: <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Variable reference not allowed in HTML XPath<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span>: <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); b <span class="pl-k">=</span> <span class="pl-en">wb</span>(a); <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&#39;</span>unclosed &quot;(&quot;<span class="pl-pds">&#39;</span></span>); <span class="pl-en">yb</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>); <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>: <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>: b <span class="pl-k">=</span> <span class="pl-en">Ab</span>(a); <span class="pl-k">break</span>; <span class="pl-k">default</span>: <span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(<span class="pl-k">+</span>b)) <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-en">db</span>(b) <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span>(?!<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span>)<span class="pl-c1">[<span class="pl-c1">\w</span>]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(d) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>, <span class="pl-c1">1</span>)) { b <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); b <span class="pl-k">=</span> cb[b] <span class="pl-k">||</span> k; <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-k">for</span>(d <span class="pl-k">=</span> []; <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) ;) { <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing function argument list.<span class="pl-pds">&quot;</span></span>); <span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-en">wb</span>(a)); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) <span class="pl-k">break</span>; <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) } <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Unclosed function argument list.<span class="pl-pds">&quot;</span></span>); <span class="pl-en">zb</span>(a); b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ab</span>(b, d) } <span class="pl-k">else</span> { b <span class="pl-k">=</span> k; <span class="pl-k">break</span> a } <span class="pl-k">else</span> b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">fb</span>(<span class="pl-k">+</span><span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>))</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">                } <span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">&amp;&amp;</span> (d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">mb</span>(<span class="pl-en">Eb</span>(a)), b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Za</span>(b, d))</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">if</span>(b) <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) d <span class="pl-k">=</span> b; <span class="pl-k">else</span> <span class="pl-k">return</span> b; <span class="pl-k">else</span> b <span class="pl-k">=</span> <span class="pl-en">Db</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>), d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">jb</span>, <span class="pl-smi">c</span>.<span class="pl-c1">push</span>(b)</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">for</span>(; <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) ;) b <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing next location step.<span class="pl-pds">&quot;</span></span>), b <span class="pl-k">=</span> <span class="pl-en">Db</span>(a, b), <span class="pl-smi">c</span>.<span class="pl-c1">push</span>(b); <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">gb</span>(d, c)</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Db</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>)</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> c, d, e; <span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Step op should be &quot;/&quot; or &quot;//&quot;<span class="pl-pds">&#39;</span></span>)); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) <span class="pl-k">return</span> d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">W</span>(sb, <span class="pl-k">new</span> <span class="pl-en">N</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>node<span class="pl-pds">&quot;</span></span>)), <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), d; <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) <span class="pl-k">return</span> d <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">W</span>(rb, <span class="pl-k">new</span> <span class="pl-en">N</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>node<span class="pl-pds">&quot;</span></span>)), <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), d; <span class="pl-k">var</span> f; <span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) <span class="pl-k">?</span> (f <span class="pl-k">=</span> hb, <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing attribute name<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>::<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>, <span class="pl-c1">1</span>) <span class="pl-k">?</span> (<span class="pl-sr"><span class="pl-pds">/</span>(?!<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span>)<span class="pl-c1">[<span class="pl-c1">\w</span>]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>).<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)) <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Bad token: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>))), e <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), (f <span class="pl-k">=</span> qb[e] <span class="pl-k">||</span> k) <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No axis with name: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> e)), <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing node name<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">:</span> f <span class="pl-k">=</span> nb; e <span class="pl-k">=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?!<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span>)<span class="pl-c1">[<span class="pl-c1">\w</span>]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">e</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>))) <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>,</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">1</span>)) { <span class="pl-en">db</span>(e) <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid node type: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> e)); c <span class="pl-k">=</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-en">db</span>(c) <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid type name: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> c)); <span class="pl-en">yb</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span>); <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Bad nodetype<span class="pl-pds">&quot;</span></span>); e <span class="pl-k">=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>).<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>); <span class="pl-k">var</span> g <span class="pl-k">=</span> k; <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">==</span> e <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> e) g <span class="pl-k">=</span> <span class="pl-en">Ab</span>(a); <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Bad nodetype<span class="pl-pds">&quot;</span></span>); <span class="pl-en">zb</span>(a); c <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">N</span>(c, g) } <span class="pl-k">else</span> c <span class="pl-k">=</span> <span class="pl-en">Bb</span>(a); <span class="pl-k">else</span> <span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> e <span class="pl-k">?</span> c <span class="pl-k">=</span> <span class="pl-en">Bb</span>(a) <span class="pl-k">:</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Bad token: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>))); e <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">mb</span>(<span class="pl-en">Eb</span>(a), <span class="pl-smi">f</span>.<span class="pl-smi">a</span>); <span class="pl-k">return</span> d <span class="pl-k">||</span> <span class="pl-k">new</span> <span class="pl-en">W</span>(f, c, e, <span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> b)</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">function</span> <span class="pl-en">Eb</span>(<span class="pl-smi">a</span>) { <span class="pl-k">for</span>(<span class="pl-k">var</span> b <span class="pl-k">=</span> []; <span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) ;) { <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>); <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing predicate expression.<span class="pl-pds">&quot;</span></span>); <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-en">wb</span>(a); <span class="pl-smi">b</span>.<span class="pl-c1">push</span>(c); <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Unclosed predicate expression.<span class="pl-pds">&quot;</span></span>); <span class="pl-en">yb</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>) } <span class="pl-k">return</span> b }</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">xb</span>(<span class="pl-smi">a</span>) { <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) <span class="pl-k">return</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>), <span class="pl-k">new</span> <span class="pl-en">tb</span>(<span class="pl-en">xb</span>(a)); <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-en">Cb</span>(a); <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-en">F</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>)) a <span class="pl-k">=</span> b; <span class="pl-k">else</span> { <span class="pl-k">for</span>(b <span class="pl-k">=</span> [b]; <span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-en">G</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>) ;) <span class="pl-en">Y</span>(a, <span class="pl-s"><span class="pl-pds">&quot;</span>Missing next union location path.<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">b</span>.<span class="pl-c1">push</span>(<span class="pl-en">Cb</span>(a)); <span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-smi">a</span><span class="pl-k">--</span>; a <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ub</span>(b) } <span class="pl-k">return</span> a }; <span class="pl-k">function</span> <span class="pl-en">Fb</span>(<span class="pl-smi">a</span>) { <span class="pl-smi">a</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Empty XPath expression.<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">for</span>(<span class="pl-k">var</span> a <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">match</span>(Ga), b <span class="pl-k">=</span> <span class="pl-c1">0</span>; b <span class="pl-k">&lt;</span> <span class="pl-smi">a</span>.<span class="pl-c1">length</span>; b<span class="pl-k">++</span>) <span class="pl-smi">Ha</span>.<span class="pl-c1">test</span>(a[b]) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">a</span>.<span class="pl-c1">splice</span>(b, <span class="pl-c1">1</span>); a <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Fa</span>(a); <span class="pl-smi">a</span>.<span class="pl-smi">b</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Invalid XPath expression.<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-en">wb</span>(<span class="pl-k">new</span> <span class="pl-en">vb</span>(a)); <span class="pl-smi">a</span>.<span class="pl-smi">b</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;=</span> <span class="pl-smi">a</span>.<span class="pl-smi">a</span> <span class="pl-k">||</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Bad token: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">G</span>(a))); <span class="pl-c1">this</span>.<span class="pl-en">evaluate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-en">a</span>(<span class="pl-k">new</span> <span class="pl-en">A</span>(a)); <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Z</span>(f, b) } }</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">Z</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>)</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">0</span> <span class="pl-k">==</span> b <span class="pl-k">&amp;&amp;</span> (a <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> b <span class="pl-k">=</span> <span class="pl-c1">4</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> a <span class="pl-k">?</span> b <span class="pl-k">=</span> <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> a <span class="pl-k">?</span> b <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> a <span class="pl-k">?</span> b <span class="pl-k">=</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unexpected evaluation result.<span class="pl-pds">&quot;</span></span>))); <span class="pl-c1">2</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">1</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">3</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(a <span class="pl-k">instanceof</span> <span class="pl-c1">K</span>)) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>value could not be converted to the specified type<span class="pl-pds">&quot;</span></span>)); <span class="pl-c1">this</span>.<span class="pl-smi">resultType</span> <span class="pl-k">=</span> b; <span class="pl-k">var</span> c; <span class="pl-k">switch</span>(b)</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span>: <span class="pl-c1">this</span>.<span class="pl-smi">stringValue</span> <span class="pl-k">=</span> a <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-en">Ta</span>(a) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> a; <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-c1">1</span>: <span class="pl-c1">this</span>.<span class="pl-smi">numberValue</span> <span class="pl-k">=</span> a <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-k">+</span><span class="pl-en">Ta</span>(a) <span class="pl-k">:</span> <span class="pl-k">+</span>a; <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-c1">3</span>: <span class="pl-c1">this</span>.<span class="pl-smi">booleanValue</span> <span class="pl-k">=</span> a <span class="pl-k">instanceof</span> <span class="pl-c1">K</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">&lt;</span> <span class="pl-smi">a</span>.<span class="pl-smi">i</span> <span class="pl-k">:</span> <span class="pl-k">!!</span>a; <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-c1">4</span>: <span class="pl-k">case</span> <span class="pl-c1">5</span>: <span class="pl-k">case</span> <span class="pl-c1">6</span>: <span class="pl-k">case</span> <span class="pl-c1">7</span>: <span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-en">O</span>(a); c <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span>(<span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-en">P</span>(d) ; e; e <span class="pl-k">=</span> <span class="pl-en">P</span>(d)) <span class="pl-smi">c</span>.<span class="pl-c1">push</span>(e <span class="pl-k">instanceof</span> <span class="pl-c1">E</span> <span class="pl-k">?</span> <span class="pl-smi">e</span>.<span class="pl-smi">a</span> <span class="pl-k">:</span> e); <span class="pl-c1">this</span>.<span class="pl-smi">snapshotLength</span> <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">i</span>; <span class="pl-c1">this</span>.<span class="pl-smi">invalidIteratorState</span> <span class="pl-k">=</span> l; <span class="pl-k">break</span>; <span class="pl-k">case</span> <span class="pl-c1">8</span>: <span class="pl-k">case</span> <span class="pl-c1">9</span>: d <span class="pl-k">=</span> <span class="pl-en">Sa</span>(a); <span class="pl-c1">this</span>.<span class="pl-smi">singleNodeValue</span> <span class="pl-k">=</span> d <span class="pl-k">instanceof</span> <span class="pl-c1">E</span> <span class="pl-k">?</span> <span class="pl-smi">d</span>.<span class="pl-smi">a</span> <span class="pl-k">:</span> d; <span class="pl-k">break</span>; <span class="pl-k">default</span>: <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Unknown XPathResult type.<span class="pl-pds">&quot;</span></span>))</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-c1">0</span>; <span class="pl-c1">this</span>.<span class="pl-en">iterateNext</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-c1">4</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">5</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>iterateNext called with wrong result type<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">return</span> f <span class="pl-k">&gt;=</span> <span class="pl-smi">c</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> k <span class="pl-k">:</span> c[f<span class="pl-k">++</span>] }; <span class="pl-c1">this</span>.<span class="pl-en">snapshotItem</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-c1">6</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">7</span> <span class="pl-k">!=</span> b <span class="pl-k">&amp;&amp;</span> <span class="pl-en">h</span>(<span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>snapshotItem called with wrong result type<span class="pl-pds">&quot;</span></span>)); <span class="pl-k">return</span> a <span class="pl-k">&gt;=</span> <span class="pl-smi">c</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-c1">0</span> <span class="pl-k">&gt;</span> a <span class="pl-k">?</span> k <span class="pl-k">:</span> c[a] }</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">    } <span class="pl-c1">Z</span>.<span class="pl-c1">ANY_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Z</span>.<span class="pl-c1">NUMBER_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">STRING_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">2</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">BOOLEAN_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">3</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">UNORDERED_NODE_ITERATOR_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">4</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">ORDERED_NODE_ITERATOR_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">5</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">UNORDERED_NODE_SNAPSHOT_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">6</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">ORDERED_NODE_SNAPSHOT_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">7</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">ANY_UNORDERED_NODE_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">8</span>; <span class="pl-c1">Z</span>.<span class="pl-c1">FIRST_ORDERED_NODE_TYPE</span> <span class="pl-k">=</span> <span class="pl-c1">9</span>; <span class="pl-k">function</span> <span class="pl-en">Gb</span>(<span class="pl-smi">a</span>) { <span class="pl-k">var</span> a <span class="pl-k">=</span> a <span class="pl-k">||</span> n, b <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-smi">document</span>; <span class="pl-smi">b</span>.<span class="pl-smi">evaluate</span> <span class="pl-k">||</span> (<span class="pl-smi">a</span>.<span class="pl-smi">XPathResult</span> <span class="pl-k">=</span> <span class="pl-c1">Z</span>, <span class="pl-smi">b</span>.<span class="pl-en">evaluate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">e</span>, <span class="pl-smi">f</span>) { <span class="pl-k">return</span> (<span class="pl-k">new</span> <span class="pl-en">Fb</span>(a)).<span class="pl-c1">evaluate</span>(b, f) }, <span class="pl-smi">b</span>.<span class="pl-en">createExpression</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Fb</span>(a) }) } <span class="pl-k">var</span> Hb <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>wgxpath<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>install<span class="pl-pds">&quot;</span></span>], $ <span class="pl-k">=</span> n; <span class="pl-k">!</span>(Hb[<span class="pl-c1">0</span>] <span class="pl-k">in</span> $) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-smi">execScript</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-c1">execScript</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>var <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> Hb[<span class="pl-c1">0</span>]); <span class="pl-k">for</span>(<span class="pl-k">var</span> Ib; <span class="pl-smi">Hb</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> (Ib <span class="pl-k">=</span> <span class="pl-smi">Hb</span>.<span class="pl-c1">shift</span>()) ;) <span class="pl-k">!</span><span class="pl-smi">Hb</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> Gb <span class="pl-k">!==</span> i <span class="pl-k">?</span> $[Ib] <span class="pl-k">=</span> Gb <span class="pl-k">:</span> $ <span class="pl-k">=</span> $[Ib] <span class="pl-k">?</span> $[Ib] <span class="pl-k">:</span> $[Ib] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">})()</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/blame/f05e2475c0fc2d7ab2382ab23471596b6c582333/QuickBaseClient.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/QuickbaseAdmirer/Quickbase-JavaScript-SDK/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.65271s from unicorn-846d5749f9-nrbvc">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-munE9dNLI0m3pEuNvjoQ8yUQPQuAU2ERx7YI54vEL0SqY7xa6rwJfB7m+mt7N9uXSShm+/8OjEDMWNeNXYA6aQ==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-6b1e5c0082cc318bd85fc3f598b31949.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-/QPj6eAuzBgBj+8HD3+5S7yISM5SDwpatxxwtOuhAqjqBtGmjMoy4GxaXM5+bw7j8EhMv8ElHlSWfPaz9z5XjQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-073fa2a62c3898fcaed22cc78d9a340e.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

