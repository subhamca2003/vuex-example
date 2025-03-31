import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './components/todo/TodoList.vue';
import Home from './components/HomePage.vue'; // You will create this component next
import TodoListVuex from './components/vuex/TodoList.vue';
import DataBinding from './components/databinding/DataBinding.vue';
import PropDrilling from './components/props-drilling/PropsDrilling.vue';
import WatchExample from './components/watch/WatchExample.vue';
import ComputedComponent from './components/watch/ComputedComponent.vue';
import NextTickExample from './components/watch/NextTickExample.vue';
import CallbacksComponent from './components/watch/CallbacksComponent.vue';
import PromisesExample from './components/watch/PromisesExample.vue';
import CallbackHell from './components/watch/CallbackHell.vue';
import AsyncAwait from './components/watch/AsyncAwait.vue';
import ColorChange from './components/custom-directive/ColorChange.vue';
import UsersList from './components/users/UsersList.vue';
import Login from './components/users/LoginComponent.vue';
import ProfileComponent from './components/users/ProfileComponent.vue';
import ProductList from './components/product/ProductList.vue'


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
    },
    {
        path: '/custom-directive',
        name: 'Custom Directive',
        component: ColorChange,
    },
    {
        path: '/next-tick-example',
        name: 'NextTickExample',
        component: NextTickExample,
    },
    {
        path: '/callbacks-example',
        name: 'CallbacksComponent',
        component: CallbacksComponent,
    },
    {
        path: '/promises-example',
        name: 'PromisesExample',
        component: PromisesExample,
    },
    {
        path: '/callback-hell',
        name: 'Callback Hell',
        component: CallbackHell,
    },
    {
        path: '/async-await',
        name: 'AsyncAwait',
        component: AsyncAwait,
    },
    {
        path: '/user-list',
        name: 'UsersList',
        component: UsersList,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/my-profile',
        name: 'ProfileComponent',
        component: ProfileComponent,
    },
    {
        path: '/product-list',
        name: 'ProductList',
        component: ProductList,
    },
];

export default new Router({
    mode: 'history', // Use the history mode for cleaner URLs
    routes
});
