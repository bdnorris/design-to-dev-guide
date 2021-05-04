<script>
  import Callout from '~/components/Callout';
</script>

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

## What&#39;s a Pixel?

What should ultimately be the simplest unit, is actually a bit complicated. The good news is, we mostly just have to worry about what are called &quot;Reference Pixels&quot; or &quot;CSS Pixels&quot;. I&#39;ll quote from a Smashing magazine article to explain these a bit.

[Towards a Retina Web](https://www.smashingmagazine.com/2012/08/towards-retina-web/)

### Device Pixels (real screens)

> A **device pixel** (or physical pixel) is the tiniest physical unit _in a display_. Each and every pixel sets its own color and brightness as instructed by the operating system, while the imperceptible distance between these tiny dots takes care of tricking the eye into perceiving the full image.

> **Screen density** refers to the number of device pixels on a physical surface. It is often measured in pixels per inch (PPI). Apple has coined the marketing term “Retina” for its double-density displays, claiming that the human eye can no longer distinguish individual pixels on the screen from a “natural” viewing distance.

### CSS/Reference/Device-Independent Pixels (sizing in the browser)

> A **CSS pixel** is an abstract unit used by browsers to precisely and consistently draw content on Web pages. Generically, CSS pixels are referred to as device-independent pixels (DIPs). On standard-density displays, 1 CSS pixel corresponds to 1 device pixel.

### Bitmap Pixels (image)

> **bitmap pixel** is the smallest unit of data in a raster image (PNG, JPG, GIF, etc). Each pixel contains information on how it is to be displayed, including its position in the image’s coordinate system and its color. Some image formats can store additional per-pixel data, such as opacity (which is the alpha channel).

> Beside its raster resolution, an image on the Web has an abstract size, defined in CSS pixels. The browser squeezes or stretches the image based on its CSS height or width during the rendering process.

> When a raster image is displayed at full size on a standard-density display, 1 bitmap pixel corresponds to 1 device pixel, resulting in a full-fidelity representation. Because a bitmap pixel can’t be further divided, it gets multiplied by four on Retina displays to preserve the same physical size of the image, losing detail along the way.

### Sorry about that

...but the above will become very important when we start talking about retina graphics.

## Guides and Grids

It's extremely helpful to establish columns, grids, and guides inside your design files. It makes it much easier to measure white-space for one, but also, developers have a lot of tools at their disposal to interpret those into responsive code. It communicates your intentions much more clearly.

### Column Grids

![example of a column-based layout](/images/guides@2x.png)

Columnar grids like this, with even columns and gutters, are a nice way to establish a uniform grid system across an entire website.

In Adobe XD, you can activate and customize a column system by selecting the artboard and turning on the "Layout Grid."

They may not work for every design, but the concept can be adapted for non-symmetrical layouts using manually placed guides as well.

### Two-dimensional Grids

![example of a two-demensional grid layout](/images/grid@2x.png)

With the new CSS "Grid" feature, we can create two-dimensional grids as well. By "two-dimensional" we mean both columns and rows. These new features are pretty powerful, letting us specify dimensions of columns and rows by fractions, percentages, pixels, or let them adapt to their content.

You should have a basic understanding of Grid because if you make something look like a grid in your designs, we might try to use Grid to lay it out. Grid can do amazing things, but, there are little things it doesn't do.

#### Cool Grid Stuff

Jen Simmons does a lot of thinking and advocating for all things web-layout. She's a great resource for learning what Grid can do.

Not every grid cell needs content, they can be used for whitespace!

[![Whitespace with Grid by Jen Simmons](http://img.youtube.com/vi/YfIjFeBLhyA/0.jpg)](https://www.youtube.com/watch?v=YfIjFeBLhyA)

You can create overlaps!

[![Overlap with Grid by Jen Simmons](http://img.youtube.com/vi/EashgVqboWo/0.jpg)](https://www.youtube.com/watch?v=EashgVqboWo)

Size things with minimums and maximums, but let them flex in-between.

[![Overlap with Grid by Jen Simmons](http://img.youtube.com/vi/lZ2JX_6SGNI/0.jpg)](https://www.youtube.com/watch?v=lZ2JX_6SGNI)

#### Here's a couple of more general talks from Jen about web layout.

[Modern Layouts: Getting Out of Our Ruts by Jen Simmons](https://aneventapart.com/news/post/modern-layouts-getting-out-of-our-ruts-by-jen-simmons-an-event-apart-video)

[Revolutionize Your Page: Real Art Direction on the Web by Jen Simmons](https://aneventapart.com/news/post/real-art-direction-on-the-web-by-jen-simmons-an-event-apart)

Here's one last resource with some real world examples of [layouts based on Grid](https://sii.im/playground/css-grid/).

#### Things Grid doesn't do

- Things must fall on the grid, regardless of their size or how you want to align them. Items can't arbitrarily cross grid lines unless specified.
- Grid probably isn't the best solution if you just need to put some things on the same line, or you don't know how wide your items will be.

<callout copy="There is no Internet Explorer support for Grid." emoji="alarm"></callout>

## Object Fit

Object-fit is a way to make content items fill their given space in both directions, similar to a background image. It inherently causes cropping of the video or image, so should be used with care.

[Responsive Example of Using Object Fit](https://labs.jensimmons.com/2019/01-002.html)

[![Cropping images with Object Fit](http://img.youtube.com/vi/5CZyxnCdXuk/0.jpg)](https://www.youtube.com/watch?v=5CZyxnCdXuk)

This can also be done with videos, making decorative videos much more flexible.

<callout copy="There is no Internet Explorer support for Grid." emoji="alarm"></callout>

## Pixels vs Percentages

One thing that&#39;s really hard to communicate from design to development, as previously mentioned, is whether a particular thing should be adaptive or responsive, that is, should it be sized in pixels and then change at a breakpoint, or should it be designed at a percentage.

Percentage based designs are typically more flexible and will look better for a wider variety of screens. But, they won&#39;t work for every concept. Developers will usually aim for percentage-based scaling, but if you definitely don&#39;t want that for some reason, make sure to document that or let your developer know something should be base its size in pixels.

## Time for mobile-first design

Even our B2B clients are near 40% mobile usage. What does this mean? You are encouraged to, if not design mobile-first, then produce your wireframes mobile-first.

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
