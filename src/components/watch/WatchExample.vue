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
        number: 0,  // The number to be watched
        square: 0    // The square of the number
      };
    },
    watch: {
      // Watch the 'number' property for changes
      number(newValue) {
        this.square = newValue * newValue; // Calculate square whenever 'number' changes
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