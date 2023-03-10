---
title: Animation
---

# Animation

- Animations need planning, so please **document** where you think animation will be useful and provide examples/mockups/sketches of the style of animation
- If animation is elaborate, plan on adding a prototyping phase concurrent with visual design

## Technologies

Animation in the browser can take several different forms. 
- CSS: CSS animations and transitions are the most performant, but they are limited to basic transformations and timing functions. Interactivity is limited.
- JS Web Animation API: This is a new API that is essentially a wrapper around CSS animations and transitions. It's a bit more flexible, but still limited to basic transformations. However, timing can be more complex, and more interactivity can be added. 
- JS Libraries: There are a number of JS libraries that can be used to create more complex animations and their capabilities will vary. We often use [GSAP](https://greensock.com), but there are others.
- ????????

Animista is the best site to find some nice CSS animation styles you can find, tweak and then export code. All of these implementations have pretty good performance.

[Animista](https://animista.net/)

As an example, of Javascript libraries for animation...

[anime.js](https://animejs.com/)

And here's an example implementation of anime.js

[Moving Letters](https://tobiasahlin.com/moving-letters/)

## Creating Animations

Animations can be created in development by writing code, by using a prototyping tool, or by using a design/animation tool like After Effects.

Simple animations should be created in code. Mockups can be created, or the designer can just describe or provide examples of disired animations.

More complex animations should be created in a prototyping tool, or in After Effects. These can be exported as video, or as code. 

Videos will not have much interactivity and are images, so they won't have the freedom you can get with animated SVGs or CSS animations. However, they can be economical and quick to create.

Exporting After Effects animations as code is a bit more involved, but it can be a good way to create animations that are more complex than what can be done by hand. This usually involves using a plugin to After Effects that can export the animation as code and delivered to the developer to implement.

This field is changing a lot, with new products being offered all of the time. 

## Complexity

We can animate a lot. But the complexity varies and it's hard to break down in any kind of guidelines as to what's more or less complexity, time or cost.

So let's discuss it early.

_Transforms_ and _opacity_ are the most performant animations. You know what opacity is, but what can we "transform"? Here's a start:

[transform - CSS Reference](https://cssreference.io/property/transform/)
