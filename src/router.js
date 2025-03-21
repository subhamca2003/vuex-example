import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/todo/TodoList.vue';
import Home from './components/HomePage.vue'; // You will create this component next
import TodoListVuex from './components/vuex/TodoList.vue';
import DataBinding from './components/databinding/DataBinding.vue';
import PropDrilling from './components/props-drilling/PropsDrilling.vue';
import WatchExample from './components/watch/WatchExample.vue';
import ComputedComponent from './components/watch/ComputedComponent.vue';

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
    },
    {
        path: '/prop-drilling',
        name: 'Prop Drilling',
        component: PropDrilling,
    },
    {
        path: '/watch-example',
        name: 'Watch Example',
        component: WatchExample,
    },
    {
        path: '/computed-example',
        name: 'Computed Example',
        component: ComputedComponent,
    }
];

export default new Router({
    mode: 'history', // Use the history mode for cleaner URLs
    routes
});
