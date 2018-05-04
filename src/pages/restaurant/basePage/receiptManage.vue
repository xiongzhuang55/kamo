<template>
  <div >
    <el-tabs v-model="activeName" @tab-click="handleClick" class="changeTab">
      <el-tab-pane label="收银小票" name="receiptManage" routerTo="receiptManage"></el-tab-pane>
      <el-tab-pane label="厨打小票" name="chefs" routerTo="chefs"></el-tab-pane>
      <el-tab-pane label="催单小票" name="reminder" routerTo="reminder"></el-tab-pane>
      <el-tab-pane label="消费清单" name="consume" routerTo="consume"></el-tab-pane>
      <el-tab-pane label="外卖小票" name="receiptSell" routerTo="receiptSell"></el-tab-pane>
      <el-tab-pane label="排队小票" name="receiptOrder" routerTo="receiptOrder"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      name: "receiptManage",
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
  @each $member in tangc, kuaic, chudf, chudh, cuic, xiaof, waim, paid{
    .#{$member} {
      background: url("../../../images/baseImg/#{$member}@2x.png") no-repeat;
      background-size: 100%;
    }
  }
</style>
