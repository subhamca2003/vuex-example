<template>
    <div>
      <h1>User Posts</h1>
      <button @click="fetchUserData">Fetch User Data</button>
      <div v-if="error" class="error">{{ error }}</div>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
        error: null
      };
    },
    methods: {
      fetchUserData() {
        // Simulated API call to fetch user data
        this.getUser(1, (user, userError) => {
          if (userError) {
            this.error = userError;
            return;
          }
          // Nested call to fetch posts for that user
          this.getPosts(user.id, (posts, postError) => {
            if (postError) {
              this.error = postError;
              return;
            }
            this.posts = posts;
          });
        });
      },
      getUser(userId, callback) {
        setTimeout(() => {
          // Simulated user data
          const success = true;
          if (success) {
            callback({ id: userId, name: 'John Doe' }, null);
          } else {
            callback(null, 'Error fetching user data');
          }
        }, 1000);
      },
      getPosts(userId, callback) {
        setTimeout(() => {
          // Simulated posts data
          const success = true;
          if (success) {
            callback([
              { id: 1, title: 'User Post 1' },
              { id: 2, title: 'User Post 2' }
            ], null);
          } else {
            callback(null, 'Error fetching posts');
          }
        }, 1000);
      }
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>