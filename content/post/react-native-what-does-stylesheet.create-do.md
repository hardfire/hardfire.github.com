+++
date = 2020-08-25T13:14:17Z
tags = []
title = "React Native : What does StyleSheet.create do ?"

+++
I mostly work on the web and haven't worked a lot with react native. I've thoroughly enjoyed my time learning and building small apps using react native. It gives web developers superpowers to build native (ish) experiences for mobile using the same toolset we are aware of.

One thing that seemed rathar odd, especially coming from react web was the use of StyleSheet.create in react native. All the docs suggest to use it while creating styles but what exactly is the benefit of using it ? Let's look at the react-native [source](https://github.com/facebook/react-native/blob/0.5-stable/Libraries/StyleSheet/StyleSheet.js) to find out

Here is what the source mentions (in the comments)

> - Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.
> -  It also allows to send the style only once through the bridge. All subsequent uses are going to refer an id (not implemented yet).

Well, so it seems that there isn't a lot of benefit as of now. And this has been the case for quite some time as this has been there since the first "Initial Commit".
But then, why should we use it? Let's go deeper and look at the implementation itself.

{{< highlight js "linenos=table" >}}class StyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
    var result = {};
    for (var key in obj) {
      StyleSheetValidation.validateStyle(key, obj);
      result[key] = StyleSheetRegistry.registerStyle(obj[key]);
    }
    return result;
  }
}
{{< / highlight >}}

The only benefit that i can see at the moment is `StyleSheetValidation.validateStyle(key, obj);` which basically validates your style. I have chosen to not use the `StyleSheet` abstraction at the moment because it doesn't provide a lot of value and we don't know how it will evolve in the future.