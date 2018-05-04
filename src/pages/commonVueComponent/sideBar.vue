<template>
  <el-row id="side-bar">
    <el-col :span="24">
      <router-link class="logo-box" to="/">kamo</router-link>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#2c2b2c"
        text-color="#969596"
        active-text-color="#969596"
        @open="handleOpen">
        <el-submenu v-for="(item,index) in menus" :key="index" :index="index+1+''" :disabled="!item.disabled">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item-group v-if="item.list.length" v-for="(li,i) in item.list" :key="i">
            <el-menu-item :index="li.path" @click="changeFoodItem(li.path)">{{li.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeMenu:'foodAdmin',
        menus: [
          {
            title: "商户管理",
            route: {},
            disabled: false
          },
          {
            title: "交易报表",
            route: {},
            disabled: false
          },
          {
            title: "活动管理",
            route: {},
            disabled: false
          },
          {
            title: "会员管理",
            route: {},
            disabled: false
          },
          {
            title: "餐饮管理",
            route: {},
            disabled: true,
            list: [
              {
                title:'菜品管理',
                path:'foodAdmin'
              },
              {
                title:'员工管理',
                path:'employeeAdmin'
              },
              {
                title:'基础管理',
                path:'baseSetting'
              },
              {
                title:'报表统计',
                path:'statisticsAdmin'
              }
            ]
          },
          {
            title: "系统设置",
            route: {},
            disabled: false
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      changeFoodItem(path){
        this.activeMenu = path;
        console.log(path);
        this.$router.push('/admin/'+path);
        sessionStorage.setItem('activeMenu',path);
      }
    },
    created(){
      if(sessionStorage.getItem('activeMenu')){
        this.activeMenu = sessionStorage.getItem('activeMenu');
      }
    }
  };
</script>

<style lang='scss'>
  $side-bg:#2c2b2c;
  $--color-primary:#FD6363;
  #side-bar {
    min-height: 100vh;
    /*&::-webkit-scrollbar {display:none}*/
    .logo-box {
      display: block;
      height: 120px;
      line-height: 120px;
      font-size: 3.5em;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      color: $--color-primary;
      background-color: $side-bg;
      text-align: center;
      text-decoration: none;
    }
    .el-menu-vertical-demo {
      border-right: none;
      min-height: calc(100vh - 120px);
    }
    .el-menu-item {
      text-align: center;
      border-left:5px solid $side-bg;
      width:188px;
      box-sizing: border-box;
    }
    .is-active{
      background-color: #000;
      border-left-color: $--color-primary;
    }
  }

</style>


