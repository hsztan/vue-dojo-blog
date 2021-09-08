import { ref } from '@vue/reactivity'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const postsCol = collection(db, 'posts')
      const q = query(postsCol, orderBy('createdAt', 'desc'))
      const res = await getDocs(q)
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts
