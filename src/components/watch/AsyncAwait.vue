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
      async fetchUserData() {
        try {
          const user = await this.getUser(1); // Fetch user data
          this.posts = await this.getPosts(user.id); // Fetch posts for the user
        } catch (err) {
          this.error = err; // Handle any errors
        }
      },
      // Simulated asynchronous function to fetch user data
      getUser(userId) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = true; // Change to false to simulate an error
            if (success) {
              resolve({ id: userId, name: 'John Doe' });
            } else {
              reject('Error fetching user data');
            }
          }, 1000);
        });
      },
      // Simulated asynchronous function to fetch posts
      getPosts() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = true; // Change to false to simulate an error
            if (success) {
              resolve([
                { id: 1, title: 'User Post 1' },
                { id: 2, title: 'User Post 2' }
              ]);
            } else {
              reject('Error fetching posts');
            }
          }, 1000);
        });
      }
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>