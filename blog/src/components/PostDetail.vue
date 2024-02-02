<template>
    <main role="main" class="container">
        <div class="row">
            <div class="col-md-8 blog-main">
                <div class="blog-post">
                    <h2 class="blog-post-title">{{ posts[$route.params.id].title }}</h2>
                    <p class="blog-post-meta">{{ posts[$route.params.id].date }}</p>
                    <p>{{ posts[$route.params.id].content }}</p>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name : 'postDetail',
    props : {
        posts : Array
    }
}
</script>

<style>

</style>