
<template>
    <div>
        <div class="gva-table-box">
            <el-form label-width="140px" class="w-[680px]" :model="formData" ref="vForm" :rules="rules"
                label-position="left" size="medium" @submit.prevent>
                <el-form-item label="币币下单数量U" label-width="130px" prop="spotNum">
                    <el-input v-model="formData.spotNum" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item label="永续下单数量U" label-width="130px" prop="swapNum">
                    <el-input v-model="formData.swapNum" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item label="防瀑布系数" label-width="130px" prop="planOrderRate">
                    <el-input v-model="formData.planOrderRate" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item label="开始止盈系数" label-width="130px" prop="topRate">
                    <el-input v-model="formData.topRate" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item label="止盈回调系数" label-width="130px" prop="topCallRate">
                    <el-input v-model="formData.topCallRate" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item label="杠杆倍数" label-width="130px" prop="levers">
                    <el-input v-model="formData.levers" type="text" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">保存</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>
  
<script>
import {
    defineComponent,
    toRefs, 
    reactive,
    getCurrentInstance,
    onMounted
}
    from 'vue'

import {
    getLisConfig,
    updateLisConfig
} from '@/api/lisConfig'

import { ElMessage, ElMessageBox } from 'element-plus'


const init = async (state) => {
    let res = await getLisConfig()
    if (res.code == 0) {
        state.formData = res.data
    }
}

const savePlug = async (state) => {
    let res = await updateLisConfig(state.formData)

    if (res.code == 0) {
        ElMessage({
            type: 'success',
            message: '更改成功'
        })
    }
}

 
export default defineComponent({
    components: {},
    props: {},
    setup() {
        const state = reactive({
            formData: {
                spotNum: "",
                swapNum: "",
                planOrderRate: "",
                topRate: "",
                topCallRate: "",
                levers: "",
            },
            rules: {
                spotNum: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
                swapNum: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
                planOrderRate: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
                topRate: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
                topCallRate: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
                levers: [{
                    pattern: /^\d+(\.\d+)?$/,
                    trigger: ['blur', 'change'],
                    message: '请输入数字'
                }],
            },
        })

        onMounted(() => {
            init(state)
        });
 
        const instance = getCurrentInstance()
        const submitForm = () => {
            savePlug(state)
            // instance.ctx.$refs['vForm'].validate(valid => {
            //     if (!valid) return
                
            // })
        }
       
        return {
            ...toRefs(state),
            submitForm  
        }
    }
})

</script>

<style lang="scss" scoped>
.plug-row {
    @apply flex items-center w-full;

    &+& {
        @apply mt-3;
    }

    &>span {
        @apply ml-2;
    }
}
</style>
 