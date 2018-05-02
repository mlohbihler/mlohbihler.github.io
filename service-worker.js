"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2d12a073613debd1e9457ddffc284c17"],["/static/css/main.369d951e.css","833b0a27356cf2238fb8075255b80343"],["/static/js/main.060e9324.js","69d6ae3ee8ecf7047f677db180d7c913"],["/static/media/arb.19188317.png","19188317c982c2ae48af350ff7755f37"],["/static/media/coming-soon.25b23604.jpg","25b23604b38797579e9b193dcf84ae85"],["/static/media/espejo-infinito_619.731234d3.jpg","731234d309e0ed5bf2d420dfd87bf07c"],["/static/media/hackerrank.324f8f46.png","324f8f467320cba6f524a9c5defdf78a"],["/static/media/konva-graphics.58921c96.png","58921c967e0354db3fd2470af47fe06f"],["/static/media/manfred-guts.f87a2ea2.jpg","f87a2ea2461f4e849f38d73c775bac42"],["/static/media/manfred-hero.40a7900b.jpg","40a7900b8ab64a7268dfd4e09ec5e2bd"],["/static/media/manfred-ultra.e67626fd.jpg","e67626fd230ca868675ff570f2598860"],["/static/media/mannabase.1eba2cc3.png","1eba2cc319705475739950c70b5a1f43"],["/static/media/rocks-hero.a7cfb3e9.jpg","a7cfb3e9849674e92f8ce5a31764f90c"],["/static/media/rocks-tall.e5497584.jpg","e54975844db62b4e8896943293fc3937"],["/static/media/rocks-wide.ec5b8df6.jpg","ec5b8df66dcf0225666533e3ed6a0d60"],["/static/media/sudoku.ec7468d5.jpg","ec7468d51407a07a4681dad2551f7e65"],["/static/media/worm.f388a247.png","f388a247c83074aa9cbe6b2abc2631f8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});