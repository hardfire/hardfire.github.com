---
layout: post
title: "Setting the right context on delay (backbone/underscore)"
description: ""
category: 
date: 2013-11-23
comments: true
tags: [ "backbone", "javascript", "underscore"]
aliases:
  - 2013/11/23/setting-the-right-context-on-delay-backboneunderscore.html
---


I have been working on a backbone based project recently and had a situation where i wanted an event to emit only once that too with some restrictions. The way I thought to do it was to do it with an dealy and clearTimeout when required by the state of the application. Everything was fine untill i figured out that the function passed to `_.delay` doesnt bind to `this` like the rest of backbone application does, generally. 

This is how I solved it, thanks to this [issue](https://github.com/jashkenas/underscore/issues/494) on github.

{{< gist hardfire 7618222 "backbone-delay-context.js" >}}

Will keep posting on more findings, good to look back when i forget :D
