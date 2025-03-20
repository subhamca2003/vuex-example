<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodoTitle" placeholder="Add a new todo" />
    <button @click="addTodo">Add Todo</button>

    <select v-model="filter" @change="updateFilteredTodos">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <span :class="{ completed: todo.completed }" @click="toggleComplete(todo)">{{ todo.title }}</span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      newTodoTitle: '',
      filter: 'all'
    };
  },
  computed: {
    ...mapState(['todos']),
    ...mapGetters(['filterTodos']),
    filteredTodos() {
      return this.filterTodos(this.filter);
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
    addTodo() {
      if (!this.newTodoTitle.trim() || this.todos.some(todo => todo.title === this.newTodoTitle)) {
        alert('Todo cannot be empty or already exists!');
        return;
      }
      const newTodo = {
        id: Date.now(), // Simple unique ID using timestamp
        title: this.newTodoTitle,
        completed: false
      };
      this.$store.commit('addTodo', newTodo);
      this.newTodoTitle = '';
    },
    toggleComplete(todo) {
      const updatedTodo = { ...todo, completed: !todo.completed };
      this.$store.commit('updateTodo', updatedTodo);
    },
    deleteTodo(todoId) {
      this.$store.commit('deleteTodo', todoId);
    },
    updateFilteredTodos() {
      // This method is triggered when the filter changes
      // Effectively re-computes filteredTodos using the getters
    }
  },
  mounted() {
    // Fetch todos from the API when the component mounts
    this.fetchTodos();
  }
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