<template>
  <div>foo</div>
</template>

<script lang="ts">
import Vue from "vue";
import TestDefine from "./Test-1.define.vue";

export default Vue.extend({
  name: "TestExtend1",
  mixins: [TestDefine, Vue.extend({data(){return{foo:1}}})],
  props: {
    testExtendProps: Boolean,
  },
  data() {
    return {
      testExtend: true,
    };
  },
  computed: {
    cTestExtend(): boolean {
      return this.testExtend;
    },
  },
  methods: {
    showTestExtend(): void {
      console.log(this.testExtend);
    },
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
