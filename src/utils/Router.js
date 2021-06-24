import Vue from 'vue';
import VueRouter from 'vue-router';

import Setup from '@/views/Setup';

Vue.use(VueRouter);

const routes = [
    {
        path: '/setup',
        name: 'setup',
        component: Setup
    },
    {
        path: '/auction/:CID/:address',
        name: 'auction',
        props: true,
        component: () => import(/* webpackChunkName: "auction" */ '@/views/Auction.vue')
    },
    {
        path: '*',
        redirect: { name: 'setup' }
    }
]

export default new VueRouter({ routes });