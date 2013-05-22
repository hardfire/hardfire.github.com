---
author: avinash
comments: true
date: 2013-03-18 08:13:02
layout: post
slug: the-web-is-the-platform
title: The web is the platform
tags:
- b2g
- indexedDB
- localStorage
- mobile app
- offline website
---

I have had the itch of developing a "mobile application"(with finger quotes) since quite some time now. But, the thought of learning Java or Objective C kept me waiting. With B2G, came new hopes and the idea to write your mobile applications with only web technologies. Wow, doesn't that sound awesome :D

![Main Screen of the App](http://blog.avinash.com.np/wp-content/uploads/2013/03/shot.png)

Procrastination is what i do best, so I installed B2G Desktop, [r2d2b2g](http://people.mozilla.com/~myk/r2d2b2g/)(B2G Emulator for firefox), Firefox Nightly and waited for more than a couple of months to even start writing an application. Finally, last week, the dawn had come, a new day had started (:-P). Yes, I started writing an application for B2G. Out of all the awesome ideas, I wanted a proper loadShedding application in the browser, that i could open anytime and see the timings. 3 days of hard work, and numerous keystrokes later, the application was ready for showtime. Here is a link to the application [online](http://avinash.me/losh) (works only in firefox). You can [install](http://avinash.me/losh/i.html) it as an "open web app" too  .

![Changing groups, just a tap away](http://blog.avinash.com.np/wp-content/uploads/2013/03/shot2.png)



This application uses angular.js (and B2G building blocks) on the front end and nothing on the backend :-P. The source is on [github](http://github.com/hardfire/losh) and i look forward to some "pull requests" and "stars".



## I want to make an app too, how do i start ?



Well, I am glad you asked. If you are already a web developer, tighten your belts, open your favourite text editor, push some keystrokes of awesomeness, make it responsive and at the end of it write a [manifest file ](https://developer.mozilla.org/en/docs/Apps/Manifest). You are done and good to go. Yes, believe me, it's that easy. If you want the app to work offline, use [appcache](http://www.html5rocks.com/en/tutorials/appcache/beginner/) to save your assets offline and [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB) or[ LocalStorage ](https://developer.mozilla.org/en-US/docs/DOM/Storage#localStorage) ([another nice article](https://hacks.mozilla.org/2009/06/localstorage/)) to save your data. After this app, one thing that i can suggest is to design your app for offline first and then sync your data later. I started the other way round and had to take care of a lot of stuff at the end, which made no sense then, and some bugs were introduced because of that too.

If this is not enough to get you started, a [comprehensive guide](https://developer.mozilla.org/en-US/docs/Apps/Developing) is available on MDN



##  It's still a web-app, how do i connect to the device 



I knew that was coming, [WebAPIs](https://developer.mozilla.org/en-US/docs/WebAPI) is what you are looking for. It is still a work in progress and lots of tutorials are available on [MozHacks](https://hacks.mozilla.org/)

That's all for now. Go and make something awesome and it has been validated that **"THE WEB IS THE PLATFORM"**
![Funny thing, it even works on osx like a native app, should work on windows and linux too ](http://blog.avinash.com.np/wp-content/uploads/2013/03/screen.jpg)
