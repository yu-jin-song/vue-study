<template>
    <main role="main" class="container">
        <div class="row">
            <div class="col-md-8 blog-main">
                <h3 class="pb-4 mb-4 font-italic border-bottom">
                    Content
                </h3>

                <div class="blog-post" v-for="post in posts" :key="post">
                    <h2 class="blog-post-title" @click="$router.push(`/detail/${ post.number }`)">
                        <!-- <router-link to="/detail"> -->
                            {{ post.title }}
                        <!-- </router-link> -->
                    </h2>
                    <p class="blog-post-meta">{{ post.date }}</p>
                </div>
            </div>
            <Sidebar />
        </div>
    </main>
</template>

<script>
import Sidebar from './Sidebar.vue';
export default {
    name : 'PostList',
    props : {
        posts : Array
    },
    components : {
        Sidebar : Sidebar
    }
}
</script>

<style>

</style>