# Typography

## Limitations

### Word breaking, orphans and widows

...

Line breaks : don’t do them, size your text containers instead, reason…
styles for all basic text elements

### Kerning and Opentype

Variable fonts

Not yet. Newer open type formats promise to bring multi-color fonts and other features to the browser. Newer CSS Specs may help as well. Most modern browsers can disable kerning, but there's no way to actually control it from letter to letter. Maybe someday...

## Hierarchy and headings

h1-h6

### Hierarchies and Composable Layouts

### Accessibility and Headlines

## Common HTML elements

lists, links (state),

## Font Styles and Specifications

To align with the web, it’s good to have specced type styles for each basic type-oriented HTML element.

Use desktop fonts that closely align with their newest web versions
weights need to match

## Sizing

Bigger than you think

More leading than you think

I'm sorry that the legal copy is ruining your design, but shrinking your text to unreadable sizes is not the answer. 12px minimum for anything you want the user to be able to read, 10px for some legal copy. If you submit a design with fonts less than that, they're going up to 10px.

To reduce competition of less important text, try reducing contrast instead.

## Alignments

Alignments can be trickier on the web, since it's more difficult to cheat. Most characters have a little space around them, relative to the font's size. This is true of all fonts, but it's more difficult to make small tweaks like you can in a program like InDesign. You can see this space, but selecting the font and looking at the selected "halo". As font sizes increase, this spacing increases as well. If this is an issue, it's possible for the headline or other items to be nudged slightly, but this is hard to maintain, so isn't a common practice.

## Web Fonts, Files, and Licensing

Although typography on the web has come a long way in the last decade, there are still many special considerations.

Generally, desktop fonts are not licensed for web use. It is up to the designer to specify and secure a properly licensed webfont. The font needs to be either purchased with an explicit license for web use, or a font serving service should be used.

Google Fonts is a popular free service, and we have access to standard Typekit library. MyFonts offers webfont licenses for most fonts it offers. But it doesn’t matter where it comes from, it just needs to be licensed for the web. Billing for any paid fonts outside of Typekit is usually passed on to the client.

Every font included on the site adds to download times, and can sometimes add to the cost of paid fonts. “Font” in this case, refers to one typeface in one style and weight. For instance, when I choose a font from Google Fonts, it will ask what weights and styles I want to include. Each weight and style is a separate download for the end user. For that reason, it is usually best to specify exactly which weights and styles of a Typeface are being used for a project, so we only include the font files that are necessary for the design. When buying fonts, only buying the weights and styles you need can also save money.

## Responsive Typography

### Measure Control Tips

_Measure_ refers to the length of a line of text. It's the width of the text box. A good rule of thumb is to keep your measure between 45-75 characters per line, but you can adjust it based on the typeface and the content.

A few approaches to consider:

- Adjusting the font size to maintain proper measure within different breakpoints.
- Setting minimum and maximum widths on the type's container (most of the time we can set min and max widths on anything, as opposed to setting a hard, inflexible width).
- Flexible type sizes (actually tying the size of the type to the width so it scales, typically only used on headlines)

Just remember, you have less control here, _*design for resiliency*_, but accept that the web is a flexible medium.

### Other Responsive Type Tips

- Your text will probably wrap in unpredictable ways. For best results, do not soft break your text in your design program, this pattern cannot be followed successfully in responsive design. Instead, set your text boxes at their desired width and let text wrap naturally inside them.
- Avoid hyphenation, it's not reliable in all browsers.
- If you're using live type on top of an image background, and there's parts of the background the copy can't be on top of, make sure you leave plenty of copy space in that image.

## Testing your Type

There are some cool online tools where you can test your font combinations, sizes and spacing in the browser and even export code.

[https://type-scale.com/](https://type-scale.com/)

([https://archetypeapp.com/](https://archetypeapp.com/)

[https://hihayk.github.io/doppler/](https://hihayk.github.io/doppler/)
