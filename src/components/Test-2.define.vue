<template>
  <div>foo</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestDefine from "./Test-1.define.vue";
import TestExtend from "./Test-2.extend.vue";

export default defineComponent({
  name: "TestDefine2",
  mixins: [TestDefine, TestExtend],
  methods: {
    // HERE
    testSuccess() {
      console.log(this.testDefineProps);
      console.log(this.testDefine);
      console.log(this.cTestDefine);
      this.showTestDefine();
    },
  },
});
</script>
