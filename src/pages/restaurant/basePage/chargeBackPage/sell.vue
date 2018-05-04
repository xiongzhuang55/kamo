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
    name: "sell",
    components:{chargeAdd,chargeTable},
      data() {
        return {
          activeName:'first',
          tableData: [{
            number: '004',
            name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
          }, {
            number: '005',
            name: '顾客点错，菜品不新鲜，不喜欢，上菜慢'
          }, {
            number: '006',
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
