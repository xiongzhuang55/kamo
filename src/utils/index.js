import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//axios is doc : https://github.com/axios/axios
import Axios from 'axios'
Vue.prototype.axios = Axios.create({
    method: 'GET',
    baseURL: location.origin || '/',
    timeout: 1000
});

export default Vue
