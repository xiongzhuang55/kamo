<template>
  <div class="div-relative">
    <charge-add></charge-add>
    <charge-table :tableData="tableData"></charge-table>
  </div>
</template>

<script>
  import chargeAdd from './chargeAdd.vue'
  import chargeTable from './chargeTable.vue'
  export default {
    name: "order",
    components:{chargeAdd,chargeTable},
    data() {
      return {
        activeName:'first',
        tableData: [{
          number: '007',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }, {
          number: '008',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }, {
          number: '009',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>
