<template>
    <div>
        <h1>Events:</h1>
        <div v-if="loading">Events Loading...</div>

        <ul v-if="posts.length">
            <li v-for="post in posts" :key="post.post_id">
                <router-link :to="'/posts/' + post.post_id">
                    {{  post.text }}
                </router-link>

            </li>
        </ul>

        <div v-if="error">{{ error }}</div>
    </div>
</template>
