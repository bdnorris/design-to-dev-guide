<template>
  <aside class="menu">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <nuxt-link :to="'/' + item[0] + '/' + item[1]">
          {{ item[2] }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
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
