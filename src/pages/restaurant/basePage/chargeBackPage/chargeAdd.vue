<template>
  <div>
    <div class="res-add-btn-box">
      <div class="res-add-btn" @click="dialogFormVisible = true"></div>
    </div>
    <el-dialog title="添加内容" :visible.sync="dialogFormVisible" width="652px">
      <el-form :model="form" label-width="70px">
        <el-form-item label="编号">
          <el-input v-model="form.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.name" auto-complete="off" placeholder="请输入餐区名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "chargeAdd",
        data() {
          return {
            dialogFormVisible: false,
            form:{
              number:'001',
              name: ''
            },
          }
        }
    }
</script>

<style scoped>

</style>
