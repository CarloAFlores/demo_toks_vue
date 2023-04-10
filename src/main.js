import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DKToast from 'vue-dk-toast';
import FloatingVue from 'floating-vue'

const GLOBAL_VARIABLES = {
  data(){
    return{
      base_url_services: 'http://localhost:8000'
    }
  }
}


const app = createApp(App).use(store).use(router).use(DKToast).use(FloatingVue,{
    themes: {
        'tooltip-menu': {
          '$extend': 'tooltip',
          triggers: ['click'],
          autoHide: true,
          placement: 'top',
        },
      },
});
app.mixin(GLOBAL_VARIABLES)
app.mount('#app');


