---
title: Typography
order: 3
---

# Typography

## Limitations

### Variable Browsers and Devices

Different browsers, operating systems and devices will display web typography differently. Each will have their own rendering engines and screen technologies, which can result in unpredictable variations in how fonts are displayed.

### Limited Control over Layout

Web typography is still largely limited to a linear flow of text, unlike print typography, which can be more creatively laid out on the page.

### Limited OpenType Features

Web typography is somewhat limited in OpenType features, such as ligatures, kerning, and small caps. There is some support, but browser support varies, and actual webfonts sometimes have these features stripped in order to reduce download size. If you want to use these, make sure you research your specific font choice. 

## Advantages

### Greater Accessibility

Web typography can be easily scaled and adjusted to accommodate users with different visual impairments or reading preferences. For example, users can adjust the font size or line height to suit their needs.

### Dynamic and Interactive

Web typography can be dynamic and interactive. Designers can use animations, hover effects, and other techniques to create dynamic typography that responds to user input.

### Easy to Update

Web typography can be easily updated and changed, without the need for a reprinting. This allows stakeholders to make changes and publish continuously.

### Flexible Layout

Web typography can be easily adapted to different screen sizes and layouts, allowing for a more fluid and responsive design. This is particularly important as more users access content on mobile devices.

### Variable Type

Variable type allows designers to use a specially designed, single font file that can be used to display a range of different weights and styles. This means instead of just working with "regular", "medium", and "bold", or normal and "italic/oblique", you can narrow in on in between weights and styles. For example, you could increase the weight slightly when the text is on a dark background versus a light background.

### Word breaking, orphans and widows

A given container in a web design is likely changing width and height as the viewport, or surrounding elements, change. This means that the text inside that container is likely to break in unpredictable ways. This is especially true of headlines, which are often set in a single line. Letting the text wrap naturally is recommended, as attempting to hard break a line to make it look a certain way at a certain size can result in unpredictable results at other sizes. 

Note that hyphenation is possible, but requires the browser to support it and that a dictionary that can reliably break words into paragraphs is installed on that system in the language the page is using. Don't rely on it, but it can be used as an enhancement.

## Hierarchy and headings

Establishing a hierarchy of information on the page isn't only good design, it's extremely important for accessibility and SEO. Headings are a great way to do this, and they're also a great way to help users skim the page and find the information they're looking for.

HTML has a number of heading tags, from `<h1>` to `<h6>`. These tags are used to indicate the importance of the text they contain. `<h1>` is the most important, and `<h6>` is the least important. For accessibility purposes, these headings to need to be in order.

Typically you would have on H1 per page, and then H2s, H3s, etc. for subheadings. There are ways to have multiple H1s instead, but it's important not to skip the H2 and go directly to an H3. 

If this presents a significant design problem. There is likely some creative coding that could help you achieve the desired layout.

### Hierarchies and Composable Layouts

When thinking about your text hierarchies on a project, consider whether the pages in the project will be made up of composable units (bricks, components, whatever you want to call them). If so, make sure each component starts with an H2 and has proper heading order, and make sure that there is an option for any components that may appear at the top of the page to contain an H1.

### Other Hierarchy Considerations

Your Hierarchy, of course, isn't just for headings, nor will it always correspond directly to existing HTML elements. When defining these for your project, communicate with your developer around what kinds of text elements will be used for what purpose. Knowing this information early will lead to greater success when reviewing the final product.

### Accessibility and Headlines

Just a note about why the order is important... although there are numerous reasons a user would need a page to be accessible in general, on the extreme end of an unsighted user using a technology like a screen reader, the headings are a key way they are able to understand the content of a page, and to navigate the page. If the headings are out of order, the screen reader will have trouble interpreting the content for the person using it. 

## Common HTML elements

As a digital designer, you should be aware of the most common HTML elements and their use cases.

We'll skip headings since they're discussed above.

### Paragraphs

The `<p>` element is used to define a paragraph. Paragraphs are usually represented in visual designs as blocks of text with some space above and below.

### Lists

The `<ul>` element is used to define an unordered list. An unordered list is a list in which the order of the items does not matter. Unordered lists are usually displayed with a bullet (small black circle) in front of each list item.

The `<ol>` element is used to define an ordered list. An ordered list is a list in which the order of the items does matter. Ordered lists are usually displayed with a number or letter in front of each list item.

The `<li>` element is used to define a list item. A list item is the part of a list that contains the actual content of the list.

### Links

The `<a>` element is used to define a hyperlink, which is used to link from one page to another. Often these are styled to look like a button, or they can be styled as emphasized text inside another paragraph.

