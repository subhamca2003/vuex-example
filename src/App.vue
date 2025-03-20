<template>
  <div id="app">
    <nav class="tab-menu">
      <router-link to="/home" class="tab" active-class="active">Home</router-link>
      <router-link to="/data-binding" class="tab" active-class="active">Data Binding</router-link>
      <router-link to="/todos" class="tab" active-class="active">Todo List</router-link>
      <router-link to="/vuex" class="tab" active-class="active">Todo List using Vuex</router-link>
    </nav>
    <router-view/>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Parent Component</h1>
    <input v-model="sharedState.message" />
    <ChildComponent />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TodoList />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
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


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tab-menu {
  display: flex;
  justify-content: center; /* Center the tabs */
  background-color: #f3f3f3; /* Background for the tab menu */
  border-bottom: 2px solid #ccc; /* Bottom border for styling */
  padding: 10px 0; /* Padding around the tabs */
}

.tab {
  margin: 0 15px; /* Spacing between tabs */
  padding: 10px 20px; /* Padding for each tab */
  text-decoration: none; /* Remove underline */
  color: #555; /* Text color */
  border: 1px solid transparent; /* Border for tab */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s, color 0.3s; /* Transition for hover effects */
}

.tab:hover {
  background-color: #e0e0e0; /* Background color on hover */
  color: #000; /* Text color on hover */
}

.active {
  background-color: #007bff; /* Active tab background color */
  color: white; /* Active tab text color */
  border: 1px solid #007bff; /* Active tab border */
}
</style>