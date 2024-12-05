<script setup>
import {onBeforeUpdate, onMounted, provide, ref, useTemplateRef} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import FButton from "@/components/fButton.vue";
import BlogPost from "@/components/BlogPost.vue";
import BaseLayout from "@/components/BaseLayout.vue";

// onMounted(()=>{
//   console.log(`the component is now mounted.`)
// })
// onBeforeUpdate(()=>{
//   console.log(`the component is now beforeUpdate.`)
// })
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
const postFontSize = ref(1)
const input = useTemplateRef("my-input")
console.log(input)
onMounted(() => {
  input.value.focus()
})
const list = ref([

  {name:'apple',price:5,num:10},
  {name:'banana',price:6,num:20},
  {name:'orange',price:6,num:30},
])
const itemRefs = useTemplateRef('items')
onMounted(()=>{
  console.log(itemRefs.value)
})
provide('message','hello')
const count = ref(0)
provide('count',count)
</script>

<template>
<h2>生命周期</h2>
  <div>
    <hello-world></hello-world>
  </div>
  <h2>模板引用</h2>
  <input ref="my-input" value="12">
  <input value="123">
  <div>
    <ul>
      <li v-for="item in list" ref="items">
        {{item.name}}
      </li>
    </ul>
  </div>
  <div>
    <f-button></f-button>
  </div>
  <div :style="{fontSize: postFontSize +'em'}">
    <blog-post
        v-for="item in posts"
        :title="item.title"
        :key="item.id"
        @enlarge-text="postFontSize += 0.1">
    </blog-post>
  </div>
  <div>
    <h2>插槽</h2>
    <base-layout>
<!--      <template v-slot:header>-->
<!--        header-->
<!--      </template>-->
      <template #header>
        header
      </template>
      <template v-slot:default>
        main
      </template>
      <template v-slot:footer>
        footer
      </template>
    </base-layout>
  </div>
</template>

<style scoped>

</style>