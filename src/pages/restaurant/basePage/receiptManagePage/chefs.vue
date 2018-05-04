<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple">
          <el-radio v-model="radio" label="1">分担打印</el-radio>
          <div class="chudf"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple">
          <el-radio v-model="radio" label="2">合单打印</el-radio>
          <div class="chudh"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "chefs",
      data() {
        return {
          radio:'1'
        }
      },
      methods: {

      }
    }
</script>

<style lang="scss">
.chudf,.chudh{
  width:376px;
  height:257px;
}
.chudh{
  height:331px;
}
</style>
