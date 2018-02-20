import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import FirebaseExample from '@/components/FirebaseExample'
import ProductsMonolithTable from '@/components/ProductsMonolithTable'

Vue.use(Router)

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
    },
    {
        path: '/monolith-table',
        name: 'ProductsMonolithTable',
        component: ProductsMonolithTable
    }
    ]
})
