<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="店铺名称">
              <el-input v-model="form.name1"></el-input>
            </el-form-item>
            <el-form-item label="门店地址">
              <el-input v-model="form.name2"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.name3"></el-input>
            </el-form-item>
            <el-form-item label="欢迎词">
              <el-input v-model="form.name4"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存编辑</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <div class="waim">
            <h1>{{name}}</h1>
            <p>{{address}}</p>
            <p class="phone">{{phone}}</p>
            <p class="intro">{{intro}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "receiptSell",
      data() {
        return {
          name:'美宜佳便利店',
          address:'深圳市南山区科技路南十路1234号206室',
          phone:'0755-88888888',
          intro:'欢迎光临美宜佳便利店',
          form: {
            name1: '',
            name2: '',
            name3: '',
            name4: ''
          }
        }
      },
      methods: {
        onSubmit() {
          this.name = this.form.name1;
          this.address = this.form.name2;
          this.phone = this.form.name3;
          this.intro = this.form.name4;
        }
      }
    }
</script>

<style lang="scss">
.waim{
  width:293px;
  height:444px;
  h1{
    text-align: center;
    font-size:24px;
    font-weight:400;
    padding-top:20px;
    color:#191919;
  }
  p{
    margin:274px 10px 0px 80px;
    height: 34px;
    line-height: 15px;
    color:#191919;
    font-size:12px;
  }
  p.phone{
    margin:0px 10px 0px 80px;
  }
  p.intro{
    margin:0px 5px;
    text-align: center;
  }
}
</style>
