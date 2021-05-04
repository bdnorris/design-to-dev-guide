<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="">
          Home
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang='scss'>
  nav {
    border-bottom: 1px solid $lgray;
    font-weight: 500;
    padding: 0 1em;
    // font-family: $sans;
    a {
      color: $text;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: $clickable;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
