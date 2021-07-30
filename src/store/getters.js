export default {
  sidebarState(state){
    return state.sidebar.sidebar.open
  },
  currentPath(state){
    return state.app.path.current
  }
}