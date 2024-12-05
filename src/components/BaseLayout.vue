<script setup>
import {inject} from "vue";

const message = inject("message");
const count = inject("count");
</script>

<template>
  {{message}}
  num:{{count}}
  <button @click="count++">{{count}}+1</button>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style scoped>

</style>