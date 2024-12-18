import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import SvgIcon from "@/components/SvgIcon.vue";
import './assets/iconfont/iconfont.js';

const app = createApp(App)
app.use(router)
app.component('SvgIcon', SvgIcon);
app.mount('#app')
