<template>
  <nav class="main-nav">
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <a :href="'/' + item[0]">
          {{ item[1] }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      nav: [
        ['', 'Home'],
        ['concepts', 'Concepts'],
        ['tips', 'Tips'],
        ['web-handoff', 'Web Handoff'],
        ['email-handoff', 'Email Handoff'],
        ['checklist', 'Checklist']
      ],
    };
  },
}
</script>

