# Design Systems

Design systems, style guides, design tokens, etc. are becoming an important strategic way to help companies manage their digital design across sprawling collections of websites, apps, and other mediums using digital interfaces.

It can also help you manage a digital presence across _time_. Easing the difficulty of dealing with long-running websites with different designers and developers stepping on and off the team.

More to the point, _not_ having some sort of system or guide can cause lots of problems, from lost files, mix-and-match design styles, difficulty auditing systems, and everyone on the team having trouble seeing the big picture.

## What&#39;s included

- Minimally, you would have a system of components and sub-components expressed as editable design files, with matching front-end coded solutions.
- Variations off of those components are created by creating new sub-components and remixing them into new things.
- All web pages are composed of these components.
- This does not eliminate the need for &quot;one-off&quot; components, however, even one-off components probably have re-usable responsive layout schemes that can ease their creation and coding.

## Pros

- One source of truth.
- Making global changes is more controlled, less mysterious and dangerous (updates are easier to see and manage across a finite system instead of a sprawling website).
- Growth and/or sprawl is visible (it doesn&#39;t prevent sprawl, just makes you aware of it).
- Forces the creation of naming conventions (at least between designer and developer).
- Front-end dev can work alongside design, without having to wait for back-end architecture to be ready.

## Cons

- More time has to be spent up front, **but** with potential time savings for years to come.
- Tooling is a bit difficult.

## Here&#39;s a site with a bunch of examples

- [Website Style Guide Resources](http://styleguides.io/)
- [ClearLeft: Designing Design Systems](https://clearleft.com/posts/designing-design-systems)

---

# Atomic Design and Components

Brad Frost is the designer/developer responsible for a lot of the growth, high-level thinking, and advocacy on the subject of component based design. He has a free book you should read. It&#39;s not that long!

![atomic design](images/atomic-design-process.png)

[Atomic Design | Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/)

## Components

The concept of components is integral to a design system, but it can also be used very naturally for projects of any size.

If you&#39;re unfamiliar, the tools provided in modern digital design applications, like Adobe XD, encourage this, and you&#39;ll get a lot of benefits from moving to this approach.

The principal is you create components in your design program, and those can be reused throughout your design, or saved in a library and imported into the program for reuse. They create a &quot;source-of-truth&quot;, changing the component inherits to all its instances.

## Atomic Principles

Obviously, this fits in with the principles of Atomic design very nicely. Components can be small or large, simple or complex, and any component can be made up of lots of small components.

## Responsive Benefits

Creating a component allows you to easily use instances of that component across your responsive breakpoints. This allows you to edit once and let all the instances inherit that change, increasing efficiency, and removing some of the tedium of designing for different screen sizes.

Components can also have "responsive resize" settings applied, allowing you to resize instances without affecting the master component.

## Component Variation

lorem

## How to:

- [Using Components in Adobe XD](https://letsxd.com/videos/components)
- [Adobe XD: Everything about resizable components](https://medium.com/@mo.jahanii/adobe-xd-everything-about-resizable-components-f84105910428)

---

# Web Patterns

The web shares a lot of principles with other graphic design disciplines, but there are also a lot of web-specific patterns and specifications people are used to, if you deviate, make sure you have a good reason.

Some of these patterns follow how HTML and browsers work, but many are just conventions created over the years.

For example, the learned behavior of how to use an image carousel implies there will be arrows on the left and right to move between sequential images, and there will often be some kind of indicator at the bottom to show the number of items, and the current one you're on. To break this pattern for similar functionality would be to invite confusion.

You should research these patterns when designing your interfaces.

- [UI Patterns](http://ui-patterns.com/)
- [Inclusive Components](https://inclusive-components.design/)

---

# Styletiles

One way to quickly iterate on the styles for a web project without having to complete full page designs too early.

## Audience

Although style tiles are great for communicating amongst a design and development team, the ultimate audience for them is the client. They’re meant to quickly get feedback and show possible directions.

## Level of Detail

Style tiles are general. They exist to communicate mood and the general design direction.

[Styletiles](http://styletil.es/)
