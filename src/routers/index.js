// vur-router doc https://router.vuejs.org/zh-cn/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import adminContainer from '../pages/commonVueComponent/adminContainer'
import foodAdmin from '../pages/restaurant/foodAdmin/foodAdmin'
import employeeAdmin from '../pages/restaurant/employeeAdmin'
import baseSetting from '../pages/restaurant/baseSetting'
import statisticsAdmin from '../pages/restaurant/statisticsAdmin'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: {
        template: '<div @click="go">系统首页,点击进入导航</div>',
        methods: {
          go() {
            this.$router.push('/admin/foodAdmin')
          }
        },
        beforeCreate() {
          this.$router.push('/admin/foodAdmin')
        }
      }
    },
    {
      path: '/admin',
      component: adminContainer,
      children: [
        //菜品管理
        {
          path: 'foodAdmin',
          component: foodAdmin
        },
        {
          path: 'employeeAdmin',
          component: employeeAdmin
        },
        {
          path: 'baseSetting',
          component: baseSetting,
          meta:{
            title:"基础管理"
          },
          children:[
            {
              path:'',
              name:'DiningManage',
              meta:{
                title:"餐区管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/diningManage'],resolve)
            },
            {
              path:'tableType',
              name:'TableType',
              meta:{
                title:"餐桌类型"
              },
              component: resolve => require(['../pages/restaurant/basePage/tableType'],resolve)
            },
            {
              path:'tableManage',
              name:'TableManage',
              meta:{
                title:"餐桌管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/tableManage'],resolve)
            },
            {
              path:'spellManage',
              name:'SpellManage',
              meta:{
                title:"拼桌管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/spellManage'],resolve)
            },
            {
              path:'coverManage',
              name:'coverManage',
              meta:{
                title:"茶位费管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/coverManage'],resolve)
            },
            {
              path:'dishClassify',
              name:'dishClassify',
              meta:{
                title:"菜品分类"
              },
              component: resolve => require(['../pages/restaurant/basePage/dishClassify'],resolve)
            },
            {
              path:'tasteManage',
              name:'tasteManage',
              meta:{
                title:"口味管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/tasteManage'],resolve)
            },
            {
              path:'formatManage',
              name:'formatManage',
              meta:{
                title:"规格管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/formatManage'],resolve)
            },
            {
              path:'batchingManage',
              name:'batchingManage',
              meta:{
                title:"配料管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/batchingManage'],resolve)
            },
            {
              path:'chargeBack',
              meta:{
                title:"退单理由"
              },
              component: resolve => require(['../pages/restaurant/basePage/chargeBack'],resolve),
              children:[
                {
                  path:'',
                  name:'chargeBack',
                  meta:{
                    title:"堂吃退单理由"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/chargeBackPage/tang'],resolve)
                },
                {
                  path:'sell',
                  name:'sell',
                  meta:{
                    title:"外卖退单理由"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/chargeBackPage/sell'],resolve)
                },
                {
                  path:'order',
                  name:'order',
                  meta:{
                    title:"预订退单理由"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/chargeBackPage/order'],resolve)
                },
                {
                  path:'tangCai',
                  name:'tangCai',
                  meta:{
                    title:"堂吃退菜理由"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/chargeBackPage/tangCai'],resolve)
                },
                {
                  path:'taste',
                  name:'taste',
                  meta:{
                    title:"口味要求"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/chargeBackPage/taste'],resolve)
                },
              ]
            },
            {
              path:'receiptManage',
              name:'receiptManage',
              meta:{
                title:"小票管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/receiptManage'],resolve),
              children:[
                {
                  path:'',
                  name:'receiptManage',
                  meta:{
                    title:"收银小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/collect'],resolve)
                },
                {
                  path:'chefs',
                  name:'chefs',
                  meta:{
                    title:"厨打小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/chefs'],resolve)
                },
                {
                  path:'reminder',
                  name:'reminder',
                  meta:{
                    title:"催单小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/reminder'],resolve)
                },
                {
                  path:'consume',
                  name:'consume',
                  meta:{
                    title:"消费小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/consume'],resolve)
                },
                {
                  path:'receiptSell',
                  name:'receiptSell',
                  meta:{
                    title:"外卖小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/receiptSell'],resolve)
                },
                {
                  path:'receiptOrder',
                  name:'receiptOrder',
                  meta:{
                    title:"排队小票"
                  },
                  component: resolve => require(['../pages/restaurant/basePage/receiptManagePage/receiptOrder'],resolve)
                }
              ]
            },
            {
              path:'orderManage',
              name:'orderManage',
              meta:{
                title:"预约管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/orderManage'],resolve)
            },
            {
              path:'waitManage',
              name:'waitManage',
              meta:{
                title:"排队管理"
              },
              component: resolve => require(['../pages/restaurant/basePage/waitManage'],resolve)
            }
          ]
        },
        {
          path: 'statisticsAdmin',
          component: statisticsAdmin,
          meta:{
            title:"报表统计"
          },
          children:[
            {
              path:'',
              name:'orderCount',
              meta:{
                title:"订单统计"
              },
              component: resolve => require(['../pages/restaurant/statisticsPage/orderCount'],resolve)
            },
            {
              path:'businessAnalysis',
              name:'businessAnalysis',
              meta:{
                title:"营业分析"
              },
              component: resolve => require(['../pages/restaurant/statisticsPage/businessAnalysis'],resolve)
            },
            {
              path:'dishCount',
              name:'dishCount',
              meta:{
                title:"菜品销量统计"
              },
              component: resolve => require(['../pages/restaurant/statisticsPage/dishCount'],resolve)
            }
          ]
        }
      ]
    }
  ]
})
