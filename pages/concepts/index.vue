<template>
  <main>
    <article>
      <nuxt-content :document="page" />
    </article>
    <PageNav set="concepts" />
  </main>
</template>

<script>
import PageNav from '~/components/PageNav'

export default {
  components: {
    PageNav
  },
  async asyncData ({ $content }) {
    const page = await $content('responsive-design').fetch()
    return {
      page
    }
  }
}
</script>

<style>

</style>
