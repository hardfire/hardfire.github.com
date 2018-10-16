---
title: The HTML <base> element
date: 2018-01-11 10:48:57
tags:
  - HTML
aliases:
  - 2018/01/11/html-base-element
---

**#TIL**

I usually like to look at the HTML of web pages that get delivered to my browser window. Today, I noticed that all assets that were loaded relatively came from a different URL. Interesting huh! * OMG!! How did they do thaatt??*

HTML has a `<base>` tag that specifies the base URL for all relative links in a web page. Well thought through, right? Definitely.


{{< highlight html "linenos=table" >}}
<base href="base-path">
<link rel="stylesheet" href="css/main.css">
{{< / highlight >}}

In this case, the `css/main.css` would resolve to `base-path/css/main.css`. Nifty!

Wait, there's more! the `<base>` tag can define what `target` links would generally open in. So, next time you want all links to open in a new tab, don't mess with all links but instead add the following to the `<head>`

{{< highlight html "linenos=table" >}}
<base target="_blank">
{{< / highlight >}}

Check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) docs for more details.

Fin. Das ist alles.
