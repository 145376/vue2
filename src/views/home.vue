<template>
  <div class="home">
    <div class="panels">
      <div class="panel" v-for="(item, index) in panelList" :key="index" @click="navTo(item.link)">
        <div class="left">
          <span
            :class="['iconfont', item.icon]"
            :style="{ color: item.color }"
          ></span>
        </div>
        <div class="right">
          <div class="right-title">{{ item.title }}</div>
          <div class="right-data" v-text="prefix(item)"></div>
        </div>
      </div>
    </div>
    <div class="chart" id="chart-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelList: [
        {
          id: 1,
          title: "Member",
          icon: "icon-renyuan",
          color: "lime",
          data: 1000,
          link: 'Nested1-1'
        },
        {
          id: 2,
          title: "Price",
          icon: "icon-jiage",
          color: "red",
          data: 1000,
        },
        {
          id: 3,
          title: "Article",
          icon: "icon-16",
          color: "#333",
          data: 1000,
        },
        {
          id: 4,
          title: "Message",
          icon: "icon-mail",
          color: "blue",
          data: 1000,
        },
      ],
    };
  },
  mounted() {
    console.log('挂载了');
    this.drawChart();
  },
  destroyed(){
    console.log('销毁了');
  },
  methods: {
    prefix(item) {
      let data;
      switch (item.title) {
        case "Member":
          data = item.data + "人";
          break;
        case "Price":
          data = "￥" + item.data;
          break;
        case "Article":
          data = item.data + "章";
          break;
        case "Message":
          data = item.data + "封";
          break;
        default:
          "";
      }
      return data;
    },
    drawChart() {
      let chart = this.$chart.init(document.getElementById("chart-line"));
      chart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
    },
    navTo(link){
      this.$router.push({name: link})
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  .panels {
    display: flex;
    align-items: center;
    .panel {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 25px;
      padding: 10px 20px;
      background-color: #fff;
      box-shadow: 0 0 5px 0 #ccc;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 10px 0 #ccc;
      }
      &:last-child {
        margin-right: 0;
      }
      .left {
        flex: 1;
        .iconfont {
          font-size: 45px;
        }
      }
      .right {
        flex: 3;
        &-title {
          font-size: 18px;
          margin-bottom: 20px;
        }
        &-data {
          font-size: 16px;
        }
      }
    }
  }
  .chart{
    height: 500px;
    margin-top: 40px;
  }
}
</style>