<template>
  <div
    class="v-icon"
    :style="{
      background: color,
      height: `${size}px`,
      width: `${size}px`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["color", "size"],
});
</script>

<style>
.v-icon {
  color: black;
  border: thin solid currentColor;
}
</style>
