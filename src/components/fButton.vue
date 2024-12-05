<script setup>
import {ref} from "vue";

const count = ref(0)
</script>

<template>
<button @click="count++">click me {{count}} times!</button>
</template>

<style scoped>

</style>