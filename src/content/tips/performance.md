---
title: Performance
order: 7
---

# Performance

Although ultimately it's the developer who has to make sure a website has good performance, it's possible for a design that hasn't considered performance to make that task more difficult, if not impossible. 

Performance is a key aspect of user experience, and it can also have a significant impact on website traffic, search engine rankings, and even revenue. All of these become more pronounced on mobile devices, where not only are users on slower networks, but they also have less patience for slow websites. Every additional byte also adds cost to the user's data plan.

Here are some considerations for web designers concerning web performance:

## Page weight, and the "fold"

The page weight of a website is the total size of all of the files that make up the website, including HTML, CSS, JavaScript, images, and videos. Thought should be given to the overall amount of images and videos that are used on a given page. Their is no hard and fast rule, but it's important to consider the impact that each image or video will have on the page weight and whether or not it's necessary.

Although there is no exact "fold" on a website, that top portion of a page does need special attention. It often contains the largest images and videos and is the first thing that users see when they visit a website. It's important to make sure that the content above the fold loads quickly, and that the images and videos are optimized for the user's device and network connection.

Certain types of images are inherently larger and can be less compressed than other types of images. Details and texture add to the file size. 

If it's possible to make an image smaller and use in browser styles to make it look the same, that should be looked into. A good example of this is using a gradient overlay in CSS on top of an image rather than making a very large image with a gradient overlay built in.

## Google's Core Web Vitals

Google is using a new set of metrics to determine how well a website performs. These metrics are called Core Web Vitals. They influence how well a website ranks in Google's search results, especially on mobile devices. If Google determines that a website is slow, it will be penalized in search results for mobile users. 

[Google's Core Web Vitals](https://web.dev/vitals/)

### Largest Contentful Paint

> measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

Load the largest piece of content, usually an image, as fast as possible. This is often the header or "hero" image at the top of the page. The designer has some responsibility here. Testing should be done to determine the LCP, and the designer may need to be involved to help with revisions if this number is too high.

### First Input Delay

> measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.

This is the time it takes for the browser to respond to the first user interaction. This is mostly the responsibility of the developer, but it's possible that a feature necessary for the design may be causing a delay.

### Cumulative Layout Shift

> measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

This is the amount of unexpected layout shift that occurs when the page is loaded.

Similar to the above, this is mostly the responsibility of the developer, but it's possible that a feature necessary for the design may be causing a layout shift. 

One key area where the designer may be directly involved is around the use of particular aspect ratios and cropping for images and other assets. Consistency between what is specified in the design and the files that are delivered to the browser can help to reduce layout shifts.
