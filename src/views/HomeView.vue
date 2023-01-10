<template>
  <v-container>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1">
          <v-img height="200" :src="`/${post.image}`"></v-img>
          <v-btn
            class="ml-4 mt-3"
            variant="outlined"
            size="small"
            color="primary"
          >
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">{{ post.title }}</v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.content.substring(0, 97) + "..." }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/api";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await API.getAllPosts();
  },
};
</script>
