<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="来源:" prop="source">
          <el-input v-model="formData.source" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="接口状态码:" prop="scode">
          <el-input v-model.number="formData.scode" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="错误说明:" prop="smsg">
          <el-input v-model="formData.smsg" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="账号key:" prop="apiKey">
          <el-input v-model="formData.apiKey" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="symbol:" prop="symbol">
          <el-input v-model="formData.symbol" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="时间:" prop="outTime">
          <el-input v-model.number="formData.outTime" :clearable="true" placeholder="请输入" />
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
  createOrderError,
  updateOrderError,
  findOrderError
} from '@/api/orderError'

defineOptions({
    name: 'OrderErrorForm'
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
            source: '',
            scode: 0,
            smsg: '',
            apiKey: '',
            symbol: '',
            outTime: 0,
        })
// 验证规则
const rule = reactive({
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findOrderError({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reorderError
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
               res = await createOrderError(formData.value)
               break
             case 'update':
               res = await updateOrderError(formData.value)
               break
             default:
               res = await createOrderError(formData.value)
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
