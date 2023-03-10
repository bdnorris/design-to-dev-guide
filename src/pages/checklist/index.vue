<template>
  <main>
    <h1>Checklists</h1>
  
    <p>Checklists for developers when reviewing designs and design files, but it&#39;s encouraged to check these yourself!</p>
  
    <h2 id="websites">Websites</h2>
  
    <h3 id="review-checklist">Review Checklist</h3>
  
    - Is it flexible - are we leaving out anyone? - touch point sizes - minimum font sizes - hover states - large screens
  
    <ul>
      <li>
        <input type="checkbox" id="breakpoints">
        <label for="breakpoints">Inspect for problems that might occur between breakpoints</label>
      </li>
      <li>
        <input type="checkbox" id="404">
        <label for="404">There&#39;s a 404 Page design (not necessary for single page sites and landing pages, a 500 error page is also good for large projects)</label>
      </li>
      <li>
        <input type="checkbox" id="larger">
        <label for="larger">It&#39;s clear from the design what happens on larger screens</label>
      </li>
    </ul>
  
    <h3 id="handoff-checklist">Handoff Checklist</h3>
  
    <ul>
      <li>
        <input type="checkbox" id="align">
        <label for="align">Assets are alignments that correspond to center/left/right/top/bottom</label>
      </li>
      <li>
        <input type="checkbox" id="blurry">
        <label for="blurry">Retina assets are not blurry</label>
      </li>
      <li>
        <input type="checkbox" id="favicon">
        <label for="favicon">A favicon has been provided</label>
      </li>
      <li>
        <input type="checkbox" id="blending">
        <label for="blending">No blending modes unless discussed with a developer first</label>
      </li>
      <li>
        <input type="checkbox" id="color-spec">
        <label for="color-spec">A color palette is provided</label>
      </li>
      <li>
        <input type="checkbox" id="color-check">
        <label for="color-check">Spot check: No colors are used in the design that aren&#39;t in the color palette</label>
      </li>
      <li>
        <input type="checkbox" id="type-styles">
        <label for="type-styles">Typographic styles for common elements are provided</label>
      </li>
      <li>
        <input type="checkbox" id="button">
        <label for="button">Button styles are provided</label>
      </li>
      <li>
        <input type="checkbox" id="webfonts">
        <label for="webfonts">Webfonts are provided or documented</label>
      </li>
      <li>
        <input type="checkbox" id="weights">
        <label for="weights">Only needed webfont weight and styles are provided, or documented.</label>
      </li>
    </ul>
  
    <div class="divider"></div>
  
    <h2 id="e-mail">E-Mail</h2>
  </main>
</template>
