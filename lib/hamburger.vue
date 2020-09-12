<template>
  <div
    class="hamburger"
    :class="[{ 'is-active': isActive }, `hamburger--${type}`]"
    @click="isActive = !isActive"
  >
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    type: {
      type: String,
      default: '3dx'
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>
