<template>
  <div>
    <div class="res-add-btn-box">
      <div class="res-add-btn" @click="dialogFormVisible = true"></div>
    </div>
    <el-dialog title="添加餐桌" :visible.sync="dialogFormVisible" width="652px">
      <el-form :model="form" label-width="70px">
        <el-form-item label="餐桌编号">
          <el-input v-model="form.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="餐桌名称">
          <el-input v-model="form.name" auto-complete="off" placeholder="请输入餐台名称"></el-input>
        </el-form-item>
        <el-form-item label="所属区域">
          <el-select v-model="form.region" placeholder="请选择区域" @change="change">
            <el-option label="大厅" value="大厅"></el-option>
            <el-option label="包厢" value="包厢"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="餐桌类型">
          <el-select v-model="form.region2" placeholder="请选择餐桌类型">
            <el-option label="A" value="A" :disabled="form.region == '包厢'"></el-option>
            <el-option label="B" value="B" :disabled="form.region == '包厢'"></el-option>
            <el-option label="C" value="C" :disabled="form.region == '大厅'"></el-option>
            <el-option label="D" value="D" :disabled="form.region == '大厅'"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="容纳人数">
          <el-select v-model="form.region3" placeholder="请选择餐桌类型">
            <el-option label="2人" value="2人" :disabled="form.region == '包厢'"></el-option>
            <el-option label="4人" value="4人" :disabled="form.region == '包厢'"></el-option>
            <el-option label="12人" value="12人" :disabled="form.region == '大厅'"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%;text-align: center" border>
      <el-table-column label="编号" align="center" prop="number"></el-table-column>
      <el-table-column label="餐区名称" align="center" prop="type"></el-table-column>
      <el-table-column label="餐桌名" align="center" prop="name"></el-table-column>
      <el-table-column label="餐区类型" align="center" prop="typeNum"></el-table-column>
      <el-table-column label="容纳人数" align="center" prop="people"></el-table-column>
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
      name: "tableManage",
      data() {
        return {
          dialogFormVisible: false,
          form:{
            number:'001',
            name: '',
            region:'',
            region2:'',
            region3:'',
          },
          tableData: [{
            number: '001',
            type:'大厅',
            name: '1号桌',
            typeNum:'A',
            people:'2人'
          }, {
            number: '002',
            type:'大厅',
            name: '2号桌',
            typeNum:'B',
            people:'4人'
          }, {
            number: '003',
            type:'包厢',
            name: '2号包厢',
            typeNum:'C',
            people:'12人'
          }, {
            number: '004',
            type:'包厢',
            name: '3号包厢',
            typeNum:'D',
            people:'12人'
          }]
        }
      },
      methods: {
        change(){
          console.log(this.form.region)
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.$confirm('确定要删除该餐桌吗？', '提示', {
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
