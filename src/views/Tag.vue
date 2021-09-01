<template>
  <div class="tag"></div>
</template>

<script>
import { ref } from 'vue'
import getPosts from '../composables/getPosts'
export default {
  setup() {
    const { posts, error, load } = getPosts()

    load()
  }
}
</script>

<style></style>
