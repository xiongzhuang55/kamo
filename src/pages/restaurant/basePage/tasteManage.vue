<template>
  <div>
    <div class="res-add-btn-box">
      <div class="res-add-btn" @click="dialogFormVisible = true"></div>
    </div>
    <el-dialog title="添加口味组" :visible.sync="dialogFormVisible" width="652px">
      <div class="dialog-intro">不同口味之间请用"/"分隔，例如"冷/热"</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" >
        <el-form-item label="口味名称">
          <el-input v-model="ruleForm.title" placeholder="请输入10个以内汉字或字母" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="包含口味" prop="name">
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
      name: "tasteManage",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === ''||value.split('/').length<2) {
            callback(new Error('请输入多个口味'));
          } else {
            for(var item of value.split('/')){
              if(item === ''){
                callback(new Error('请输入多个口味'));
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
            type:'辣度',
            name: '无辣/微辣/中辣/多辣/重辣'
          }, {
            number: '002',
            type:'咸度',
            name: '清淡/正常/多盐'
          }, {
            number: '003',
            type:'温度',
            name: '常温/少冰/多冰/温/热'
          }, {
            number: '004',
            type:'甜度',
            name: '无糖/三分甜/五分甜/七分甜/多糖'
          }]
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.$confirm('确定要删除该口味组吗？', '提示', {
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
