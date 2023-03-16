---
title: Images
order: 3
---

# Images

## Formats

There are several different file types that are valid to use in browsers. You're probably familiar with most of them, but let's look into the pros and cons of each in a little more detail.

### JPEG

The king of photography compression is still the JPEG or the .jpg file. It's backward compatibility and it's variable compression make it useful not just for the web and the browser, but for file storage and transmission.

Add a small amount of compression, and a JPEG can retain a lot of its quality and still be printed in high-resolution. Add a lot more compression and it's a great format for the web.

JPEGs work best for photos. Images with a lot of detail, blurs, gradients, etc. work well in JPG because that's what it's compression was designed for, allowing for small files that you don't even really notice were compressed.

JPEG compression works on a variable range. The higher you turn up the compression, the smaller the image, but the more likely you are to get "artifacts" that might be noticeable. Artifacts are much more visible to the naked eye around sharp and contrasty areas like text or graphics. That's why generally we use PNG for graphics and JPEG for photography.

<Callout emoji="megaphone">When in doubt, use .jpg for photos.</Callout>

### Gif

However you pronounce it, GIFs or .gif files are now primarily used for animation. There are better ways of doing animation on the web, but GIFs can still be a good choice because they're so easy to implement and work just about anywhere.

When creating an animated GIF, you're creating a frame-based animation file. This means it's a series of full graphics. For this reason, long or large GIFs can grow to pretty large file sizes.

There were uses for non-animated .gif files. They are compressed even more than .jpg files because they had a strictly limited color palette. They also supported some transparency. However, those benefits have mostly been duplicated and improved by PNG files.

### PNG

Where JPEG files are "lossy", meaning you actually loose data when compressed, PNG or .png files are "lossless" meaning that no data is actually lost (think of a .zip file). They gained support much later than JPGs and GIFs and were intended to be the best of both.

The main strength of PNGs is they allow for "alpha transparency". The transparency in GIFs was binary, a pixel was either opaque or transparent. In a PNG, any given pixel can have its own opacity, allowing for fading and partial transparency effects, making it extremely versatile.

There are two flavors of PNG: PNG-24 refers to "true color" variant. PNG-8 refers to "palette" variant, which supports only 256 colors similar to GIF, allowing for smaller files.

PNG-24s don't suffer from compression artifacts like JPGs, making them great for graphics like logos and icons. The transparency allows them to be placed on any color background.

On the other hand, a given photograph in PNG format versus a compressed JPG might look similar to the naked eye, but the JPG will be significantly smaller.

<Callout emoji="megaphone">When in doubt, use PNG for graphics or any time you need alpha transparency.</Callout>

### SVG

There are also SVGs, "scalable vector graphics". With SVG, you can use vector graphics for the web. Think of it as an eps or ai file, but "uncompiled." SVG files are made of human-readable code. This means not only can you create them in Illustrator or Sketch, but you can author them by hand coding them as well.

SVGs also have a super-power, the can actually be placed right inside your HTML as well as accessed via an <img> tag. This means you can actually style them with CSS. For this reason, they're great for icons, since you can manipulate their colors and other properties through CSS. This also makes them able to be animated via CSS.

They tend to be small, especially when used for icons and small graphics. However, adding gradients or complicated patterns can quickly bloat them.

#### SVG preparation

SVGs can be a bit complicated, but I can give you some basic guidelines.

The number one rule of SVG is to keep them simple. Avoid complex masks, gradients, and objects with a ton of points. Expand your shapes (Object > Expand Appearance) and outline your fonts. Both strokes and fills are valid, but you would get unexpected results if you had any complex outlines or brushes unless you expand them.

Just like a JPG or PNG, an SVG has dimensions that are based on the artboard. In SVG this is called the "viewbox". Make sure your SVG fits inside your artboard. I also recommend you make your SVG artboards even numbers, it will make it easier to calculate changes later.

## Next-gen formats

There are several new image formats, some that are web-ready and some that only work in certain browsers. Here's a rundown of the most common ones.

### WebP

WebP stands for Web Picture Format, an image file format developed by Google that provides lossy and lossless compression for web images. It has the best browser support of any of the new formats. 

[Can-I-Use WebP](https://caniuse.com/#feat=webp)

However, Adobe has yet to add good export features for WebP, it's supported in Photoshop, but not XD. Most likely, if we're using webP on our sites, it's because we're using some sort of automated tool to convert our images that lives somewhere in our build process tooling.

### AVIF

Avif is another new format that has both lossless and lossy options. Browser support is getting better, but with a lack of support from Adobe, it's not likely to be a common format for a while.

[Can-I-Use AVIF](https://caniuse.com/#feat=avif)

### JPEG-XL

JPEG XL is a new image format that is designed to be a successor to JPEG. It's a lossless format, but it can be compressed to a smaller size than PNG. Browser support is abysmal, but it's still worth keeping an eye on.

[Can-I-Use JPEG-XL](https://caniuse.com/#feat=jpegxl)

### JPEG 2000

JPEG 2000 is another new format that wishes to dethrone the JPG, but currently Apple is the only big supporter. As such, Safari is the only place you'll find it working. You can work with this format in Photoshop, but it's not supported in XD.

[Can-I-Use JPEG 2000](https://caniuse.com/#feat=jpeg2000)

