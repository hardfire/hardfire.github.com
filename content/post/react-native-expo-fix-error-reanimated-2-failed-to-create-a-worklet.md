+++
date = 2021-05-14T05:42:04Z
tags = ["react-native", "expo", " reanimated2", " react native"]
title = "React Native: Expo: Fix Error Reanimated 2 failed to create a worklet"

+++
Have you seen the following error when using [reanimated2](https://github.com/software-mansion/react-native-reanimated) in [expo](https://docs.expo.io/versions/latest/sdk/reanimated/) ?

    Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?

I have spent quite a lot of hours fixing this issue. The solutions you see online are really random and they don't always work. Well, you don't know why it works if/when it works.   
1\. use yarn  
2\. reinstall all modules  
3\. It just resolved on its own  
4\. yarn add react-native-reanimated@next  
  
The cleanest way to solve this issue is to clear the metro-bundler cache by starting expo in the following way  
`expo start --clear` or `yarn start --clear`

If you want a full proof way to clear expo caches i would suggest to read [https://docs.expo.io/troubleshooting/clear-cache-macos-linux/](https://docs.expo.io/troubleshooting/clear-cache-macos-linux/ "Clear Expo Bundler cache on macos or linux") or [https://docs.expo.io/troubleshooting/clear-cache-windows/](https://docs.expo.io/troubleshooting/clear-cache-windows/ "Clear Expo Bundler cache on Windows")  
  
I have the cache clear commands set as a npm task. So i can run `yarn run clear-cache` whenever i am feeling superstitious. :) 