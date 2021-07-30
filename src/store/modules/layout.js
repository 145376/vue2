const state = {
  sidebar:{
    open: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR({sidebar}){
    sidebar.open = !sidebar.open
  }
}

export default {
  namespaced: true,
  state,
  mutations
}