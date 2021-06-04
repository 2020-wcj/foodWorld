import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 这里存的是状态
const state = {
  position: {},
  UserName: ''
}

// 这里是用来改变状态的。
// 想要触发mutation 需要commit
// mutation只是同步的，需要异步的话把在action执行commit
const mutations = {
  // val 为调用这个函数的时候传进来的值。
  setPosition (state, val) {
    state.position = val
  },
  setUserName (state, val) {
    state.userName = val
  }
}

// 异步操作mutation
const actions = {
  setPosition (state, val) {
    // 异步请求后端获取当前数据
    state.commit('setPosition', val)
  }
}

// 操作actions的话就需要  dispatch（外部用$store.dispatch(setPostiob , 'val')）

// 把store返回出去就行。文件里面如何写无所谓。

export default new Vuex.Store({
  state,
  mutations,
  actions
})
