<template>
  <div>
    <div class="res-add-btn-box">
      <div class="res-add-btn" @click="dialogFormVisible = true"></div>
    </div>
    <el-dialog title="添加规格" :visible.sync="dialogFormVisible" width="652px">
      <div class="dialog-intro">不同规格用"/"分隔，例如"大份/中份/小份"；只是得两个不同规格</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >
        <el-form-item label="计价单位">
          <el-input v-model="ruleForm.title" placeholder="请输入10个以内汉字或字母" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="单位规格" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
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
      name: "formatManage",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === ''||value.split('/').length<2) {
            callback(new Error('请输入多种规格'));
          } else {
            for(var item of value.split('/')){
              if(item === ''){
                callback(new Error('请输入多种规格'));
              }
            }
            return callback();
          }
        };
        return {
          dialogFormVisible: false,
          ruleForm:{
            title:'',
            name: ''
          },
          rules: {
            name: [
              {required:true, validator: validatePass, trigger: 'blur' }
            ]
          },
          tableData: [{
            number: '001',
            type:'份',
            name: '大份/中份/小份'
          }, {
            number: '002',
            type:'瓶',
            name: '大瓶/中瓶/小瓶'
          }, {
            number: '003',
            type:'碗',
            name: '大碗/中碗/小碗'
          }, {
            number: '004',
            type:'杯',
            name: '大杯/中杯/小杯'
          }]
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.$confirm('确定要删除该规格吗？', '提示', {
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
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.dialogFormVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
      }
    }
</script>

<style lang="scss">

</style>