### Strong and Emphasis

The `<strong>` element is used to define text with strong importance. The content inside is typically displayed in bold.

The `<em>` element is used to define emphasized text. The content inside is typically displayed in italic.

### Quotes

The `<blockquote>` element is used to define a section that is quoted from another source.

### Buttons

The `<button>` element is used to define a clickable item that performs an action.

### Spans

The `<span>` element is used to group inline-elements in a document. The `<span>` element does not introduce a new line or break in the text. They're useful for applying generic styles that don't carry with them any semantic meaning. A screen reader will read the text inside a span as if it were in a paragraph with no special emphasis.

### Super and Subscripts and Legal Marks

The `<sup>` element is used to define superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font.

The `<sub>` element is used to define subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font.

Many fonts display registration and trademark symbols too large, requiring the use of the `<sup>` element. This can be tricky when using a CMS, since not all places where you might need them will allow you to use HTML, or at least use it easily. When working on a new project, it's not a bad idea to test a design with those symbols in a few places. 

## Sizing

How big your type should be is bound to be fairly opinionated, but there are some general guidelines that can help you make the right decision.

Since we aren't limited to a certain paper size, erroring on the side of larger text is usually a good idea. More users are likely to be frustrated by text that is too small rather than text that is too large.

Add as much leading as you are comfortable with. Reading on screens is often harder on the eyes than reading on paper, so anything you can do to reduce eye strain is a good idea.

12px should be considered an absolute minimum, and likely only for legal copy.

### Mobile vs. Desktop

One could argue that if a size of text is good for a large screen, it should be good for a smaller screen, but it can be more complicated than that. Mobile screens, at least right now, are more likely to be more pixel dense than a desktop screen, meaning you could go a little smaller on mobile and maintain the same legibility. However, be careful not to make your mobile text size small for the sake of "fitting more in". Users are comfortable with scrolling, and you don't want to make them feel like they're squinting at your content.

## Alignments

Alignments can be trickier on the web, since it's more difficult to cheat a few pixels here or there. 

Most characters have a little space around them, relative to the font's size. This is true of all fonts, but it's more difficult to make small tweaks like you can in a program like InDesign. You can see this space, but selecting the font and looking at the selected "halo". As font sizes increase, this spacing increases as well. If this is an issue, it's possible for the headline or other items to be nudged slightly, but this is hard to maintain, so isn't a common practice.

## Web Fonts, Files, and Licensing

Although typography on the web has come a long way in the last decade, there are still many special considerations.

Generally, desktop fonts are not licensed for web use. It is up to the designer to specify and secure a properly licensed web font. The font needs to be either purchased with an explicit license for web use, or a font serving service should be used. Do not use fonts that are not licensed for the web, and do not expect that "someone else will take care of it."

Google Fonts is a popular free service, and we have access to the standard Typekit library. MyFonts offers web font licenses for most fonts it offers. But it doesn’t matter where it comes from, it just needs to be licensed for the web. Billing for any paid fonts outside of Typekit is usually passed on to the client.

Every font included on the site adds to the overall size of the web page and affects performance, this means every weight and style used in your design has to be downloaded separately. 

For instance, when I choose a font from Google Fonts, it will ask what weights and styles I want to include. Each weight and style is a separate download for the end user. For that reason, it is usually best to specify exactly which weights and styles of a Typeface are being used for a project, so we only include the font files that are necessary for the design. When buying fonts, only buying the weights and styles you need can also save money. 

Avoid using regular and bold for 95% of a project, and then throwing in a "medium" weight for a couple of instances. Again, that medium-weight font will need to be downloaded by every user, even if they don't need it.

## Measure Control

_Measure_ refers to the length of a line of text. It's the width of the text box. A good rule of thumb is to keep your measure between 45-75 characters per line, but you can adjust it based on the typeface and the content.

A few approaches to consider:

- Adjusting the font size to maintain proper measure within different breakpoints.
- Setting minimum and maximum widths on the type's container (most of the time we can set min and max widths on anything, as opposed to setting a hard, inflexible width).
- Flexible type sizes (actually tying the size of the type to the width so it scales, typically only used on headlines)

Just remember, you have less control here, _*design for resiliency*_, but accept that the web is a flexible medium.

## Testing your Type

There are some cool online tools where you can test your font combinations, sizes and spacing in the browser and even export code.

[https://type-scale.com/](https://type-scale.com/)

[https://archetypeapp.com/](https://archetypeapp.com/)

[https://hihayk.github.io/doppler/](https://hihayk.github.io/doppler/)
