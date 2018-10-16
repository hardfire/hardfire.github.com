---
title: 'AMP, WordPress and amp-form'
date: 2017-12-31 10:59:00
tags:
  - wordpress
  - amp
aliases:
  - 2017/12/31/AMP-Wordpress-and-amp-form.html
---

Now that google is pushing AMP a lot, it has been one of the better ways to attract some organic traffic.  In one of my recent projects we had to setup a signup form on the AMP pages. We use `AMP for WP` (a very well done plugin btw) but wanted to try adding the form ourselves, instead of purchasing one of their paid plugins (Which would be the easier way, but one must get their hands dirty to understand).

The whole thing can be broken down into the following steps
  - Setup
  - Render the form
  - Process the form
  - Fun and Profit

### Setup
To use amp-form we should add the following JavaScript file in the `head`
{{< highlight html "linenos=table" >}}
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
{{< / highlight >}}

### Render the form
Since we already use the `ampforwp` plugin and we want to render a form after every article, we hook into the `ampforwp_after_post_content` action. I did try adding html into a widget, but it never got rendered for some reason. I still have to get into why it happened. But then, I had a problem to solve.

Add something like this to your `functions.php`

{{< highlight php "linenos=table" >}}
...

function namespace_add_amp_form($amp_template) {
  $post_url = admin_url('admin-ajax.php?action=amp_form_submit');
  echo '<form name="amp-form" class="hide-inputs" method="post" action-xhr="'.$post_url.'" target="_top">
    <input type="email" name="email" placeholder="email" required>
    <input type="submit" value="Make me Famous" />
    <div submit-success> Yep, you will be famous!! soon. </div>
  </form>';
}
add_action('ampforwp_after_post_content', 'namespace_add_amp_form');

...
{{< / highlight >}}

### Process the form
Most of the form processing is straightforward. The only complication is that `amp` does some magic which requires us to handle cross origin requests and respond in a manner so that they can accept and process the response. [More details here](https://github.com/ampproject/amphtml/blob/master/spec/amp-cors-requests.md)

I didn't handle all the cases, but what we have below is a version that accepts the form submission and our frontend handles it perfectly.


{{< highlight php "linenos=table" >}}
...

function namespace_handle_amp_form_submit() {
  if(!isset($_GET['__amp_source_origin']) || $_GET['__amp_source_origin'] != "https://avinash.com.np")
    die();

  header("Access-Control-Allow-Credentials: true");
  header("AMP-Access-Control-Allow-Source-Origin: https://avinash.com.np");
  header("Access-Control-Allow-Origin: https://avinash-com-np.cdn.ampproject.org");
  header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin");

  // handle the form submission here
  handle_form_submission()
}
add_action("wp_ajax_amp_form_submit", "namespace_handle_amp_form_submit");
add_action("wp_ajax_nopriv_amp_form_submit", "namespace_handle_amp_form_submit");

...
{{< / highlight >}}

### Fun and Profit
Once this works, I'm pretty sure it will be fun. Profit, well, lets hope google's organic traffic should bring some profit as well :D


If everything is not clear, please read about [AJAX in WordPress](https://codex.wordpress.org/AJAX_in_Plugins) and [amp-form](https://www.ampproject.org/docs/reference/components/amp-form). In case you're still stuck, please reach out to me and I'd be more than happy to help (for fun and profit).
