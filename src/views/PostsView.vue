<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/postDetail/${ post.id }`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea v-autofocus />
    <div>
      <button
      @click="counter.increaseCounter(1)"
      :class=" {'yellow' : counter.oddOrEven === 'odd'} "
      class="counter-button">
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  import { vAutofocus } from '@/directives/vAutofocus';

  const posts = ref([
    {
      id: 1,
      title: 'Post 1'
    },
    {
      id: 2,
      title: 'Post 2'
    },
    {
      id: 3,
      title: 'Post 3'
    }
  ])

  const counter = useCounterStore()

</script>

<style scoped>
  ul {
    margin-bottom: 30px;
  }
  .counter-button {
    font-size: 60px;
    width: 100%;
    background-color: pink;
  }

  .counter-button.yellow {
    background-color: yellow;
  }
</style>