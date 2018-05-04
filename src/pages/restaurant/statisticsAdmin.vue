<template>
    <section id="greens-admin" class="minWidth">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in navList" :key="index" :label="item.label" :name="item.name" :routerTo="item.routerTo"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </section>
</template>

<script>
export default {
  name: "statisticsAdmin",
  data() {
    return {
      activeName: 'orderCount',
      navList:[
        {
          label:'订单统计',
          name:'orderCount',
          routerTo:'orderCount'
        },
        {
          label:'营业分析',
          name:'businessAnalysis',
          routerTo:'businessAnalysis'
        },
        {
          label:'菜品销量统计',
          name:'dishCount',
          routerTo:'dishCount'
        }],
    };
  },
  created() {
    this.activeName = this.$route.name;
    this.$store.commit("modifyBreadcrumb", [{title:"餐饮管理"},{title:"报表统计"}]);
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({name:tab.$attrs.routerTo})
    }
  }
};
</script>

<style lang="scss">
$btnColor:#31C7A0;
button.el-button.search-btn.el-button--success{
  margin-left:30px;
  margin-bottom:20px;
  background-color: $btnColor;
  border-color: $btnColor;
}
</style>
