+++
date = 2021-05-07T09:50:43Z
tags = ["react-native", "development"]
title = "React Native: Did the text truncate using numberOfLines?"

+++
I enjoy writing apps in React Native because of the amazing community and the ocean of tutorials available online. But, every once in a while we hit a we hit a wall and then we have to go reading the documentation and dig through the typescript types.

I had one of those issues the other day. We can easily truncate text using the [numberOfLines prop](https://reactnative.dev/docs/text#numberoflines). If we want to show the first 3 lines and truncate the rest, we can write it as the following

{{< highlight jsx "linenos=table" >}}
<Text numberOfLines={3}>
   Mordor. The one place in Middle-Earth we don't want to see any closer. And
   it's the one place we're trying to get to. It's just where we can't get.
   Let’s face it, Mr. Frodo, we're lost.
</Text>
{{< / highlight >}}

Now, lets say we want to show a "Read More" button if the text was truncated. Before we can show the button need to know if the text was truncated or not. We can do that by listening to the [onTextLayout event](// could we have rendered more than 3 lines). It provides an array of `TextLayouts` for each line of text rendered. So we can essentially do the following

{{< highlight jsx "linenos=table" >}}
const DidYouTruncate = () => {
   // dont show the button by default
   const [showReadMore, setShowReadMore] = React.useState(false)
 
   const onTextLayout = (event) => {
     const {lines} = event.nativeEvent;
     // could we have rendered more than 3 lines
     if (lines.length > 3) {
       setShowReadMore(true)
     }
   };
 
   return (
     <React.Fragment>
       <Text numberOfLines={3} onTextLayout={onTextLayout}>
         Mordor. The one place in Middle-Earth we don't want to see any closer. And
         it's the one place we're trying to get to. It's just where we can't get.
         Let’s face it, Mr. Frodo, we're lost.
       </Text>
       {showReadMore && <Button>Read More</Button>}
     </React.Fragment>
   )
}
{{< / highlight >}}

And, that is the cleanest approach to know if the text did truncate or not.

**BONUS**: if you dont want to truncate the text at the end you can configure it via the [ellipsizeMode prop](https://reactnative.dev/docs/text#ellipsizemode)