---
title: Navigation
---

# Navigation

Navigation design presents many challenges. Here's some suggestions for tackling complex navigation.

## Make it simpler if you can

1. Carefully consider your information architecture and, the amount of content you have.
2. Use clear and descriptive labels that accurately describe the content that users will find when they click on a link.
3. Put user needs above the client's needs.

## Sub-navigation

Use Dropdown Menus Sparingly: Dropdown menus can be helpful for organizing a lot of content, but they can also be overwhelming and frustrating for users.

### Click/Hover

Should the sub-navigation be triggered by click or hover? When in doubt, use click instead of hover.

Keyboard and users of larger touch devices may not be able to hover over a menu item, so some kind of click action is required. Hover can also have some issues with people who just aren't great at mouse precision, causing a lot of frustration.

[In Praise of the Unambiguous Click Menu](https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/)

Add a landing page for main dropdown information, this may be skipped by navigation users, but will be good for search engines and in-site search.

"The preferred and the most straightforward one involves including a link to the category landing page inside the associated menu."
[https://www.nngroup.com/articles/split-buttons-navigation/](https://www.nngroup.com/articles/split-buttons-navigation/)

## Provide a sense of scale and location

It's hard to know how much content is available on a site unless the navigation does a good job of communicating this. Make sure your navigation communicates the relative smallness or largeness of the site.

Simultaneously, it's hard to know where you are on a site unless the navigation also does a good job of communicating this. Research conventions for indicating a users current section and page.

### Breadcrumbs

Breadcrumbs can help solve the problem of location.

Breadcrumb navigation is a type of website navigation that provides users with a visual trail of the pages they have visited on a website. The name "breadcrumb" is derived from the fairy tale Hansel and Gretel, where the characters drop breadcrumbs to mark their path through the forest.

In website design, breadcrumb navigation typically appears near the top of a page and consists of a horizontal series of links, with each link representing a higher-level page in the website hierarchy. For example, if a user is currently viewing a product page, the breadcrumb navigation might display links such as "Home > Products > Category > Product Name."

[Breadcrumb Navigation Increasingly Useful](https://www.nngroup.com/articles/breadcrumb-navigation-useful/)

## Mega Menus

For large sites, use "mega-menus", but do your research.

[Mega Menus Work Well for Site Navigation](https://www.nngroup.com/articles/mega-menus-work-well/)

These can be hard to develop, maintain, and make accessible, but may be the best solution for a good user experience. 💵

## Utilities vs. Sections

Your primary navigation will likely be used to show the main sections of the website. This is what users expect, and is key to communicating purpose and scale of the website. 

There are other items users may need easy access to, such as a search box, or a login link. These should be placed in a secondary navigation, or a utility navigation, since they are not on their own full fledged sections and aren't a major part of your information architecture. Utility navigation is often placed in the header above the primary navigation, but there are other options.

## Mobile Navigation

You probably need a *completely different pattern for mobile*. 💵 

Unless your site is only a few pages, you will probably want some sort of toggle menu for mobile navigation. Dropdown menus are also not a good option in this limited space, so we tend to fall into two basic patterns: a toggle menu (accordion), or a slide out menu. 

A toggle menu is a good option if you have a small number of sub-items in your navigation. It's also a good option if you have a lot of items, but you can group them into a few categories. Clicking the section shows 2 to 5 sub-items, and clicking the item takes you to the page. Clicking the section again closes the sub-menu.

A slide out menu is a good option if you have a lot of sub-items. Here, when clicking on a section, the sub-menu appears on top to show all the items in that section. You'll need to provide a back button in this case to allow users to go back to the main menu.

## More N/N

[4 Dangerous Navigation Approaches that Can Increase Cognitive Strain](https://www.nngroup.com/articles/navigation-cognitive-strain/)

[Beyond the Hamburger: What Makes Navigation Discoverable on Desktops](https://www.nngroup.com/articles/find-navigation-desktop-not-hamburger/)

 Why Nielsen/Norman? They do actual research and back up their conclusions with data. This is different than pretty much everything else you read online.