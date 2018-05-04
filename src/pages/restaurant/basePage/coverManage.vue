<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="费用名称">
        <el-input v-model="form.name" readonly="true" style="max-width: 360px"></el-input>
      </el-form-item>
      <el-form-item label="收费方式">
        <el-radio-group v-model="form.radio">
          <el-radio :label="1">按人数</el-radio>
          <el-radio :label="2">按比例</el-radio>
          <el-radio :label="3">固定金额</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="收费金额">
        <el-input v-model="form.money" placeholder="请输入金额" style="max-width: 240px;margin-right:10px;"></el-input>元/位
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="keep-btn">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
      name: "coverManage",
      data() {
        return {
          form: {
            name: '茶位费',
            radio: 1,
            money: '',
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style lang="scss">
  .keep-btn{
    margin:0;
  }
</style>
