<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID {{ $route.params.id }} here!</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goHomeToFirstPost">Go to the first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const showPostId = () => {
    alert(`The ID of this post is: ${ route.params.id }`)
  }

  const goHomeIn3Seconds = () => {
    setTimeout(() => {
      router.push({ name: 'home' })
    }, 3000)
  }

  const goHomeToFirstPost = () => {
    router.push({
      name: 'postDetail',
      params: {
        id: 1
      }
    })
  }
</script>

<style scoped>
p {
  margin-top: 30px;
}
</style>