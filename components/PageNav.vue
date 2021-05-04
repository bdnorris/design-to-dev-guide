<template>
  <article class="menu">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <nuxt-link :to="'#' + item[1]">
          {{ item[2] }}
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'PageNav',
  props: {
    set: {
      type: String,
      default: ''
    }
  },
  computed: {
    menuItems () {
      if (this.set) {
        return this.$store.state.menus[this.set]
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    padding: 0 0 2.333em 0;
    font-size: 1.333em;
    position: sticky;
    top: 2em;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    &.index {
      font-size: 1.666em;
    }
    @include breakpoint(large) {
      padding: 2em 2em 2.333em 3em;
      &.index {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>
