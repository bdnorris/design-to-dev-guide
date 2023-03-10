<template>
  <div class="callout">
    <div class="callout__icon">
      <template v-if="emoji === 'megaphone'">
        📣
      </template>
      <template v-if="emoji === 'fire'">
        🔥
      </template>
      <template v-if="emoji === 'alarm'">
        🚨
      </template>
    </div>
    <p>
      {{ copy }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    copy: {
      type: String,
      default: ''
    },
    emoji: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.callout {
  background-color: lighten($secondary, 22%);
  padding: 0.75em 0.75em 0.8em 1em;
  border: 1px solid darken($llgray, 10%);
  border-color: $secondary;
  font-family: $sans;
  font-size: 1.2em;
  line-height: 1.2;
  display: flex;
  p {
    margin: 0;
  }
}
.callout__icon {
  padding-right: 0.75em;
}
</style>
