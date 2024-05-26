import {createApp} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import router from '@/GenerationRouter';
import store from "@/services/store";
import funcPlugins from '@/plugins/func';
import globalComponents from '@/plugins/global-components';
import dayjs from '@/plugins/dayjs';

let app = createApp(App);
app.use(router.instance);
app.use(store);
app.use(globalComponents);
app.use(dayjs);
app.use(funcPlugins);

app.config.errorHandler = (err, vm, info) => {
    console.log(`Global error: ${err.toString()}`);
};

app.mount('#app');