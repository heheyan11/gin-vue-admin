<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="用户apikey:" prop="apikey">
          <el-input v-model="formData.apikey" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="买单id:" prop="buyId">
          <el-input v-model="formData.buyId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="累计成交量:" prop="accFillSz">
          <el-input v-model="formData.accFillSz" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="成交均价:" prop="avgPx">
          <el-input v-model="formData.avgPx" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="创建订单的时间:" prop="ctime">
          <el-input v-model="formData.ctime" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="错误码:" prop="code">
          <el-input v-model="formData.code" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="错误信息:" prop="msg">
          <el-input v-model="formData.msg" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="累计手续费:" prop="fee">
          <el-input v-model="formData.fee" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="手续费币种:" prop="feeCcy">
          <el-input v-model="formData.feeCcy" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="委托单已成交美元价值:" prop="fillNotionalUsd">
          <el-input v-model="formData.fillNotionalUsd" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="最新成交时间:" prop="fillTime">
          <el-input v-model="formData.fillTime" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="产品id:" prop="instId">
          <el-input v-model="formData.instId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="产品类型:" prop="instType">
          <el-input v-model="formData.instType" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="杠杆倍数:" prop="lever">
          <el-input v-model="formData.lever" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="委托单美元价值:" prop="notionalUsd">
          <el-input v-model="formData.notionalUsd" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="产品Id:" prop="ordId">
          <el-input v-model="formData.ordId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="订单类型:" prop="ordType">
          <el-input v-model="formData.ordType" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="收益:" prop="pnl">
          <el-input v-model="formData.pnl" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="委托价格:" prop="px">
          <el-input v-model="formData.px" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="订单方向:" prop="side">
          <el-input v-model="formData.side" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="订单数量:" prop="state">
          <el-input v-model="formData.state" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="委托数量:" prop="sz">
          <el-input v-model="formData.sz" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="交易模式:" prop="tdMode">
          <el-input v-model="formData.tdMode" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createOrder,
  updateOrder,
  findOrder
} from '@/api/lis_orders'

defineOptions({
    name: 'OrderForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            apikey: '',
            buyId: '',
            accFillSz: '',
            avgPx: '',
            ctime: '',
            code: '',
            msg: '',
            fee: '',
            feeCcy: '',
            fillNotionalUsd: '',
            fillTime: '',
            instId: '',
            instType: '',
            lever: '',
            notionalUsd: '',
            ordId: '',
            ordType: '',
            pnl: '',
            px: '',
            side: '',
            state: '',
            sz: '',
            tdMode: '',
        })
// 验证规则
const rule = reactive({
               apikey : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findOrder({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.relisOrders
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createOrder(formData.value)
               break
             case 'update':
               res = await updateOrder(formData.value)
               break
             default:
               res = await createOrder(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
