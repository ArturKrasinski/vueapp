import Vue from 'vue'
import VueFire from 'vuefire'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import FirebaseExample from '@/components/FirebaseExample'

Vue.use(Router)
Vue.use(VueFire)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/tasks',
        name: 'Lista zadań',
        component: Tasks
    },
    {
        path: '/firebase',
        name: 'Firebase',
        component: FirebaseExample
    }]
})
