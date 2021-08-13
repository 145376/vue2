<script>
export default {
  functional: true,
  props:{
    text:{
      type: String
    }
  },
  render(h, {props, children}) {
    let {text} = props
    let vnode = children[1]
    return h('div', {
      class:{
        custom: true
      }
    }, [
      '1111',
      h('p', {
        style:{
          fontSize: '20px'
        }
      }, [
        text,
        vnode
      ])
    ])
  },
}
</script>

<style lang="scss" scoped>
.custom{
  color: red;
}
</style>