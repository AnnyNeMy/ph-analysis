import 'bootstrap/dist/css/bootstrap.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import store from './store/store';

//createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(router);

app.use(store);
//router.isReady().then(() => app.mount('#app'))
app.mount('#app');

