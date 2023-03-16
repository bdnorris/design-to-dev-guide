---
title: Responsive Design
order: 1
---

# Responsive Design

> All materials, whether wood or pixels, have a grain, and that grain suggests the best way to work. Go with the grain and one will find sturdiness combined with tremendous flexibility — a natural and exciting give that grounds decisions and excites with possibilities. Work against the grain and the work becomes precarious, difficult and fragile. Instead of the elegant bending that software requires to adjust to different screens, uses, and situations, the work breaks because it cannot adapt.

&mdash;**Frank Chimero** from the forward of _Learn to Code Now!_ by the **SuperHi Team**

There are a multitude of devices and screen sizes in use today, and most of them are capable of accessing the web. Designing sites that can run anywhere is a significant challenge. Responsive Web Design (RWD) is an approach to this problem.

Designing for the multitude of canvas dimensions is one of the most significant differences between print and digital design. We are now ten years into responsive design as an industry standard design approach, yet, the current state of design tools are not quite up to the task of assisting us in this approach (although, they are getting better).

So until our design software forces us to think this way, it's up to you to make sure you fill that gap. Thinking of your design canvas as a flexible document rather than one with defined boundaries is the first step.

## Responsive Behavior

There are several different ways your content can behave as the viewport size changes. Item&#39;s dimensions can flex, they can reflow (e.g. stack), and otherwise change at a certain width, etc. Generally, we use &quot;responsive&quot; to mean all of these things, but it’s worth being familiar with the differences. It’s easier to show than describe:

- [Liquid vs Adaptive](http://g-mops.net/epica_saitama/epica_layout/index_adaptive.html)
- [The Difference Between Responsive and Adaptive Design](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)

Most of the time, it’s obvious from the design files which approach certain elements of the page should take, but not always. That’s why it’s good to have a common language with your front-end developer to help describe responsive behaviors.

## Pixels vs. Percentages

One thing that&#39;s really hard to communicate from design to development, as previously mentioned, is whether a particular thing should be adaptive or responsive, that is, should it be sized in pixels and then change at a breakpoint, or should it be designed at a percentage.

Percentage based designs are typically more flexible and will look better for a wider variety of screens. But, they won&#39;t work for every concept. Developers will usually aim for percentage-based scaling, but if you definitely don&#39;t want that for some reason, make sure to document that.

## Breakpoints

Breakpoints are the pixel value dimensions of the browser’s viewport (browser window) that will trigger different visual layouts. They are typically based on the viewport width (since overflowing content can normally be reached by scrolling) but can be written for height as well. Major breakpoints should be chosen at the beginning of the design process.

### Full set

- 375 — small (btw, we still try to make things work down to 320)
- 667 — medium
- 1024 — large
- 1366 — xlarge
- 1920 — xxlarge (optional)

### Smaller/Alternative set

- 375 — small
- 768 — medium
- 1280 — large

<callout copy='However, these are starting points. If they don&#39;t work with your design, change them!' emoji="megaphone"></callout>

### Breakpoints are free (sorta)!

Need an additional breakpoint, or 3, for a particularly tricky component? No problem. The only cost to adding breakpoints is time, and for most use cases, not a lot.

Where it gets tricky is sometimes designs require adjustments every 100px or so. This gets tedious, but unfortunately, is sometimes hard to catch during the design phase.

## Large Screens 🖥️

You may not need a full design for large screens, but you should have a plan for them. In our full set, 1366px would imply how the design looks above that size—If you&#39;re using the smaller set, 1280 would.

Think about what happens to your content if the design gets larger. Perhaps you&#39;ve set a max-width on the content.

Now what about the backgrounds, do they keep getting larger, do they stop growing at a certain point, are your backgrounds big enough? Is it clear what your intentions are?

You can find [more information about how to deal with backgrounds in the Tips section](/tips/max-widths).

## Pixels vs Percentages

One thing that&#39;s really hard to communicate from design to development, as previously mentioned, is whether a particular thing should be adaptive or responsive, that is, should it be sized in pixels and then change at a breakpoint, or should it be designed at a percentage.

Percentage based designs are typically more flexible and will look better for a wider variety of screens. But, they won&#39;t work for every concept. Developers will usually aim for percentage-based scaling, but if you definitely don&#39;t want that for some reason, make sure to document that or let your developer know something should be base its size in pixels.

## Time for mobile-first design

Even our B2B clients are near 40-50% mobile usage. What does this mean? You are encouraged to, if not design mobile-first, then produce your wireframes mobile-first.

Designing mobile-first means you must consider your content and hierarchy very carefully. You will only be able to show the most pertinent and useful information and actions to your users. You can always enhance your design as screens get larger, adding more and larger graphics, but you'll do so knowing your content has accomplished its primary goals.

Essentially, designing for mobile is harder than designing for desktop. When designing desktop-first, the mobile design can become rushed to meet deadlines. This is exactly the wrong way to solve hard problems.

Either way, developers and clients should see mobile wireframes and desktop wireframes at the same time. So, even if you design on desktop first, you will have already worked through the exercise of how your content will work on mobile.

<callout copy="If your content doesn&#39;t work on mobile, your content <em>doesn&#39;t work</em>." emoji="fire"></callout>

[A Hands-On Guide to Mobile-First Design](https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/)

## Responsive Resources

- [Brad Frost&#39;s Responsive Resources](http://bradfrost.github.io/this-is-responsive/resources.html)
- [Responsive Web Design Basics (Google)](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)
- [Where to Start (Trent Walton)](http://trentwalton.com/2013/02/07/where-to-start/)
- [Media Queries (RWD Examples)](https://mediaqueri.es/)
- [More RWD Sketch Sheets](http://zurb.com/playground/responsive-sketchsheets)
