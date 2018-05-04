// vuex doc is https://vuex.vuejs.org/zh-cn/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            name: '许文杰',
            phone: '15874784638'
        },
        breadcrumb: []
    },
    getters: {

    },
    mutations: {
        modifyBreadcrumb(state, newBreadcrumb) {
          return state.breadcrumb = newBreadcrumb;
        }
    },
    actions: {}
})
