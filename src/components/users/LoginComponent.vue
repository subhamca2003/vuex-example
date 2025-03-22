<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" name="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" name="password" required />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async loginUser() {
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      });

      const config = {
        method: 'post',
        url: 'http://127.0.0.1:3000/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      try {
        const response = await axios.request(config);
        // Store the access token in local storage
        localStorage.setItem('accessToken', response.data.accessToken);
        this.$emit('login'); 
        // Route to the profile page after login
       // this.$router.push('/profile'); // Assuming the profile route is set up
      } catch (error) {
        this.error = 'Login failed! Please check your credentials.';
        console.error(error);
      }
    }
  }
};
</script>

<style>
/* Styles for your component */
</style>
