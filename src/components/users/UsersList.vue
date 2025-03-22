<template>
    <div>
      <h1>User List</h1>
      <div v-if="loading">Loading users...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <p v-else>No users found.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [], // Array to hold the fetched users
        loading: true, // Indicates loading state
        error: null // Holds error message if any
      };
    },
    created() {
      this.fetchUsers(); // Fetch users when the component is created
    },
    methods: {
      fetchUsers() {
        const token = localStorage.getItem('accessToken'); // Retrieve token from local storage
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:3000/users',
          headers: {
            'Authorization': `${token}` // Use the token in the authorization header
          }
        };
  
        axios.request(config)
          .then(response => {
            this.users = response.data; // Set users to the response data
            this.loading = false; // Update loading state
          })
          .catch(error => {
            this.error = 'Error fetching users: ' + error.message; // Set error message
            this.loading = false; // Update loading state
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>