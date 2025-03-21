<template>
    <div>
      <h1>Data Fetching with Promises</h1>
      <button @click="fetchDataWithPromise">Fetch Data</button>
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
      fetchDataWithPromise() {
        this.getData()
          .then(result => {
            this.data = result;
          })
          .catch(err => {
            this.error = err;
          });
      },
      getData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate an API call
            const success = true; // Change this to false to simulate an error
            if (success) {
              resolve([
                { id: 1, title: 'Item One' },
                { id: 2, title: 'Item Two' }
              ]);
            } else {
              reject('Error fetching data');
            }
          }, 1000); // Simulated delay
        });
      }
    }
  };
  </script>