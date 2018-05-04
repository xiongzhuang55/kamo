<template>
    <div class="order-info">
      <div class="res-add-btn-box">
        <div class="res-back-btn" @click="backRoute"></div>
      </div>
      <div>
        <div>
          <span class="label">单号：</span>
          <span class="name">{{consumeData.orderNumber}}</span>
        </div>
        <div>
          <span class="label">餐桌：</span>
          <span class="name">{{consumeData.number}}</span>
        </div>
        <div>
          <span class="label">顾客人数：</span>
          <span class="name">4人</span>
        </div>
        <div>
          <span class="label">交易时间：</span>
          <span class="name">{{consumeData.time}}</span>
        </div>
        <div>
          <span class="label">消费备注：</span>
          <span class="name">多加辣</span>
        </div>
        <div>
          <span class="label">合计消费：</span>
          <span class="name">{{consumeData.price}}</span>
        </div>
        <div v-if="!(consumeData.state === '已退单')">
          <span class="label">卡莫会员：</span>
          <span class="name">-56.00</span>
        </div>
        <div v-if="!(consumeData.state === '已退单')">
          <span class="label">实付金额：</span>
          <span class="name">{{consumeData.price-56.00}}</span>
        </div>
        <div>
          <span class="label">交易状态：</span>
          <span class="name state-red" :class="{'state-green': consumeData.state==='已退单'}">{{consumeData.state}}</span>
        </div>
        <div v-if="consumeData.state==='已退单'">
          <span class="label">退单理由：</span>
          <span class="name">临时有事</span>
        </div>
      </div>
      <div class="horize"></div>
      <el-table :data="tableData" style="width: 100%;text-align: center" border>
        <el-table-column label="菜品编号" align="center" prop="number"></el-table-column>
        <el-table-column label="菜品名称" align="center" prop="name"></el-table-column>
        <el-table-column label="口味" align="center" prop="taste"></el-table-column>
        <el-table-column label="价格" align="center" prop="price"></el-table-column>
        <el-table-column label="规格" align="center" prop="format"></el-table-column>
        <el-table-column label="数量" align="center" prop="amount"></el-table-column>
        <el-table-column label="加料" align="center" prop="charge"></el-table-column>
        <el-table-column label="合计" align="center" prop="count"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      name: "orderInfo",
      data() {
        return {
          consumeData: '',
          tableData: [{
            number: '003',
            name: '剁椒鱼头',
            taste: '麻辣',
            price: '58.00',
            format: '大份',
            amount: '1份',
            charge: '无',
            count:'58.00'
          }, {
            number: '003',
            name: '剁椒鱼头',
            taste: '麻辣',
            price: '58.00',
            format: '无',
            amount: '3份',
            charge: '2.00',
            count:'58.00'
          }, {
            number: '003',
            name: '剁椒鱼头',
            taste: '麻辣',
            price: '58.00',
            format: '大份',
            amount: '1份',
            charge: '2.00',
            count:'58.00'
          }, {
            number: '003',
            name: '剁椒鱼头',
            taste: '麻辣',
            price: '58.00',
            format: '大份',
            amount: '1份',
            charge: '无',
            count:'58.00'
          }, {
            number: '003',
            name: '鱼香肉丝套餐(鱼香肉丝)(龙骨汤)',
            taste: '麻辣清淡',
            price: '58.00',
            format: '大份小份',
            amount: '1份',
            charge: '2.00无',
            count:'58.00'
          }]
        }
      },
      created() {
        console.log(this.$route.params.number === undefined)
        if(this.$route.params.number === undefined){
          this.$router.push({name:'orderCount'})
        }
        else{
          this.consumeData = this.$route.params;
        }
        this.$store.commit("modifyBreadcrumb", [{title:"餐饮管理"},{title:"报表统计"},{title:"订单统计"},{title:"订单详情"}]);
      },
      methods: {
        backRoute() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped lang="scss">
.order-info{
  position:absolute;
  top:0px;
  left:0;
  right:0;
  background-color:#fff;
  z-index: 999;
  span{
    line-height: 30px;
  }
  .label{
    display: inline-block;
    width:80px;
    text-align: right;
  }
  .name{
    margin-left:10px;
  }
  .res-add-btn-box{
    display: flex;
    justify-content: flex-end;
  }
  .horize{
    margin:30px 0;
    border-bottom:1px solid #EBEBEB;
  }
  .state-red{
    color: #FD6363;
  }
  .state-green{
    color:#31C7A0;
  }
}
</style>
