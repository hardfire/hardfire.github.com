---
layout: post
title: "deployd stuck on starting deployd v0.6.xx.. OSX [fix]"
description: ""
category: 
tags: ["nodejs","deployd"]
date: 2014-03-19
comments: true
---

## The Problemo

Yesterday I was checking [deployd](http://deployd.com) and wanted to try it out. Doing as the docs said, when I to started deployd It stuck on `starting deployd v0.6.10...`

##The Fixo

After going through the issues on github i finally found [this](https://github.com/deployd/deployd/issues/98) old-ish similar issue which was still unresolved. To solve it start `monogd` as a seperate process and run deployd as `dpd -P 27017 -H localhost -n testing-deployd -d`

If you have a fix for the issue, dont feel shy to send a pull request or comment on the thread. Everyone loves contributions :D
