# Digital Assets

There are a lot of things to worry about when preparing your images, graphics, and videos for the web. This should help you get started.

## The High Resolution Web

The wide variety of devices and screen types means, that to make sure our graphics look good everywhere, they need to target the highest-resolution device. Typically these are called "Retina" screens, a term coined by Apple for their high-resolution displays. These displays are twice as dense as your standard 72dpi monitor and are referred to as "Retina" because the human eye can't distinguish individual pixels at that density.

It's important to note, there are a lot of displays that exist between standard and "Retina". But if we aim for 2x, we'll be covered for the vast majority of devices.

## Pixels Matter

Anyone who has done any web design in the 90s or the early aughts remembers that images were necessary for any effect beyond simple text. Images for buttons, images for headings, and 1x1 transparent pixels to help you achieve proper spacing. We are well beyond that in the modern web, but pixels still matter.

Now, we can render web-optimized fonts, icon fonts, or SVGs (scaleable vector graphics), without worrying about size and scaling. However it is important to remember that different Operating systems and browsers will render vector data slightly differently as their anti-aliasing algorithms vary. Add the myriad of different screen types, and you should _expect_ your site to look different in different situations.

### Tips for rendering

If you're concerned about details, these tips will set you on the right path.

#### Keep things even

When designing, try to keep your graphics set to even numbers. A 1.5px line can be rendered on a "Retina" display, but a standard display is going to need to round that number. Rounding in general can lead to inconsistencies between devices. Keeping things even means those issues can be reduced since the math is more straight forward. 

Additionally, it's much easier for your front-end developer to do some easy math on a nice even number. 

### What is a "pixel" Anyway?

The term "pixel" can mean a few different things depending on the context...

#### Device Pixels (real screens)

A device pixel also called a physical pixel, is the smallest unit of a digital display that can emit light and change color. It is the basic building block of any digital image displayed on a screen.

A sub-pixel is a fraction of a device pixel that is used to create the final image. It's composed of red, green, and blue (RGB) color elements that work together to create a single pixel of a specific color. By adjusting the intensity of each sub-pixel, a digital display can create a wide range of colors and shades.

### Bitmap Pixels (image)

A bitmap pixel is a single point in a bitmap image, which is a grid of pixels. All of your typical image formats PNG, JPG, GIF, etc. are bitmap images. If an image is scaled, the pixels are scaled with it. This means that if you scale a bitmap image up, it will look blurry as software is stepping in to fill in the gaps. If you scale it down, the software is removing pixels and has to adjust the remaining pixels to account for this, but it's not as noticeable as the blurriness of scaling up.

#### CSS Pixels (browser sizing)

A CSS pixel is a unit of length in the CSS system, but it also corresponds to a pixel in your design tool. 

The difference between a CSS pixel and device pixels is why we want our design tools to tell us CSS pixels, but we want our assets to be doubled to deal with an unknown number of device pixels. This lets us easily translate the design to CSS, but also lets us use the same assets on both "Retina" and standard displays.

This means the bitmap assets you place in your design system should be at least twice as big as you are sizing them in your design tool so they will export without having to be enlarged.

If the graphic in question is vector based (shapes, type, etc.) then you don't have to worry about the underlying size since, theoretically, it can be scaled infinitely.

## Compression

Compression is a way to reduce the size of a file without losing any of the information. It's a great way to reduce the size of images, videos, and other assets so they can be downloaded faster. This is extremely important since images and videos are almost always the largest files on a web page. 

This is a really important point, so again: Images and video account for the largest amount of data that needs to be downloaded by the user to view a web page.

### Resolution over less compression

Typically we want to favor an image with a higher resolution over a smaller image with less compression. This can vary depending on the content of the image, but, in general, a larger image with higher compression to reduce the file size looks better in the browser than a smaller image with less compression.

### Who is responsible for compression?

Every web project will differ in it's workflow regarding where the compression happens. 

Many web project will have some kind of built-in compression that is a part of the tooling used to build the site. In this case, you don't have to worry about it all. 

Other projects will need to have the assets compressed manually before they are integrated into the project. Especially tricky images may need more aggressive compression to keep their size down. Images with a lot of texture may need to be compressed more to get their size down. Images with smooth gradients may need less compression to keep their smooth look but will still need to be compressed some amount to keep their size down.

Who should do this manual compression? Ask your developer! Some developer's will be more comfortable with this step than others. If you decide to compress your images before handoff, it is a best-practice to deliver both compressed and uncompressed versions of the image. That way they can at least be reviewed by the developer to make sure they are acceptable and possibly recompressed if they are not.

### Compression Tools

