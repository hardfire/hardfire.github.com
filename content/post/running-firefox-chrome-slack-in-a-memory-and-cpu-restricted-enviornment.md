+++
date = 2020-09-02T08:25:32Z
draft = true
tags = ["systemd", " linux"]
title = "Running Firefox/Chrome/Slack in a memory and cpu restricted enviornment"

+++
![](/images/container.jpg)  
The problem is clear. **Web browsers are resource hogs**. They run well on 2G of RAM and run well on 8G of RAM. The side effect being whole RAM is used, and CPU and everything that is available.

I've spent multiple hours in the last years trying to have a setup where i could limit Memory and CPU of browser processes. I had a [decent setup](https://gist.github.com/hardfire/7e5d9e7ce218dcf2f510329c16517331) using `cgconfig` and it used to work well until the last year. At some point I had to switch from my desktop to laptop (damn you covid-19) and realized that I didnt' have this setup. For some reason I couldn't get this setup to run on ubuntu 20.04 and when it did run the browser startup took ages. And, when it did start, everything was insanely slow. Long story short, My decently complicated setup didn't run anymore and I had two options now, dig deeper into my current solution to figure out what was causing the issue or find an alternative.