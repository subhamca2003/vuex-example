<template>
    <div id="app">
      <h1>Parent Component</h1>
      <input v-model="sharedState.message" />
      <ChildComponent />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    name: 'App',
    components: {
      ChildComponent,
    },
    data() {
      return {
        // Use a reactive object
        sharedState: {
          message: 'Hello from Parent!',
        },
      };
    },
    provide() {
      return {
        // Provide the entire reactive object
        sharedState: this.sharedState,
        // You can also provide methods
        greet: this.greet,
      };
    },
    methods: {
      greet() {
        alert('Greetings from Parent!');
      },
    },
  };
  </script>