[TinyPNG](https://tinypng.com/) is a great tool for compressing PNG and JPG images, and can compress multiple images at once.

[Compress or Die](https://compress-or-die.com/) offers more fine-tuning ability for single images at a time. It's especially useful for tricky JPG and GIF images. It's also able to convert from one format to another.

See the article on [Images](/images) for more information on different image formats and what's best for that image and the project. 

## SVG

SVGs are "scalable vector graphics". They are a great way to create icons, logos, and other graphics that need to be scaled up or down without losing quality. They use markup language to describe the shapes and lines that make up the image. They can be created and exported from a variety of design tools.

#### SVG and size

Although a key item about SVGs are that they're scaleable, but don't expect an SVG icon designed at 200px x 200px to work well at 20px x 20px as the reduction will reduce detail in unexpected ways.

Optimizing SVGs for large use and small use separately may still be necessary, and making sure straight lines align to a pixel grid will make sure they look their sharpest.

Also note that SVGs have bounding boxes that are rectangles, just like images. The size of this box matters when placing them in the browser. It also means if you have a set of SVGs that you want to line up with each other, their bounding boxes need to be the same size. When exporting, this box can be set by setting an artboard in your design tool, or by simply exporting them with a transparent rectangle around them. If you don't, the rectangle will be the exact size of the SVG, which may lead to numbers like 12.3434234px, which is not a valid CSS value.

## Videos and Animations

### GIFs

The truth is you probably don't want to use a GIF for anything. GIF is a very old format that is not very efficient. 

They work by taking a series of images and playing them back in a loop. This means they are essentially a video format that hasn't changed in a long time. They are limited to 256 colors and are not very efficient at compression. This all leads to them being very large files that take a long time to download, and they won't play until they are fully downloaded.

One possible use for GIFs is for HTML Emails. They are supported by some email clients, but not all, so make sure the first frame of the GIF is a meaningful image. That first frame will be displayed if the email client doesn't support GIFs.

### Video

This is a bit of a complex topic, but here are the basics of prepping video assets for the web.

#### Why video?

There are a few advantages to using video over GIFs:
- Video can be compressed more efficiently than GIFs
- Video can be used to play audio
- Videos "stream" into the browser, this means they can start playing before they are fully downloaded
- Modern browsers have a lot of options for controlling video playback, which is helpful for accessibility and interactivity

#### Size

Technically, a video can be any size and work on the web. There are standard formats like 720p, 1080p, 4K, etc., but there is no reason you can't use a video that is 1000px x 1000px.

How big should you make your video? It's typically best to aim for a larger size, as the video can always be shrunk if it's file size is too large. The browser will also scale the video down to fit the size of the element it is in, so that means videos are responsive in the same way that images are.

#### Compression

Compression is really important when working with videos on the web. There are a number of different codecs that can be used to compress video with differing browser support. Typically we use H.264 (MP4), which is supported by all modern browsers, but sometimes WebM/VP9 for higher compression.

But does this matter to you? Who is responsible for compression? Again, ask your developer? If no one on the team is comfortable in this area, it's important you find someone who is to help out. 

The easiest compression tool to use is [Handbrake](https://handbrake.fr/). It's free, open source, and works on Mac and Windows. It's also very easy to use and has some useful presets that should work on the web. You should note that those presets will try and size the video to a standard format, so you may need to adjust the size of those settings for non-standard sizes.

For full control, the command line tool [ffmpeg](https://ffmpeg.org/) is a great option. It's a bit more complicated to use, but it going to offer the most control and flexibility.

#### Audio in Video

If your video has audio, it should not autoplay. 

Autoplaying videos with audio is a bad user experience for everyone, but it's also terrible for accessibility.

If your video does not have audio, it is nice if the audio track can be completely removed rather than just muted. The compression step is where this can be taken care of.

#### The "Poster"

The "poster" is what shows up before the video starts steaming or before the user hits the play button. It's a still image that is usually the first frame of the video. These can be created with FFMPEG, or you can manually create them from the first frame of the video in a design tool.

#### Vimeo and YouTube

If you're putting the video on one of these platforms, congratulations, you don't have to worry about format or compression. They will take care of that for you. They will also take care of the poster image for you.

But, this does mean that there are limitations for interactivity, controls, and size. You will need to use a standard size for these video services, and you will not be able to customize the controls or playback very much (Vimeo does let you control what controls show up and you can set a highlight color). 

## Asset Layout and Alignments

Similar assets should be sized and cropped similarly. If you find that assets placed in a layout have to be nudged to align with other assets, they likely need to be re-visited. Those nudges can be hard to translate to web stylesheets and become increasingly complicated when compensating for different breakpoints.

Instead, make sure grids, columns, and rows of assets can be aligned using basic alignment settings like top, left, right, bottom and center. If they have to be nudged outside of that in your design tool, this will not translate to the web very well.

## Asset Preparation

Exporting the final graphics from your design tool, or pre-preparing them before you place them in your layout is the "preparation" part of asset preparation. Do you need to do this, or can the developer?

It depends! Ask your developer! Some developers will be more comfortable with this step than others. Generally though, even if you prepare the assets, the developer will still need a copy of the live files to work with. As a designer, there's no way you can know exactly how the developer will need the assets prepped in every case. 

This is especially true in responsive design. Sometimes a developer will need to prep a less-cropped version of an image for a larger breakpoint or a more-cropped version for a smaller breakpoint. They may need to add some blank space to one side or another, or otherwise adjust the image size for alignment purposes. This happens a lot with background images, as positioning them in the browser can be tricky. 


### When in Doubt, Ask

The more complex a layout or a design, the less obvious the actual assets needed to give to the developer. Different front-end devs may very well try to achieve the same design in different ways, requiring different assets. When it's not obvious how an asset should be sized and prepped, some discussion may be required.
