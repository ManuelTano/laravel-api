<template>
    <div class="content">
        <MyHeader :title="title" />
        <main class="container mt-3">
            <PostList />
        </main>
    </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
import PostList from "./posts/PostList.vue";
export default {
    name: "App",
    components: {
        MyHeader,
        PostList,
    },
    data() {
        return {
            title: "Laravel API",
        };
    },
};
</script>

<style>
</style>