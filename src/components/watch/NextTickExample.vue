<template>
    <div>
      <h1>Vue.nextTick Example</h1>
      <button @click="updateMessage">Change Message</button>
      <input type="text" v-model="message" ref="inputField" placeholder="Focus will be here" />
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, world!'
      };
    },
    methods: {
      updateMessage() {
        // Update the message
        this.message = 'Hello, Vue.js!';
        
        // Use nextTick to wait until the DOM updates
        this.$nextTick(() => {
          // Focus on the input field after the DOM has been updated
          this.$refs.inputField.focus();
        });
      }
    }
  };
  </script>
  
  <style>
  button {
    margin-bottom: 10px;
  }
  </style>