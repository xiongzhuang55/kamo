<template>
  <div>
    <div class="res-add-btn-box">
      <div class="res-add-btn" @click="dialogFormVisible = true"></div>
    </div>
    <el-dialog title="添加餐区" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="70px">
        <el-form-item label="编号">
          <el-input v-model="form.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="餐区">
          <el-input v-model="form.name" auto-complete="off" placeholder="请输入餐区名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%;text-align: center" border>
      <el-table-column label="编号" align="center" prop="number"></el-table-column>
      <el-table-column label="口味组名称" align="center" prop="type"></el-table-column>
      <el-table-column label="包含口味" align="center" prop="name"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" style="color: #31C7A0" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
      name: "diningManage",
      data() {
        return {
          dialogFormVisible: false,
          form:{
            number:'001',
            name: ''
          },
          tableData: [{
            number: '001',
            name: '大厅'
          }, {
            number: '002',
            name: '包厢'
          }, {
            number: '003',
            name: '包厢'
          }]
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.$confirm('确定要删除该餐区吗？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    }
</script>

<style lang="scss">

</style>
