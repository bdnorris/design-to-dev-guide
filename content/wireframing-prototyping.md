# Wireframing / Prototyping

This is a big subject, so lets just look at some basic definitions.

## Wireframing

Wireframes are essentially a low-fidelity design. The point is to work out layouts and user interfaces by making the least design decisions possible. A good wireframe reveals what you know and what you don't know about your project. Most importantly it aligns all stakeholders before the more in-depth design work begins.

### Resiliency

There’s a tendency in the digital design process to design with ideal data, mock or otherwise. But a good template should be resilient and accommodate varying amounts and types of content.

Will your design break if the client changes the copy at the last minute? Keep this in mind as you move from your wireframe to your fleshed out design.

## Prototyping

Prototyping can take a lot of different forms, but here's where we are making things that are actually interactive but have a similar incompleteness to a wireframe. The design probably isn't all the way thought out yet, and you're not even sure which pattern to use or abuse.

### Types

- XD or similar design programs prototyping features.
  - Adding states and clickable navigation elements to your designs that can be previewed on the web.
  - This is probably going to be the most common way we prototype sites and apps.
- Low-overhead coded implementations.
  - Here's where a developer would start coding a project, but typically with a small data-set, and unpolished UI.
  - The goal is to get something interactive in front of stakeholders to work out the problem.
- Prototyping specific applications
  - There are a host of prototyping specific apps that can be used to work out solutions in low-to-high fidelity.
  - These typically are much more in-depth, and are mostly beneficial for very large, expensive projects.
  - Examples include Framer or InVision Studio
  - [https://www.framer.com/](https://www.framer.com/)
  - These often have a lot more animation prototyping features than Adobe XD, at least at the moment.

### Behavior and Interactivity

Prototyping most useful for complex user inputs.

- For example: filters and search should show whether the increasing specificity is an additive process, or a subtractive, i.e. does the result set increase when adding search terms, or narrow?
- Micro-interactions
- Any other special behaviors that are based on user input

### State

Prototype for all items that have a state, if you can’t design, **document.**

- Hover states
- Null/0/empty results from search or filtering and/or edge case results (1 item, 100 items)
- Normal, error, and focus states on form inputs, including error messages
- Any interface changes
  - Display toggles
  - Data updates
    - Wait times and loading states (what appears when there is a delay in updating the page?)

## Animation

- Animations need planning, so please **document** where you think animation will be useful and provide examples/mockups/sketches of the style of animation
- If animation is elaborate, plan on adding a prototyping phase concurrent with visual design

### Complexity

We can animate a lot. But the complexity varies and it's hard to break down in any kind of guidelines as to what's more or less complexity, time or cost.

So let's discuss it early.

_Transforms_ and _opacity_ are the most performant animations. You know what opacity is, but what can we "transform"? Here's a start:

[transform - CSS Reference](https://cssreference.io/property/transform/)

### Animista

Animista is the best site to find some nice animation styles you can tweak and export code. All of these implementations have pretty good performance.

[Animista](https://animista.net/)

### SVG Line Dashes

We can do that line drawing in animation thing, but your SVGs need to be designed to accommodate it.

### Animation Libraries

There are some cool helper libraries out there for animation. These can speed up dev of more complex animations. However, they have a performance and download cost, so better to stick with one. Here's one...

[anime.js](https://animejs.com/)

And here's an example implementation.

[Moving Letters](https://tobiasahlin.com/moving-letters/)
