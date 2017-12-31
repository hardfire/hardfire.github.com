title: 'AMP, WordPress and amp-form'
date: 2017-12-31 10:59:00
tags:
---

Now that google is pushing AMP a lot, it has been one of the better ways to attract some organic traffic.  In one of my recent projects we had to setup a signup form on the AMP pages. We use `AMP for WP` (a very well done plugin btw) but wanted to try adding the form ourselves, instead of purchasing one of their paid plugins (Which would be the easier way, but one must get their hands dirty to understand).

The whole thing can be broken down into the following steps
  - Setup
  - Render the form
  - Process the form
  - Fun and Profit

### Setup
To use amp-form we should add the following JavaScript file in the `head`
```
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
```

(... more details coming soon) __on the works__
