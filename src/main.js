import Vue from 'vue';
import router from '@/utils/Router';

import App from '@/App';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');