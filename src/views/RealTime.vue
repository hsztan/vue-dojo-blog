<template>
  <h1>Realtime data</h1>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config'
import { collection, orderBy, query, onSnapshot } from '@firebase/firestore'
import PostList from '../components/PostList.vue'

export default {
  components: { PostList },
  setup() {
    const posts = ref([])
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    onSnapshot(q, (snap) => {
      let docs = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
      posts.value = docs
      console.log(posts.value)
    })

    return { posts }
  }
}
</script>

<style></style>
