<template>
  <section id="greens-admin">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="(tab,index) in tabs" :key="index" :label="tab.label" :name="tab.name"></el-tab-pane>
    </el-tabs>
    <component :is="activeTab"></component>
  </section>
</template>
<script>
  import foodList from './foodList'
  import mealList from './mealList'
  import activities from './activities'
  export default {
    data() {
      return {
        activeTab: 'foodList',
        tabs: [
          {
            label: '菜品列表',
            name: 'foodList'
          },
          {
            label: '套餐列表',
            name: 'mealList'
          },
          {
            label: '活动列表',
            name: 'activities'
          }
        ]
      };
    },
    components:{
      foodList,
      mealList,
      activities
    },
    methods: {
      // 选中时触发
      handleClick(tab) {
        // console.log(tab.name);
        this.activeTab = tab.name;
        sessionStorage.setItem('footActiveTab',tab.name);
      }
    },
    computed: {},
    created() {
      this.$store.commit("modifyBreadcrumb", [{title: "餐饮管理"}, {title: "菜品管理"}]);
      if(sessionStorage.getItem('footActiveTab')){
        this.activeTab = sessionStorage.getItem('footActiveTab');
      }
    }
  };
</script>

<style lang="scss" scoped>
  #greens-admin {

  }
</style>
