+++
date = 2020-09-02T08:25:32Z
tags = ["systemd", " linux"]
title = "Running Firefox/Chrome/Slack in a memory and cpu restricted enviornment"

+++
![](/images/container.jpg)  
The problem is clear. **Web browsers are resource hogs**. They run well on 2G of RAM and run well on 8G of RAM. The side effect being whole RAM is used, and CPU and everything that is available.

## using cgconfig

I've spent multiple hours in the last years trying to have a setup where i could limit Memory and CPU of browser processes. I had a [decent setup](https://gist.github.com/hardfire/7e5d9e7ce218dcf2f510329c16517331) using `cgconfig` and it used to work well until the last year. At some point I had to switch from my desktop to laptop (damn you covid-19) and realized that I didnt' have this setup. For some reason I couldn't get this setup to run on ubuntu 20.04 and when it did run the browser startup took ages. And, when it did start, everything was insanely slow. Long story short, My decently complicated setup didn't run anymore and I had two options now, dig deeper into my current solution to figure out what was causing the issue or find an alternative.

## using systemd-run

While reading more about control groups on linux i came across the sytemd-run command which did exactly what we wanted. The benefit being its comparatively easier to run and the user experience is much better.

I currently use the following command to run my "javascript machines" :D

`systemd-run --scope -p MemoryLimit=1G -p CPUQuota=25% --user firerfox`

Here, `firefox` is the command that needs to be run. The other options help to define the resources the app needs to have.

The `--scope` tells systemd that we want this app to run in a scope of its own. I think, systemd then creates this scope and assigns the resource controls to the specific scope.

We can use this command to run a `malicious` app without giving any network/filesystem access. The possibilities are endless.

## Next

As of now, there are two things that i don't like. First, i want to limit filesystem access to my browsers so that they can only write to the "Downloads" folders. Second, i want to create these scope files \[1\] and put everything in a configuration.

## Reading

\[1\] [https://www.freedesktop.org/software/systemd/man/systemd.scope.html](https://www.freedesktop.org/software/systemd/man/systemd.scope.html "https://www.freedesktop.org/software/systemd/man/systemd.scope.html")

\[2\] [https://www.freedesktop.org/wiki/Software/systemd/ControlGroupInterface/](https://www.freedesktop.org/wiki/Software/systemd/ControlGroupInterface/ "https://www.freedesktop.org/wiki/Software/systemd/ControlGroupInterface/")  
Note: Exactly our problem. _"I want to make use of kernel cgroups, how do I do this in the new world order?"_

\[3\] [https://www.freedesktop.org/software/systemd/man/systemd.resource-control.html](https://www.freedesktop.org/software/systemd/man/systemd.resource-control.html# "https://www.freedesktop.org/software/systemd/man/systemd.resource-control.html#")