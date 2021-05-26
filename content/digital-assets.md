# Digital Assets

## Towards a High Resolution Web

### Pixels Matter

Anyone who has done any web design in the 90s or the early aughts remembers that images were the key to any affect beyond simple text. Images for buttons, images for headings, 1x1 transparent pixels to help you achieve spacing. We're well beyond that in the modern web, but pixels still matter.```

Now, we can render web optimized fonts, icon fonts or SVGs (scaleable vector graphics), seemingly without worrying about size and scaling. However it is important to remember, different Operating systems and browsers will render vector data slightly differently. Their []anti-aliasing software varies. Add the myriad of different monitor types, and you should _expect_ your site to look different in different situations.

### Tips for rendering

If you're concerned about details, these tips will set you on the right path.

#### Keep things even

1 is a tricky number on the web. For example, a 1px rule on a standard monitor, is really

Keeping your elements even numbers allows for ....

#### SVG and size

Although a key item about SVGs are that they're scaleable, don't expect an SVG icon designed at 200px x 200px to work well at 20px x 20px.

Optimizing small and making sure vector lines align to a pixel grid (Sketch is great for this) will make them look their sharpest.

You might consider designing an icon at 32 x 32, and then only letting it be used at 16 x 16, 64 x 64, etc.

```

Expect that font weights will vary from OS and browsers.

```

## Retina Graphics

https://www.smashingmagazine.com/2012/08/towards-retina-web/

Device Pixels (real screens)

CSS Pixels (browser sizing)

Bitmap Pixels (image)

## Compression

Depends

## SVG

## Columns and Grids

Ideally columns of items should keep all columns and gutters the same width. If not, please discuss this with your front-end developer.

## Asset Layout and Alignments

Similar assets should be sized and cropped similarly. If you find that assets placed in a layout have to be nudged to align with other assets, they likely need to be re-visited. Those nudges can be hard to translate to web stylesheets, and become increasingly complicated when compensating for different breakpoints.

Instead, make sure grids, columns, and rows of assets can be aligned using basic alignment settings like top, left, right, bottom and center. If they have to be nudged outside of that, this will not translate to the web.

## Asset Preparation

### When in doubt, ask

The more complex a layout or a design, the less obvious the actual assets needed to give to the developer. Different front-end devs may very well try to achieve the same design in different ways, requiring different assets. When it's not obvious how an asset should be sized and prepped, some discussion may be required.
