<template>
  <div class="container">
    <div>
      <h1 class="title">
        design-to-dev-guide
      </h1>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()
    return {
      page
    }
  }
}
</script>

<style>

</style>
