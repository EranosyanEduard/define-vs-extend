<template>
  <div>
    <h1>async comps sandbox</h1>
    <button @click="comp = 'TheA'">A</button>
    <button @click="comp = 'TheB'">B</button>
    <button @click="comp = 'TheC'">C</button>
    <component v-if="comp" :is="comp"></component>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { AsyncComponent } from "vue";
import { defineAsyncComponent } from "vue";
import { defineComponent } from "vue";

function createComponentName(pathToComponent: string): string {
  const [key_ = ""] = pathToComponent.match(/\w+\.vue$/) ?? [];
  return `The${key_.replace(".vue", "")}`;
}

const children = import.meta.glob("./components/**/*.vue");
const components = Object.entries(children).reduce<
  Record<string, AsyncComponent>
>((acc, [key, value]) => {
  acc[createComponentName(key)] = defineAsyncComponent(value);
  return acc;
}, {});

export default defineComponent({
  name: "TheAsyncCompsParent",
  components,
  setup() {
    const comp = ref<string | null>(null);
    return {
      comp,
    };
  },
});
</script>
