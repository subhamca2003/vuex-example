<template>
    <div>
      <h1>Watch Example</h1>
      <input type="number" v-model="number" placeholder="Enter a number" />
      <p>Square: {{ square }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        number: 0,  // The number input by the user
      };
    },
    computed: {
      // Computed property to calculate the square of the number
      square() {
        return this.number * this.number; // Automatically calculates and returns the square
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    padding: 5px;
    font-size: 16px;
  }
  </style>