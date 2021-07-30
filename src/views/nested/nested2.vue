<template>
  <div class="nested2">
    <div :class="iconStyle"
         @click="iconStyle.active = !iconStyle.active"></div>
         <my-a type="danger" @click="handleEevent">自定义按钮</my-a>
    <div id="box">1111</div>
  </div>
</template>

<script>
import myA from './a.vue'
export default {
  components:{
    myA
  },
  data() {
    return {
      iconStyle: {
        iconfont: true,
        'icon-dianzan': true,
        active: false,
      },
      width: 0,
      time: 60,
      status: 0
    }
  },
  created(){
    this.$nextTick(() => {
      console.log(document.getElementById('box'));
    })
  },
  methods: {
    handleEevent(){
      console.log('点击了');
    }
  },
}
</script>

<style lang="scss" scoped>
.nested2 {
  .iconfont {
    &.active {
      display: inline-block;
      animation: thumbs 1s ease-in-out forwards;
    }
  }
  .progress {
    width: 800px;
    height: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 20px 0 #333;
    .bg {
      // width: 0px;
      height: 100%;
      border-radius: 10px;
      background-color: red;
      transition: width 20s linear;
      box-shadow: 0 0 20px 0 #fff;
    }
  }
  #canvas{
    margin-top: 10px;
  }
}
// @keyframes thumbs {
//   25%{
//     transform: translateY(-20px);
//   }
//   50%{
//     transform: translateY(0);
//   }
//   75%{
//     transform: translateY(-10px);
//   }
//   100%{
//     transform: translateY(0);
//     color: red;
//   }
// }
@keyframes thumbs {
  100% {
    transform: rotateZ(360deg * 3);
    font-size: 40px;
    color: red;
  }
}
</style>