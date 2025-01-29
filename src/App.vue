<script setup lang="ts">
import { useCounterStore } from "./stores/counter";
</script>

<template>
  <div id="app">
    <!-- <HelloWorld msg="You did it!" /> -->
    counter:
    <button @click="useCounterStore().increment()">
      {{ useCounterStore().counter }}
    </button>
    <br />
    counter obj:
    <button
      @click="useCounterStore().assign({ counter: useCounterStore().counter })"
    >
      {{ useCounterStore().obj }}
    </button>
    <br />
    counter arr:
    <button
      @click="useCounterStore().assignArr([{ counter: 1 }])"
    >
      {{ useCounterStore().arr }}
    </button>
  </div>
</template>
