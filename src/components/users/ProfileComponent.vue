<template>
    <div>
      <h1>Your Profile</h1>
      <p>Welcome to your profile page!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
        logout() {
            // Emit event to notify parent about the logout action
            this.$emit('logout'); // Emit the 'logout' event

            // Optionally, redirect to login page or call other methods
            //this.$router.push('/login'); // Redirect to the login page
            }    
    }
  };
  </script>
  
  <style>
  /* Styles for your component */
  </style>
