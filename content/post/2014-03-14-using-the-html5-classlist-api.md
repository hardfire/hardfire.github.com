---
layout: post
title: "Using the HTML5 classList API"
description: ""
category: 
tags: []
date: 2014-03-14
comments: true
---
Recently while i was working on a dashboard widget, I planned not to use any JavaScript library but just plain ol' vanilla JavaScript. At one point I had to check if an element was shown or not. This was controlled using a CSS class and all that the basic API had returned a string of the classes of an element and one had to control it using string manipulation. Having read stuff about the classList API sometime in the past, I decided to have a look.

## What is this classList API
As the name suggests it returns a list of all the classes of an element. For example
{{< gist hardfire 9551408 "classList.js" >}}

## The API
With the list comes a very nice list of API methods. Most interesting of them are

- add() - adds a classs
- remove() - removes a class
- contains() - returns if a class exists
- toggle() - toggles a class (good for adding/removing hidden class)

Well, that's just to introduce the API and for me to check in case it doesn't catch up and I forget about it. Its a pretty simple API but makes life way easier if you're using plain JS.

### Few good links
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList)
- [HTML5 Doctor](http://html5doctor.com/the-classlist-api/)
- [David Walsh Blog](http://davidwalsh.name/classlist)
