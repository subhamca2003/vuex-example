<template>
  <div>
    <h2>Child Component</h2>
    <p>Message from Parent: {{ sharedState.message }}</p>
    <button @click="injectedGreet">Greet</button>
  </div>
</template>

<script>
export default {
  inject: ['sharedState', 'greet'], // Inject the reactive object and method
  methods: {
    injectedGreet() {
      this.greet(); // Call the injected method
    },
  },
};
</script>