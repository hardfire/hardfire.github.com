+++
date = 2020-09-17T09:07:34Z
draft = true
tags = ["git", "git alias"]
title = "Git aliases for better productivity"

+++
Ok, so you've figured out a workflow with git and use it on a daily basis to get work done. Happily minding your own business pushing things and pulling some other things. I was there some years back when I realized that i could optimize my workflow. Over the years, I have collected number of git aliases which makes me better at git (PS: also i dont have to remember complex commands) .  
  
Here are the ones I like the most.

### Checkout

`co` - to use the checkout swiss army knife. Use it as follows

`git co <branchname>` - to switch to a specific branch.

`git co -` - to switch to  the previous branch (SWEET MOTHER OF GOD!!).

`git co <filename>` - get the file from current HEAD. This will override the changes you've done.

### Status

`st` - To get the current status. Use it as `git st`

### Undo

`undo` - To undo the previous commit. Use with care and only if you've not pushed to the remote yet.

### Serve

`serve` - Use this to host a local git repository. Handy at times.

### All my Aliases

Here are all my aliases taken from `.gitconfig`

\`\`\`

\[alias\]

  co = checkout

  po = push origin

  pom = push origin master

  pod = push origin dev

  a = add

  d = diff

  s = status -sb

  st = status -sb

  undo = reset --soft HEAD^

  c = commit --verbose

  cm = commit -m

  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

  b = "!git for-each-ref --sort='-authordate' --format='%(authordate)%09%(objectname:short)%09%(refname)' refs/heads | sed -e 's-refs/heads/--'"

  shelve = stash # baggage from mercurial

  unshelve = stash pop

  serve = "!server(){ git daemon --verbose --export-all --base-path=. --reuseaddr $@; }; echo git://localhost:9418/; server"

\`\`\`