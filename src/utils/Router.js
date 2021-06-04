import Vue from 'vue';
import VueRouter from 'vue-router';

import Setup from '@/views/Setup';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'setup',
        component: Setup
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import(/* webpackChunkName: "panel" */ '@/views/Panel.vue')
    }
]

export default new VueRouter({ routes });