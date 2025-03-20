import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/todo/TodoList.vue';
import Home from './components/HomePage.vue'; // You will create this component next
import TodoListVuex from './components/vuex/TodoList.vue';
import DataBinding from './components/databinding/DataBinding.vue';

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/vuex',
    name: 'TodoList using Vuex',
    component: TodoListVuex,
  },
  {
    path: '/data-binding',
    name: 'Data Binding',
    component: DataBinding,
  }
];

export default new Router({
  mode: 'history', // Use the history mode for cleaner URLs
  routes
});
