title: git clone in a slow connection
date: 2016-11-15 10:06:40
tags:
---

It happens more often than not, I am on a slow internet connection and I have to clone a decently-huge git repository. The most common issue is the connection closes and the whole clone is cancelled.

{% codeblock %}
Cloning into 'large-repository'...
remote: Counting objects: 20248, done.
remote: Compressing objects: 100% (10204/10204), done.
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
{% endcodeblock %}

After a lot of trial and errors and a lot of "remote end hung up unexpectedly" I have a way that works for me. The idea is to do a shallow clone first and then update the repositroy with its history.

{% codeblock %}
$ git clone http://github.com/large-repository --depth 1
$ cd large-repository
$ git fetch --unshallow
{% endcodeblock %}

And, that's all folks
