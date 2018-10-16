---
title: What the detached head?
date: 2018-01-03 10:41:07
tags:
  - git
aliases:
  - 2018/01/03/what-the-detached-head.html
---
One could use git for years and not have to hear of detached heads. I came across detached head when I was showing a colleague what git really is. I was showing how to *"go back in time"* using git; Basically a `git checkout <commit-hash>`, right?

Yes, that is exactly when git goes to a detached head mode. So, what exactly is a detached head? Before that, what exactly is a HEAD?

**HEAD** in git simply refers to the current branch. The current branch then points to the latest commit in the branch. When we checkout a specific commit, then the **HEAD** refers to that commit instead of a branch. This state is called as a *detached head* state. Remember, if we commit to a detached head state, the new commit will only accessible via the commit hash. There is no way to get to it again if we switch to another branch. Git recognizes this and will remove it.

Also, remember, checking out the tip of a branch via commit hash will keep it in detached head mode. Always checkout via branch name.

For more details on detached head, [RTFM](https://git-scm.com/docs/git-checkout#_detached_head)
