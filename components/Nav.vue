<template>
  <nav class="main-nav">
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <nuxt-link :to="'/' + item[0]">
          {{ item[1] }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    nav () {
      return this.$store.state.menus.root
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-nav {
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
    &:first-child {
      .nuxt-link-active:not(.nuxt-link-exact-active) {
        &::after {
          display: none;
        }
      }
    }
  }

  [aria-current],
  .nuxt-link-exact-active,
  .nuxt-link-active {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after,
  .nuxt-link-exact-active::after,
  .nuxt-link-active::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: $primary;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
