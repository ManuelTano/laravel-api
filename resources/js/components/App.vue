<template>
    <div class="content">
        <MyHeader :title="title" />
        <main class="container mt-3">
            <router-view> </router-view>
        </main>
    </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
import HomePage from "./pages/HomePage.vue";
export default {
    name: "App",
    components: {
        MyHeader,
        HomePage,
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