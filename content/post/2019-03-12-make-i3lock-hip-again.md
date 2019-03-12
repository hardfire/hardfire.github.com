---
title: Make i3lock hip again
date: 2019-03-12T15:12:19.713Z
images:
  - ''
tags:
  - i3
  - i3lock
---
I have been using the [i3 window manager](https://i3wm.org) for almost 7-8 months now and I really like the peace that comes with it. Its a tiling window manager which (in some way) pushes one to have a more managed workspace. 

Sharing my i3 configuration is probably a post of its own, but today I want to share my i3lock wrapper script. Generally i3lock locks the screen and puts a white wallpaper (rathar ugly white wallpaper). The script below takes a screenshot of the screen, blurs it and then uses it as a lock screen wallpaper. It gives a pretty cool effect

{{< highlight bash "linenos=table" >}}
#!/bin/bash

# take the current screenshot
scrot/tmp/screen_locked.png

# add blur to the image
convert /tmp/screen_locked.png -blur 0x8 /tmp/screen_locked_blurred.png

# delete the original image, we dont want anyone looking at this
rm /tmp/screen_locked.png

# lock the screen
i3lock -i /tmp/screen_locked_blurred.png
{{< / highlight >}}

Adding this script to the path and binding it with a key combination (`$mod + shift + ctrl + l` in my case) makes life quite easy.

The keybinding can be added to `~/.config/i3/config` file as follows

{{< highlight bash "linenos=table" >}}
bindsym $mod+Ctrl+Shift+l exec "lock" # lock is the script from earlier
{{< / highlight >}}
