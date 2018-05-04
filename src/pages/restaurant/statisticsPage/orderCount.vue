<template>
    <div>
      <div class="block">
        <span class="demonstration">交易日期</span>
        <el-date-picker v-model="date1" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="timestamp" :picker-options="startDatePicker">
        </el-date-picker>
        <span class="demonstration">-</span>
        <el-date-picker v-model="date2" type="date" placeholder="选择日期" format="yyyy-MM-dd" :picker-options="endDatePicker">
        </el-date-picker>
        <el-button type="success" class="search-btn" @click="search">搜索</el-button>
      </div>
      <div class="block search-wrapper">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="5"><div class="grid-content bg-purple">
            <span class="title">交易类型</span>
            <el-checkbox-group v-model="checkType">
              <el-checkbox label="堂吃"></el-checkbox>
              <el-checkbox label="外卖"></el-checkbox>
              <el-checkbox label="快餐"></el-checkbox>
            </el-checkbox-group>
          </div></el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="5"><div class="grid-content bg-purple">
            <span class="title deal-state">交易状态</span>
            <el-checkbox-group v-model="checkState">
              <el-checkbox label="已结账"></el-checkbox>
              <el-checkbox label="已退单"></el-checkbox>
            </el-checkbox-group>
          </div></el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple">
            <span class="title deal-state">订单号</span>
            <el-input v-model="inputOrder" placeholder="请输入订单号" width="240px"></el-input>
            <el-button type="success" class="search-btn" @click="search">搜索</el-button>
          </div></el-col>
        </el-row>
      </div>
      <el-table :data="tableData" style="width: 100%;text-align: center" border>
        <el-table-column label="单号" align="center" prop="orderNumber"></el-table-column>
        <el-table-column label="桌台/牌号" align="center" prop="number"></el-table-column>、
        <el-table-column label="消费金额" align="center" prop="price"></el-table-column>
        <el-table-column label="交易类型" align="center" prop="type"></el-table-column>
        <el-table-column label="交易状态" align="center" prop="state"></el-table-column>
        <el-table-column label="交易时间" align="center" prop="time"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" style="color: #31C7A0" type="text" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      name: "orderCount",
      data(){
        return {
          date1: '',//搜索起始日期
          date2: '',//搜索截止日期
          checkType: ['堂吃', '外卖'],//搜索类型
          checkState: ['已结账'],//搜索状态
          inputOrder:'',//搜索订单号
          currentPage: 1,//当前页码
          pageSize: 6,//默认每页数据量
          totalCount: 400,//数据总数
          tableData: [
            {
            orderNumber: '201610230121',
            number: '7号桌',
            price: '202.00',
            type:'堂吃',
            state:'已结账',
            time:'16-10-17 12:32',
          }, {
            orderNumber: '201610230122',
            number: '7号桌',
            price: '114.00',
            type:'堂吃',
            state:'已退单',
            time:'16-10-17 12:32',
          }, {
            orderNumber: '201610230123',
            number: '2号桌(主)',
            price: '312.00',
            type:'堂吃',
            state:'已结账',
            time:'16-10-17 12:32',
          }, {
            orderNumber: '201610230124',
            number: '2号桌(子)',
            price: '212.00',
            type:'堂吃',
            state:'已结账',
            time:'16-10-17 12:32',
          }, {
            orderNumber: '201610230125',
            number: '12',
            price: '56.00',
            type:'外卖',
            state:'已结账',
            time:'16-10-17 12:32',
          }, {
            orderNumber: '201610230126',
            number: '11',
            price: '62.00',
            type:'外卖',
            state:'已退单',
            time:'16-10-17 12:32',
          }],
          startDatePicker:this.beginDate(),
          endDatePicker:this.processDate(),
        }
      },
      methods: {
        handleEdit(index, row) {
          this.$router.push({name:'orderInfo',params:row});
          console.log(index, row);
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val
          console.log(`当前页: ${val}`);
        },
        search() {
          if(this.date1 === ''){
            this.$message.error('请选择开始时间');
          }else if(this.date2 === ''){
            this.$message.error('请选择结束时间');
          }else{
            console.log('筛选')
          }
        },
        beginDate(){
          let self = this;
          return {
            disabledDate(time){
              if(self.date2){
                return new Date(self.date2).getTime() < time.getTime()
              }else{
                return time.getTime() > Date.now();//开始时间不选时，结束时间最大值小于等于当天
              }
            }
          }
        },
        //提出结束时间必须大于提出开始时间
        processDate(){
          let self = this;
          return {
            disabledDate(time){
              if(self.date1){
                return new Date(self.date1).getTime() > time.getTime() || time.getTime() > Date.now()
              }else{
                return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
              }
            }
          }
        },
      }
    }
</script>

<style lang="scss" scoped>
.search-btn{
  width:89px;
  height:40px;
}
  .demonstration{
    margin:0 10px;
  }
  .el-checkbox-group{
    display: inline-block;
  }
.block{
  margin-left: 10px;
  .title{
    display:inline-block;
    margin:0px 10px;
  }
  .deal-state{
    /*margin-left:55px;*/
  }
  .el-input,input{
    display: inline-block;
    width:240px;
  }
}
  .search-wrapper{
    .bg-purple{
      line-height: 50px;
      margin-bottom:20px;
    }
  }

</style>
