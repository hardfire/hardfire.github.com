+++
date = 2020-05-18T05:21:43Z
tags = ["github pages", "github actions", " eleventy", " static site generator"]
title = "Build Eleventy Using Github Actions and Github Pages"

+++
I have been helping a friend move his not-so-static php based websites to a static site setup served by GitHub Pages. Perfect opportunity to play around with eleventy and github actions (mostly because I have never liked Jekyll)

The idea is to use a Github Action to build static pages using eleventy and push them to the `gh-pages` branch. The action below does exactly that.

It uses the [nodejs action](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions) to run the build script. The other important thing is to move all the eleventy config to `.eleventy.js`. Since the build will be run via npm, it makes sense to add a build script to `package.json`. My `build` line looks like `"build": "eleventy --formats=md,html"`. I could move the `--formats` part to eleventy config, but the eleventy docs is a little confusing (plus this works, so no motivation).

Anyway, here is the workflow file I use. It is also available as a [gist](https://gist.github.com/hardfire/6ad7f7ec80ebc96be80820fb7f51b7f0)

{{< highlight yml "linenos=table" >}}#.github/workflows/eleventy_build.yml
name: Eleventy Build
on: [push]

jobs:
  build_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Build using node.ks
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build --if-present
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v1.1.0
        env:
          PUBLISH_DIR: _site 
          PUBLISH_BRANCH: gh-pages
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
{{< / highlight >}}