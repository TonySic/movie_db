import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// on importe Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// pour la date en français
import moment from 'moment'
moment.locale('fr');

createApp(App).use(router).mount('#app')
