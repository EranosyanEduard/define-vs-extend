<script lang="ts" setup="">
import { onMounted, ref } from "vue";
import Inputmask from "inputmask";

const inputEl = ref<HTMLInputElement | null>(null);
const inputValue = ref("");
onMounted(() => {
  const inputMask = new Inputmask({
    allowMinus: true,
    postValidation(...args) {
      const max = 30;
      const min = -100;
      const digits = 3;
      const [chars] = args;
      const stringifyChars = chars.slice().join("");
      const numberifyChars = parseFloat(stringifyChars);
      if (stringifyChars === "-") return true;
      if (stringifyChars.endsWith("-")) return false;
      return (
        numberifyChars >= min &&
        numberifyChars <= max &&
        (stringifyChars.split(".").at(1)?.length ?? 0) <= digits
      );
    },
    showMaskOnFocus: true,
    showMaskOnHover: true,
  });
  inputMask.mask("input");
});
</script>
<template>
  <div>
    <h2>VInput</h2>
    <input v-model="inputValue" ref="inputEl" type="text" />
    <p>inputValue: {{ inputValue }}</p>
  </div>
</template>
