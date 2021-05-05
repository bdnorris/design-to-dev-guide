<template>
  <main>
    <article>
      <nuxt-content :document="page" />
    </article>
    <aside />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('intro').fetch()
    return {
      page
    }
  }
}
</script>

<style lang="scss">
  main {
    @include default-sizing(1120px);
    padding-top: 2em;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    @include breakpoint(large) {
      display: grid;
      grid-template-columns: 1.618fr 1fr;
      padding-top: 3em;
    }
  }

  article {

  }

  aside {
    @include breakpoint(large) {
      position: sticky;
      top: 1em;
      max-height: 80vh;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    position: relative;
    a {
      position: absolute;
      left: -0.75em;
      top: 0;
      &::before {
        content: '#';
        color: $primary;
        display: block;
        position: absolute;
        top: 0;
      }
    }
  }
</style>
