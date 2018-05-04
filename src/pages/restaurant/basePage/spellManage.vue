<template>
  <div class="spell">
    <div>
      <span class="radio-title">是否支持拼桌</span>
      <el-radio-group v-model="radio">
        <el-radio :label="1">支持</el-radio>
        <el-radio :label="2">不支持</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" class="keep-btn">保存</el-button>
  </div>
</template>

<script>
  export default {
      name: "spellManage",
      data() {
        return {
          radio:2
        }
      },
      methods: {

      }
    }
</script>

<style lang="scss">
  .spell{
    .radio-title{
      margin: 0 15px 0 28px;
    }
  }
</style>
