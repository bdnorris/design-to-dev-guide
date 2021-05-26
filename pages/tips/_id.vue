<template>
  <main>
    <article>
      <nuxt-content :document="page" />
    </article>
    <PageNav set="tips" />
  </main>
</template>

<script>
import PageNav from '~/components/PageNav'

export default {
  components: {
    PageNav
  },
  async asyncData ({ $content, route }) {
    const page = await $content(route.params.id).fetch()
    return {
      page
    }
  }
}
</script>

<style>

</style>
