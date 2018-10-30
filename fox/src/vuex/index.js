/**
 * Created by liying on 2018/9/27.
 */
//初始化vuex
import Vue from 'vue'
import Vuex from 'vuex'
import {
  state
} from './state.js'
//import state form './state.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'
Vue.use(Vuex);
//如果引用的东西应用到了vue，那么就要Vue.use一下
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
//我们需要在根实例中注入
export {
  store
}
