<template>
    <div>
      <h1>Data Fetching with Callbacks</h1>
      <button @click="fetchDataWithCallback">Fetch Data</button>
      <p v-if="error">{{ error }}</p>
      <ul v-if="data">
        <li v-for="item in data" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: null,
        error: null
      };
    },
    methods: {
      fetchDataWithCallback() {
        this.getData((result, err) => {
          if (err) {
            this.error = err;
          } else {
            this.data = result;
          }
        });
      },
      getData(callback) {
        setTimeout(() => {
          // Simulate an API call
          const success = true; // Change this to false to simulate an error
          if (success) {
            callback(
              [
                { id: 1, title: 'Item One' },
                { id: 2, title: 'Item Two' },
              ],
              null
            );
          } else {
            callback(null, 'Error fetching data');
          }
        }, 1000); // Simulated delay
      }
    }
  };
  </script>