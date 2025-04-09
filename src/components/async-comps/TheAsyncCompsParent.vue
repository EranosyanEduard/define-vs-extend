<template>
  <div>
    <h1>async comps sandbox</h1>
    <select v-model="comp" name="" id="">
      <option value="TheA.vue">TheA</option>
      <option value="TheB.vue">TheB</option>
    </select>
    <component v-if="comp" :is="comp"></component>
  </div>
</template>

<script lang="ts">
import {
  type AsyncComponentLoader,
  type Component,
  ref,
  defineAsyncComponent,
  defineComponent,
} from "vue";

function createComponentName(pathToComponent: string): string {
  const [key_ = ""] = pathToComponent.match(/\w+\.vue$/) ?? [];
  return key_;
}

const asyncChildren = import.meta.glob("./async-components/**/*.vue");
const syncChildren = import.meta.glob("./components/**/*.vue", { eager: true });

const components = Object.entries({ ...syncChildren, ...asyncChildren }).reduce<
  Record<string, Component | ReturnType<typeof defineAsyncComponent>>
>((acc, [key, value]) => {
  const componentName = createComponentName(key);
  if (typeof value === "function") {
    acc[componentName] = defineAsyncComponent(value as AsyncComponentLoader);
  } else if (typeof value === "object" && value !== null) {
    acc[componentName] = (value as { default: Component }).default;
  }
  return acc;
}, {});

console.group("TheAsyncComps");
console.log("async children", asyncChildren);
console.log("sync children", syncChildren);
console.log("components option", components);

export default defineComponent({
  name: "TheAsyncCompsParent",
  components,
  setup() {
    const comp = ref<string | null>(null);
    return { comp };
  },
});
</script>
