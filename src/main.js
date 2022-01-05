import { createApp } from 'vue';
import App from './App.vue';
import GenPassword from './components/GenPassword.vue';

const app = createApp(App);

app.component('gen-password',GenPassword);

app.mount('#app')
