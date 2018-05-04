<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="过号规则">
        <el-radio-group v-model="form.radio">
          <el-radio :label="1">过号无效</el-radio>
          <el-radio :label="2">过号有效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="过号延顺">
        <el-input-number v-model="form.number" controls-position="right" :min="1" :max="100"></el-input-number>桌有效
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="keep-btn">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
      name: "waitManage",
      data() {
        return {
          form: {
            radio: 2,
            number: '3'
          }
        }
      },
      methods: {
        onSubmit(){
          console.log('keep')
        }
      }
    }
</script>

<style lang="scss">
.el-input-number .el-input__inner{
  text-align: left;
}
  .keep-btn{
    margin:20px 0 0 0;
  }
</style>
