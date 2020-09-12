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
import 'hamburgers/dist/hamburgers.min.css'
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

<style lang="scss" scoped>
code {
  display: inline-block;
}

code,
.hamburger {
  vertical-align: middle;
}
</style>
