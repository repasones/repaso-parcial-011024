import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Card from 'primevue/card';
import i18n from './i18n';
import router from './routes/index'
import Toolbar from 'primevue/toolbar';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';


const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component("pv-card", Card);
app.component("pv-toolbar", Toolbar);
app.component("pv-selectbutton", SelectButton);
app.component("pv-button", Button);
app.mount('#app');
