<template>
  <div>
    <el-table :data="tableData" style="width: 100%;text-align: center" border>
      <el-table-column label="名称" align="center" prop="name"></el-table-column>
      <el-table-column label="价格" align="center" prop="price"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
      name: "batchingManage",
      data() {
        return {
          tableData: [{
            price: '5.00元',
            name: '红豆'
          }, {
            price: '5.00元',
            name: '珍珠'
          }, {
            price: '5.00元',
            name: '烧仙草'
          }, {
            price: '5.00元',
            name: '布丁'
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
