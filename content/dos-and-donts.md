# Dos and Don’ts

## Don't

### Don't use opacity to make new colors

Often designers use a shortcut to making a lighter value of a color by lowering it's opacity. Don't do this. If we translated that directly, it would often lead to side affects, since the way elements are layered in the browser aren't the same as the design program, allowing colors to show through. 

Instead, try switching to the HSB or HSL color graph and change the B/L values to make these colors.

### Don't use blend-modes without discussing it with your developer first

We have some blend modes available in CSS, but the results might not match your design program.

### Do not assume developers have the fonts you are using

Please include desktop fonts or links to download so we can view the working files properly.

## Do

### Be Consistent

Design consistency...

[User Experience: Insights Into Consistency in Design](https://blog.tubikstudio.com/design-consistency/)

### Provide a Favicon

The little icon that shows in your browser tab... these can be a bit complex. There are other applications for this in different operating systems and browsers, so it's best to have a full range. 

About a dozen sizes of this icon are needed. Currently, I am using a Sketch File that when I place vector art provided by the designer on the artboard, I can generate all needed icon sizes. I will attempt to create an XD version, but I'm not entirely sure this is possible yet.

Stay tuned..

In the meantime, the best format to provide the favicon is essentially a square vector file. It can have a solid background, or a transparent one. If that doesn't work, let us know. 

Remember that dark-mode is now very common, so make sure your icon can work on any background color. 

## Make bigger background images

If you imagine the area you are adding a background to goes from edge to edge, or otherwise gets bigger on bigger screens, you'll need to provide a background that is as large as the largest size you might need to support. This could mean a background as much as 3000px wide, or 6000px for a retina image.

This might be fine but can obviously lead to too large file sizes.

There is the concept of "**cover**" mode on backgrounds. This means your background expands and contracts to make sure the entire element it's set on is covered at all times. This is fine, but your background will need to be of sufficient size so that when it expands to its maximum size (reasonably) it doesn't get too blurry or pixellated. 

### Ways to deal...

**Your band or area of content has a max-width**. Beyond that, it's a solid color.

**Your background fades on both sides to a solid color.** Then we match that solid color for the areas beyond your background image.

**Your background tiles infinitely, in one direction or both.** 

You can either find a tiling background or make one. This might mean making one from scratch, or, adapting an image that's already part of the brand. Google for strategies, but this is typically what I do...

[How to Create a Seamless Pattern (Tile) in Photoshop](https://blogs.adobe.com/jkost/2015/01/how-to-create-a-seamless-pattern-tile-in-photoshop.html)
