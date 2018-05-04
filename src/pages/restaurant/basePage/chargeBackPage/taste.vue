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
    name: "taste",
    components:{chargeAdd,chargeTable},
    data() {
      return {
        activeName:'first',
        tableData: [{
          number: '013',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }, {
          number: '014',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }, {
          number: '015',
          name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="scss">

</style>
