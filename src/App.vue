<script setup>

</script>

<template>
  <button @click="$router.push({path: '/login'})">login</button>
  <button @click="$router.push({path: '/hello'})">hello</button>
  <button @click="$router.push({path: '/基础语法'})">vue基础语法</button>
  <button @click="$router.push({path: '/生命周期'})">vue生命周期</button>

  <div class="container">
    <router-view></router-view>
  </div>





</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
}


</style>
