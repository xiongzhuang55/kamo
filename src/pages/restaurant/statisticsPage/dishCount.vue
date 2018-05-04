<template>
    <div>
      <div class="block">
        <span class="demonstration">交易日期</span>
        <el-date-picker v-model="value11" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="timestamp">
        </el-date-picker>
        <span class="demonstration">-</span>
        <el-date-picker v-model="value12" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="timestamp">
        </el-date-picker>
        <el-button type="success" class="search-btn" @click="search">搜索</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%;text-align: center" border>
        <el-table-column label="销量排名" align="center" prop="rank"></el-table-column>
        <el-table-column label="菜品编号" align="center" prop="number"></el-table-column>、
        <el-table-column label="菜品名称" align="center" prop="name"></el-table-column>
        <el-table-column label="销量" align="center" prop="price"></el-table-column>
        <el-table-column label="状态" align="center" prop="state"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      name: "dishCount",
      data(){
        return {
          value11: '',
          value12: '',
          tableData: [{
            rank:1,
            number: '003',
            price: '195',
            name: '剁椒鱼头',
            state:'正常'
          }, {
            rank:2,
            number: '007',
            price: '85',
            name: '红烧茄子',
            state:'已删除'
          }, {
            rank:3,
            number: '002',
            price: '68',
            name: '鱼香肉丝',
            state:'已删除'
          }]
        }
      },
      methods: {
        search() {
          if(this.value11 > this.value12){
            this.value12 = '';
            this.$message.error('结束日期不能小于开始日期');
          }
        }
      }
    }
</script>

<style scoped>
.search-btn{
  width:89px;
  height:40px;
}
  .demonstration{
    margin:0 10px;
  }
</style>
