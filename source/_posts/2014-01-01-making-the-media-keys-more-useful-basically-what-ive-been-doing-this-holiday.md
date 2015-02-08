---
layout: post
title: "Making the media keys more useful, basically what I've been doing this holiday"
description: ""
category: 
tags: ["javascript","firefox","spotify","plugin","media-keys"]
date: 2014-01-01
comments: true
---

### A little Context *(is always better)*
It all started with me getting very used to the spotify web player and for some weird reason never using the desktop player. For some reason, if I can do something (effectively) in the browser, I try to do it in the browser. I must say that the browser based web players are getting really sophisticated and amazing but very quickly I started missing the ease of using the media keys in my latop. I didnt want to go between a stack of browser windows and a heap of browser tabs and find that one tab which was playing the song, plus who wants to do that when you've already seen the better part :D

### The plan, that was
Well, the plan was eithe search for a plugin or gear up and code a quick one hour firefox plugin that would grab the key press event for the media keys and then find the spotify tab and pause/play it depending on the situation. That one line shows how naive and prepared I was for this.

### The obvious problem(s) in the plan
1. Sadly, the media keys don't emit the keyPress event in browsers :'(
1. This solution would not be global and would mostly work in the context of the browser (which i could have lived with, if it worked atleast)

### What i ended up doing
The soluton consists of two parts, one is a server that grabs the media key events and broadcasts it over a websocket server and the other is a firefox plugin that connects to the websockets server and basically does the magic. Turns out grabbing the media keys (in the server) was not really a piece of cake, but a good learning process as I eventually had to read about Objective C and the Foundation framework, but eventualy wrote a node application that internally does the ObjC Black Magic 
>[Atwoods Law](http://www.codinghorror.com/blog/2007/07/the-principle-of-least-power.html) : any application that can be written in JavaScript, will eventually be written in JavaScript.

Coming to the plugin, I was a little adventorous and decided to write it without the SDK but i soon hit a wall when I figured out that connecting to websocket server from a plugin is not that simple as you dont have the context and basically following a stackoverflow answer I learned that you do it by creating a hidden page and then do it from there. Luckily, SDK has page-workers which is perfectly made for this so long story short, I used the SDK :D

### Pre-Conlusion
The plugin works and It has been extended to work with saavn, gaana and soundcloud. 

### Things on the top of my head
1. As of now it doesn't prefer between the services and finds the first tab that matches one of the sites. It has not been much of a problem as I keep one site open at a time. 
1. Another thing that I would like to change is to bundle the server with the plugin but then it would make it a little bulky as i would like only one instance of the server running even if multiple browsers are open (maybe use locks) and basically make sure if the browser close and other services are listening to it, the server shouldn't exit.
1. Yesterday i was away from my laptop and wanted to control the player, since we have a server tht listens to the keys it would not be hard to make them emit it :D 
1. Extend this to work for windows and linux only if someone would actually be using it, as of now it works perfectly on my macbook.

### Conclusion
The source is on [github](https://github.com/hardfire/mekespo) (please give it some love :D) and if one would like to contribute/change I would love pull requests. If you are experienced, are a pro, have a different Idea, think i am a fool and could have done this easily, please do let me know, I am open to learning too.
> First do it, then do it right, then do it better - I heard it from [Addy Osmani](http://addyosmani.com/blog/)
