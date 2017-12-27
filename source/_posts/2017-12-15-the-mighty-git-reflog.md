title: The mighty `git-reflog` or how to undo a git rebase
tags:
  - git
date: 2017-12-15 21:06:55
---
Generally, whenever I have to undo a rebase I just reset my working directory to the origin remote and that works pretty well.

This one time I didn't push my changes to the remote and did a rebase. Only then I realized i didn't really want to rebase. Tough life right? I couldn't even reset to origin now.

That is when I learned about the `git reflog` command/feature. `git reflog` is quite similar to `git log` but instead of logging commits, it logs changes to the HEAD. Whenever a reference to the head changes, it logs it and allows us to go back in time and undo things we should've rathar not done.

So, for future reference, I can always `git reflog` and then `git rebase --hard HEAD@{n}` to the n-th head.

*Moral of the story, push before you rebase --- अभिनाश*

Thank you [stackoverflow](https://stackoverflow.com/questions/134882/undoing-a-git-rebase) and [git docs](https://git-scm.com/docs/git-reflog)