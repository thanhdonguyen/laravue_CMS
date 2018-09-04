
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-route'
import Vuex from 'vuex'
import {routes} from './routes'
import MainApp from './components/MainApp'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router,
    components:{
        MainApp
    }
});
