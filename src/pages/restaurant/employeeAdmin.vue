<template>
    <section id="greens-admin">员工管理</section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    breadcrumb() {
      console.log('word-change');
      return this.$store.state.breadcrumb;
    }
  },
  created() {
    this.$store.commit("modifyBreadcrumb", [{title:"餐饮管理"},{title:"员工管理"}]);
    console.log(this.$store.state.breadcrumb)
  },
  mounted(){
    console.log('------employee---------mounted');
    // this.$store.commit("modifyBreadcrumb", ["餐饮管理","员工管理"]);
  },
};
</script>

<style lang="scss">

</style>
