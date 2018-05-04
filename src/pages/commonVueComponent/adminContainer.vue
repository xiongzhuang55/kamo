<template>
  <el-container id="admin-container">
    <el-aside width="188px">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header height="45px">{{$store.state.userInfo.name}} - {{$store.state.userInfo.phone}}</el-header>
      <el-breadcrumb separator="/" v-show="breadcrumb.length">
        <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import sideBar from "./sideBar.vue";

  export default {
    data() {
      return {

      };
    },
    methods: {
      // change() {
      //   this.breadcrumb = this.$store.state.breadcrumb;
      //   console.log(1, this.$store.state.breadcrumb)
      // }
    },
    computed: {
      breadcrumb() {
        return this.$store.state.breadcrumb;
      }
    },
    components: {
      sideBar
    },
    created() {
      // console.log('---------------admin-created');
    },
    // beforeCreate(){
    //   console.log('---------admin---------------beforeCreate')
    // },
    // beforeMount(){
    //   console.log('--------admin-------beforeMount')
    // },
    // mounted(){
    //   console.log('------admin---------mounted')
    // },
    // beforeUpdate(){
    //   console.log('----admin---------beforeUpdate')
    // },
    // updated(){
    //   console.log('---admin-------updated')
    // },
    // beforeDestroy(){
    //   console.log('---admin---------beforeDestroy')
    // },
    // destroyed(){
    //   console.log('---admin--------destroyed')
    // }
  };
</script>

<style lang='scss'>
  /*整个容器*/
  #admin-container {
    min-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding-left:188px;
    /*右侧头部*/
    .el-header {
      margin-bottom: 10px;
      text-align: right;
      line-height: 45px;
      background-color: #fff;
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, .1);
    }
    /*面包屑*/
    .el-breadcrumb {
      padding: 2px 25px 0;
      height: 40px;
      .el-breadcrumb__item {
        &:nth-child(1) {
          .el-breadcrumb__inner {
            color: #969596;
            font-size: 16px;
            line-height: 42px;
          }
        }
        &:nth-child(2) {
          .el-breadcrumb__inner {
            color: #181517;
            font-size: 20px;
            line-height: 38px;
          }
        }
      }
    }
    /*侧边栏*/
    .el-aside{
      overflow: hidden;
      overflow-y: auto;
      position:fixed;
      top:0;
      bottom:0;
      left:0;
      height: 100%;
      &::-webkit-scrollbar {display:none}
    }
    /*主体内容*/
    .el-main {
      margin: 10px 10px 0;
      background-color: #fff;
      padding: 20px 40px 10px 30px;
      font-size:14px;
    }
  }
</style>
