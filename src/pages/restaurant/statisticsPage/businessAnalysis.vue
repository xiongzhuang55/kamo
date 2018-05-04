<template>
    <div>
      <div class="block">
        <span class="demonstration">交易日期</span>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期" format="yyyy-MM-dd" :picker-options="startDatePicker" align="right">
        </el-date-picker>
        <span class="demonstration">-</span>
        <el-date-picker v-model="value3" type="date" placeholder="选择日期" format="yyyy-MM-dd" :picker-options="endDatePicker" align="right">
        </el-date-picker>
        <el-button type="success" class="search-btn" @click="search">搜索</el-button>
      </div>
      <el-table :data="searchFilter" style="width: 100%;text-align: center" border show-summary sum-text="统计" :summary-method="getSummaries">
        <el-table-column label="交易日期" align="center" prop="date"></el-table-column>
        <el-table-column label="营业额(消费)" align="center" prop="number"></el-table-column>、
        <el-table-column label="单数" align="center" prop="odd"></el-table-column>
        <el-table-column label="客单价" align="center" prop="price"></el-table-column>
        <el-table-column label="翻台率" align="center" prop="state"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      name: "businessAnalysis",
      data(){
        return {
          value2: '',
          value3: '',
          isSearch:false,
          startDatePicker:this.beginDate(),
          endDatePicker:this.processDate(),
          searchData:[],
          tableData: [{
            date: '2018-5-2',
            number: '330',
            price: '40',
            odd: '20',
            state: '0.95'
          }, {
            date: '2018-5-3',
            number: '330',
            price: '35',
            odd: '30',
            state: '0.95'
          }, {
            date: '2018-5-4',
            number: '330',
            price: '35',
            odd: '35',
            state: '0.95'
          }]
        }
      },
      computed:{
        searchFilter(){
          let data;
          data = !this.isSearch ? this.tableData : this.searchData.length>0?this.searchData:[];
          return data;
        }
      },
      created() {
      },
      methods: {
        beginDate(){
          let self = this;
          return {
            disabledDate(time){
              if(self.value3){
                return new Date(self.value3).getTime() < time.getTime()
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
              if(self.value2){
                return new Date(self.value2).getTime() > time.getTime() || time.getTime() > Date.now()
              }else{
                return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
              }
            }
          }
        },
        search() {
          const that = this;
          that.isSearch = true;
          that.searchData = [];
          that.tableData.map(obj=>{
            let dataTime = new Date(obj.date).getTime();
            if(new Date(that.value2)<=dataTime && dataTime <= new Date(that.value3)){
              that.searchData.push(obj);
            }
          });
        },
        getSummaries(param) {
          const { columns, data } = param;
          const sums = [];
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '统计';
              return;
            }
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  if(index === 4){
                    return (prev + curr);
                  }
                  else{
                    return (prev + curr);
                  }
                } else {
                  return prev;
                }
              }, 0);
            } else {
              sums[index] = 'N/A';
            }
          });
          sums[4] = (sums[4]/this.tableData.length).toFixed(2);
          return sums;
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
