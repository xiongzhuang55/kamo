<template>
    <section id="baseSetting-admin" class="minWidth">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in navList" :key="index" :label="item.label" :name="item.name" :routerTo="item.routerTo"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </section>
</template>

<script>
export default {
  name: "baseSetting",
  data() {
    return {
      activeName: 'DiningManage',
      navList:[
        {
          label:'餐区管理',
          name:'DiningManage',
          routerTo:'DiningManage'
        },
        {
          label:'餐桌类型',
          name:'TableType',
          routerTo:'TableType'
        },
        {
          label:'餐桌管理',
          name:'TableManage',
          routerTo:'TableManage'
        },
        {
          label:'拼桌管理',
          name:'SpellManage',
          routerTo:'SpellManage'
        },
        {
          label:'茶位费管理',
          name:'coverManage',
          routerTo:'coverManage'
        },
        {
          label:'菜品分类',
          name:'dishClassify',
          routerTo:'dishClassify'
        },
        {
          label:'口味管理',
          name:'tasteManage',
          routerTo:'tasteManage'
        },
        {
          label:'规格管理',
          name:'formatManage',
          routerTo:'formatManage'
        },
        {
          label:'配料管理',
          name:'batchingManage',
          routerTo:'batchingManage'
        },
        {
          label:'退单理由',
          name:'chargeBack',
          routerTo:'chargeBack'
        },
        {
          label:'小票管理',
          name:'receiptManage',
          routerTo:'receiptManage'
        },
        {
          label:'预约管理',
          name:'orderManage',
          routerTo:'orderManage'
        },
        {
          label:'排队管理',
          name:'waitManage',
          routerTo:'waitManage'
        }
      ]
    };
  },
  computed: {
    breadcrumb() {
      return this.$store.state.breadcrumb;
    }
  },
  created() {
    if(this.$route.matched.length === 4){
      this.activeName = this.$route.path.split('/')[3]
    }
    else{
      this.activeName = this.$route.name;
    }
    this.$store.commit("modifyBreadcrumb", [{title:"餐饮管理"},{title:"基础管理"}]);
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({name:tab.$attrs.routerTo})
    }
  }
};
</script>

<style lang="scss">
  @import "../../styles/baseStyle";
#greens-admin .res-add-btn-box{
  margin-bottom:20px;
}
</style>
