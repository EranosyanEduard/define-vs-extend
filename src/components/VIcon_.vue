<template>
  <div
    :style="{
      backgroundColor: color,
      border: '4px solid black',
      color: 'white',
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
