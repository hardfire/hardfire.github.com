+++
date = 2020-07-01T13:20:15Z
draft = true
tags = ["css", "flex", "grid"]
title = "TIL: CSS `display-contents`"

+++
## The Problem

I've been playing around a lot with `flexbox` and `css-grid` in the last days. One of the problem that I commonly run into is when an element group has a wrapper and the wrapper is contained in a `flex` or a `grid` block. The easiest way to fix an issue like this is to assign the wrapper a `display:flex` (or `grid`). It's really easy to do that, but whenever I do this, I hear sounds that says "It's a hack", "This is not clean".  
  
I generally have this issue when working on a WordPress theme or a template.   
  
## display-contents to the resuce

The solution to an issue like this is to add the style `display:contents` to the wrapper element. It makes the children appear to be direct children on the parent. The wrapper element will "disappear".    
  
## Can I use ?

`display:contents`is [supported](https://caniuse.com/#feat=css-display-contents) in number of browsers at the moment. MDN says its "experimental". I say, go for it. I've been using this in cases where if it was not supported, the design would still not look ugly.