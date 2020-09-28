<template>
  <div
    class="hamburger"
    :class="[{ 'is-active': isActive }, `hamburger--${type}`]"
    @click="isActive = !isActive"
    :style="wrapperStyle"
  >
    <div class="hamburger-box">
      <div class="hamburger-inner" :style="hamburgerStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    type: {
      type: String,
      default: 'spring'
    },
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 4
    },
    spacing: {
      type: [Number, String],
      default: 1
    },
    padding: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  watch: {
    spacing: function(newVal) {
      // watch it
      this.spacingUpdate(newVal)
    }
  },
  computed: {
    hamburgerStyle() {
      return {
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--position': this.position + 'px',
        '--positionBefore': this.positionBefore + 'px',
        '--positonAfter': this.positionAfter + 'px',
        '--color': this.color
      }
    },
    wrapperStyle() {
      return {
        // '--padding': this.padding + 'px'
      }
    }
  },
  mounted() {
    this.spacingUpdate(this.spacing)
  },
  methods: {
    spacingUpdate(multi) {
      multi = parseFloat(multi)
      this.position = 2 * multi
      this.positionBefore = 10 * multi
      this.positionAfter = 20 * multi
    }
  },
  data() {
    return {
      isActive: false,
      position: '2',
      positionBefore: '10',
      positionAfter: '20'
    }
  }
}
</script>

<style lang="scss" scoped>
$hamburger-padding-x: unset;
$hamburger-padding-y: unset;
$hamburger-layer-width: 40px !default;
$hamburger-layer-height: 4px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: var(--color) !default;
$hamburger-layer-border-radius: 4px !default;
$hamburger-hover-opacity: 0.7 !default;
$hamburger-active-layer-color: $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

@import './hamburgers.scss';

.hamburger {
  transition: all 0.3s;
}
.hamburger--spring .hamburger-inner {
  width: var(--width) !important;
  height: var(--height) !important;
  top: var(--position);
}
.hamburger--spring .hamburger-inner::before {
  width: var(--width) !important;
  height: var(--height) !important;
  top: var(--positionBefore);
}
.hamburger--spring .hamburger-inner::after {
  width: var(--width) !important;
  height: var(--height) !important;
  top: var(--positonAfter);
}
</style>
