<template>
  <div>foo</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestDefine1",
  props: {
    testDefineProps: Boolean
  },
  data() {
    return {
      testDefine: true,
    };
  },
  computed: {
    cTestDefine(): boolean {
      return this.testDefine;
    }
  },
  methods: {
    showTestDefine(): void {
      console.log(this.testDefine);
    }
  }
});
</script>
