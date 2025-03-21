<template>
    <div>
      <h1>Hover Over the Text</h1>
      <p v-color-change="color">Hover over this text to change its color!</p>
      <p :style="{ color: color }">This text color changes!</p>
      <button @click="toggleColor">Toggle Text Color</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        color: 'blue' // Initial color
      };
    },
    methods: {
      toggleColor() {
        // Toggle between blue and red
        this.color = this.color === 'blue' ? 'red' : 'blue';
      }
    },
    directives: {
      colorChange: {
        // Hook for binding the directive to the element
        bind(el, binding) {
          // Set the initial color based on the value provided
          el.style.color = binding.value;
  
          // Define the mouseover and mouseout handlers
          el.onmouseenter = () => {
            el.style.color = binding.value === 'blue' ? 'green' : 'purple'; // Change color on hover
          };
          el.onmouseleave = () => {
            el.style.color = binding.value; // Reset color when mouse leaves
          };
        },
        // Clean up the event listeners when the element is unbound
        unbind(el) {
          el.onmouseenter = null;
          el.onmouseleave = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  p {
    transition: color 0.3s; /* Smooth transition for color changes */
  }
  </style>