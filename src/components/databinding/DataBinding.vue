<template>
  <div>
    <h1>Data Binding</h1>
    <input type="text" v-model="message" placeholder="Type something here" />
    <p>You typed: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}

h1 {
  margin-bottom: 20px;
}

input {
  margin-right: 10px;
}

button {
  margin-left: 10px;
}
</style>