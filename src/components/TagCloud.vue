<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="(tag, index) in tags" :key="index">
      <router-link :to="{ name: 'Tag', params: { tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/useTags'

export default {
  props: ['posts'],
  setup(props) {
    const tags = useTags(props.posts)
    return { tags }
  }
}
</script>

<style>
.tag-coud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: rgb(122, 113, 113);
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
