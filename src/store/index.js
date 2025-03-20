import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      Vue.set(state.todos, index, updatedTodo);
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    }
  },
  actions: {
    fetchTodos({ commit }) {
      return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          commit('setTodos', response.data);
        });
    }
  },
  getters: {
    filterTodos: (state) => (filter) => {
      if (filter === 'completed') {
        return state.todos.filter(todo => todo.completed);
      } else if (filter === 'incomplete') {
        return state.todos.filter(todo => !todo.completed);
      } else {
        return state.todos;
      }
    }
  }
});
