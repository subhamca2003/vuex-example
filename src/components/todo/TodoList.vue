<template>
    <div>
      <h1>THIS IS NORMAL Todo List</h1>
      <ul v-if="todos.length">
        <li v-for="todo in todos" :key="todo.id">
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        </li>
      </ul>
      <p v-else>No todos available.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todos: [], // Array to hold fetched todos
      };
    },
    created() {
      this.fetchTodos(); // Fetch todos when the component is created
    },
    methods: {
      fetchTodos() {
        // Use Fetch API to get todos from the API
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data
          })
          .then(data => {
            this.todos = data; // Set the todos to the fetched data
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>