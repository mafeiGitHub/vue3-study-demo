<script setup>
import {computed, reactive, ref} from "vue";

const msg = ref('你好')
const rawHtml = ref(' <h2>hello world</h2>')
const dynamicId = ref('myId')

function changeId() {
  dynamicId.value = 'myId2'
}

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
const count = ref(0)
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const now = computed(() => Date.now())
const isActive = ref(true)
const hasError = ref(false)
const activeColor = ref('red')
const fontSize = ref(40)
const awesome = ref(true)
const items = ref([{message: 'Foo'}, {message: 'Bar'}])
const text = ref('hello world')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref([])
const selected = ref([])
const selected1 = ref('A')

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
</script>

<template>

  <h2>模板语法</h2>
  <span>Message:{{ msg }}</span>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html: <span v-html="rawHtml"></span></p>
  <div>
    <hr>
  </div>
  <h2>属性绑定</h2>
  <div v-bind:id="dynamicId">111</div>
  <button @click="changeId">changeId</button>
  <span v-bind="objectOfAttrs">多个属性</span>
  <div>
    <hr>
  </div>
  <h2>ref</h2>
  <div>{{ count }}</div>
  <button @click="count++">+1</button>
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <div>{{ now }}</div>
  <div :class="{active:isActive,'text-danger': hasError}">你好</div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"> 春风不度玉门关</div>
  <div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <button @click="awesome=!awesome">change</button>
  </div>
  <div>
    <ul v-for="(item,index) in items">
      {{ item.message }}--{{ index }}
    </ul>
  </div>
  <h2>表单</h2>
  <span>{{ text }}</span>
  <input class="item" :value="text" @input="event=>text=event.target.value">
  <input class="item" v-model="text" placeholder="edit me">
  <textarea v-model="msg" placeholder="edit me"/>
  <input class="item" type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
  <div>Checked Names:{{ checkedNames }}</div>
  <input class="item" type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input class="item" type="checkbox" id="tom" value="Tom" v-model="checkedNames">
  <label for="tom">Tom</label>
  <input class="item" type="checkbox" id="lucy" value="Lucy" v-model="checkedNames">
  <label for="lucy">Lucy</label>
  <div>Picked:{{ picked }}</div>
  <input class="item" type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <input class="item" type="radio" id="two" value="Two" v-model="picked">
  <label for="two">One</label>
  <div>selected:{{ selected }}</div>
  <select class="item" v-model="selected">
    <option disabled value="">please select one</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <select class="item" v-model="selected" multiple>
    <option disabled value="">please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <div>selected1:{{selected1}}</div>
  <select class="item" v-model="selected1">
    <option v-for="item in options" :value="item.value">{{item.text}}</option>
  </select>

</template>

<style scoped>
button {
  width: 100px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.item{
  width: 200px;
  margin: 0 auto;

}

</style>