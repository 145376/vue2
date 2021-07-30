const state = {
  path:{
    current: ['home']
  }
}

const mutations = {
  SET_CURRENTPATH({path}, str){
    path.current = str
  }
}

export default {
  namespaced: true,
  state,
  mutations
}