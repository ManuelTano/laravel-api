<template>
  <div id="home-page">
    <post-list />
  </div>
</template>

<script>
import PostList from '../posts/PostList.vue';
export default {
    name: 'HomePage',
    components: {PostList}
}
</script>

<style>

</style>