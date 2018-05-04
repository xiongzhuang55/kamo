<template>
  <div id="charge">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="changeTab">
      <el-tab-pane label="堂吃退单理由" name="chargeBack" routerTo="chargeBack"></el-tab-pane>
      <el-tab-pane label="外卖拒收理由" name="sell" routerTo="sell"></el-tab-pane>
      <el-tab-pane label="预定取消理由" name="order" routerTo="order"></el-tab-pane>
      <el-tab-pane label="堂吃退菜理由" name="tangCai" routerTo="tangCai"></el-tab-pane>
      <el-tab-pane label="口味要求" name="taste" routerTo="taste"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
      name: "chargeBack",
      data() {
        return {
          activeName:'chargeBack',
        }
      },
    created() {
      this.activeName = this.$route.name;
    },
      methods: {
        handleClick(tab, event) {
          this.$router.push({name:tab.$attrs.routerTo})
        }
      }
    }
</script>

<style lang="scss">
#charge{
  min-width: 800px;
  .div-relative{
    position:relative;
  }
  .res-add-btn-box{
    position: absolute;
    top:-55px;
    right:0;
    display: flex;
    justify-content: flex-end;
    z-index: 9999;
    width:89px;
    height:40px;
  }
}
</style>
