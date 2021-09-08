import { ref } from 'vue'
import { getDocs, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const getPost = () => {
  const post = ref(null)
  const error = ref(null)

  const load = async (id) => {
    try {
      const postDoc = doc(db, `posts/${id}`)
      const snapShot = await getDoc(postDoc)
      if (!snapShot.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...snapShot.data(), id: snapShot.id }
    } catch (err) {
      error.value = err.message
      console.log('Error', error.value)
    }
  }

  return { post, error, load }
}

export default getPost
