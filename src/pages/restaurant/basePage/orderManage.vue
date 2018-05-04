<template>
  <div id="orderManage">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <el-form-item label="可预约日期" prop="orderDate">
        <el-input-number v-model="ruleForm.orderDate" controls-position="right" id="orderDateMargin0"></el-input-number>天内可预约
      </el-form-item>
      <el-form-item label="" prop="orderTime">
          <el-checkbox v-model="ruleForm.orderCheck">设置当天可预约</el-checkbox>
          <div style="margin-left: 25px">
            营业时间前 <el-input-number v-model="ruleForm.orderTime" controls-position="right" :min="1"></el-input-number>小时可预约
          </div>
      </el-form-item>
      <el-form-item label="预约失效设置" prop="loseTime">
        预约到点
        <el-input-number v-model="ruleForm.loseTime" controls-position="right" :min="1" :max="24"></el-input-number>分钟以后预约失效
      </el-form-item>
      <el-form-item label="营业时段可预约桌数" prop="tableTimeA">
        <div class="marginLeft">
          A类型桌<span>每</span><el-input-number v-model="ruleForm.tableTimeA" controls-position="right" :min="1"></el-input-number>个小时可预约<el-input-number v-model="ruleForm.tableA" controls-position="right" :min="1"></el-input-number> 桌
        </div>
        <div class="marginLeft">
          B类型桌<span>每</span><el-input-number v-model="ruleForm.tableTimeB" controls-position="right" :min="1"></el-input-number>个小时可预约<el-input-number v-model="ruleForm.tableB" controls-position="right" :min="1"></el-input-number> 桌
        </div>
        <div class="marginLeft">
          C类型桌<span>每</span><el-input-number v-model="ruleForm.tableTimeC" controls-position="right" :min="1"></el-input-number>个小时可预约<el-input-number v-model="ruleForm.tableC" controls-position="right" :min="1"></el-input-number> 桌
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="keep-btn">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
      name: "orderManage",
      data() {
        return {
          ruleForm: {
            orderDate: 2,
            orderCheck:true,
            orderTime:1,
            loseTime: '1',
            tableTimeA:1,
            tableA:2,
            tableTimeB:1,
            tableB:2,
            tableTimeC:1,
            tableC:2,
          },
          rules: {
            orderDate: [
              { required: true, pattern: /^[2-9]*$/, message: '可预约至少为2天', trigger: 'blur' }
            ],
            loseTime: [
              { required: true }
            ],
            tableTimeA: [
              { required: true }
            ],
            orderTime: [
              { required: true }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style lang="scss">
  $colorGreen:#31C7A0;
  #orderManage{
    min-width: 800px;
    .el-input__inner{
      text-align: left;
    }
    .is-controls-right{
      margin:0 20px;
    }
    #orderDateMargin0{
      margin-left:0;
    }
    .marginLeft{
      margin-bottom: 22px;
      span{
        margin-left: 20px;
      }
    }
    .el-checkbox__input{
      vertical-align: top;
      margin-top: 14px;
    }
    .keep-btn{
      margin:0;
    }
  }

</style>
