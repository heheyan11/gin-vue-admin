<template>
  <div>
    <div class="gva-search-box">
      <el-form ref="elSearchFormRef" :inline="true" :model="searchInfo" class="demo-form-inline" :rules="searchRule"
        @keyup.enter="onSubmit">

        <el-form-item label="apiKey">
          <el-input v-model="searchInfo.apiKey" placeholder="API Key" />
        </el-form-item>
        <el-form-item label="创建日期" prop="createdAt">
          <template #label>
            <span>
              创建日期
              <el-tooltip content="搜索范围是开始日期（包含）至结束日期（不包含）">
                <el-icon>
                  <QuestionFilled />
                </el-icon>
              </el-tooltip>
            </span>
          </template>
          <el-date-picker v-model="searchInfo.startCreatedAt" type="datetime" placeholder="开始日期"
            :disabled-date="time => searchInfo.endCreatedAt ? time.getTime() > searchInfo.endCreatedAt.getTime() : false"></el-date-picker>
          —
          <el-date-picker v-model="searchInfo.endCreatedAt" type="datetime" placeholder="结束日期"
            :disabled-date="time => searchInfo.startCreatedAt ? time.getTime() < searchInfo.startCreatedAt.getTime() : false"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
          <el-button icon="refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog">新增</el-button>
        <el-popover v-model:visible="deleteVisible" :disabled="!multipleSelection.length" placement="top" width="160">
          <p>确定要删除吗？</p>
          <div style="text-align: right; margin-top: 8px;">
            <el-button type="primary" link @click="deleteVisible = false">取消</el-button>
            <el-button type="primary" @click="onDelete">确定</el-button>
          </div>
          <!-- <template #reference>
            <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length"
              @click="deleteVisible = true">删除</el-button>
          </template> -->
        </el-popover>
      </div>
      <el-table ref="multipleTable" style="width: 100%" tooltip-effect="dark" :data="tableData" row-key="ID"
        @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection" width="55" /> -->
        <el-table-column align="left" label="日期" width="180">
          <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>
        <el-table-column align="left" label="ApiKey" prop="apiKey" width="285" />
        <el-table-column align="left" label="正收益" prop="zheng" width="120" />
        <el-table-column align="left" label="负收益" prop="fu" width="120" />
        <el-table-column align="left" label="总收益" prop="zong" width="120" />
        <!-- <el-table-column align="left" label="SecretKey" prop="secretKey" width="120" /> -->
        <el-table-column align="left" label="是否启动" prop="status" width="220" />
        <el-table-column align="left" label="操作">
          <template #default="scope">


            <el-button type="primary" link class="table-button" @click="getStatus(scope.row)">
              <el-icon style="margin-right: 5px">
                <InfoFilled />
              </el-icon>
              查看状态
            </el-button>


            <el-button type="primary" link class="table-button" @click="setPosition(scope.row)">
              <el-icon style="margin-right: 5px">
                <InfoFilled />
              </el-icon>
              一键卖币平仓
            </el-button>


            <el-button type="primary" link icon="edit" class="table-button"
              @click="updateApisFunc(scope.row)">启动/停止</el-button>


            <el-button type="primary" link icon="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :current-page="page" :page-size="pageSize"
          :page-sizes="[5, 30, 50, 100]" :total="total" @current-change="handleCurrentChange"
          @size-change="handleSizeChange" />
      </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" :title="type === 'create' ? '添加' : '启动/停止'"
      destroy-on-close>
      <el-scrollbar height="500px">
        <el-form :model="formData" label-position="right" ref="elFormRef" :rules="rules" label-width="130px">
          <el-form-item label="API Key:" prop="apiKey">
            <el-input v-model="formData.apiKey" :clearable="true" placeholder="请输入API Key1"
              :readonly="type == 'create' ? false : 'readonly'" />
          </el-form-item>
          <el-form-item label="passphrase:" prop="passphrase" v-if="type == 'create'">
            <el-input v-model="formData.passphrase" :clearable="true" placeholder="请输入passphrase密码" />
          </el-form-item>
          <el-form-item label="SecretKey:" prop="secretKey" v-if="type == 'create'">
            <el-input v-model="formData.secretKey" :clearable="true" placeholder="请输入SecretKey" />
          </el-form-item>
          <el-form-item label="symbol选择" prop="symbol">
            <el-checkbox-group v-model="formData.symbol" :clearable="true">
              <el-checkbox v-for="(item, index) in symbolOptions" :key="index" :label="item.value"
                :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="设置运行状态" prop="启动停止">
            <el-radio-group v-model="formData.status">

              <el-radio v-for="item in ['停止', '启动']" :key="item" :label="item" :clearable="false"
                style="{display: inline}">{{ item }}</el-radio>



            </el-radio-group>
          </el-form-item>

        </el-form>
      </el-scrollbar>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="detailShow" style="width: 1200px" lock-scroll :before-close="closeDetailShow" title="查看详情"
      destroy-on-close>
      <el-scrollbar height="550px">
        <el-descriptions column="1" border>
          <el-descriptions-item label="ApiKey">
            {{ formData.apiKey }}
          </el-descriptions-item>
          <el-descriptions-item label="passphrase">
            {{ formData.passphrase }}
          </el-descriptions-item>

          <el-descriptions-item label="symbol">
            {{ formData.symbol }}
          </el-descriptions-item>

          <el-descriptions-item label="是否启动">
            {{ formData.status }}
          </el-descriptions-item>
        </el-descriptions>
      </el-scrollbar>
    </el-dialog>

    <el-dialog v-model="detailShow2" style="width: 1600px" lock-scroll :before-close="closeDetailShow2" title="查看状态"
      destroy-on-close>
      <el-scrollbar height="650px">

        <div class="dialog-footer">
          <el-button type="primary" @click="resetStatus(formData2.apiKey)">刷 新</el-button>
        </div>


        <el-empty v-if="formData2.apiKey == ''" description="暂无数据"></el-empty>

        <el-descriptions column="2" border v-for="(value, key, index) in formData2.Childs">




          <el-descriptions-item label="symbol名称" label-align="center">
            {{ key }}
          </el-descriptions-item>

          <el-descriptions-item label="状态" label-align="right">
            {{ value.Status == 1 ? '比价' : '做单' }}
          </el-descriptions-item>

          <el-descriptions-item label="现货触发止盈价" label-align="right">
            {{ value.SpotSell }}
          </el-descriptions-item>
          <el-descriptions-item label="现货买单均价" label-align="right">
            {{ value.SpotAvgPx }}
          </el-descriptions-item>
          <el-descriptions-item label="现货成交数量" label-align="right">
            {{ value.SpotFillSz }}
          </el-descriptions-item>
          <el-descriptions-item label="现货订单号" label-align="right">
            {{ value.SpotOid }}
          </el-descriptions-item>

          <el-descriptions-item label="合约触发止盈价" label-align="right">
            {{ value.SwapSell }}
          </el-descriptions-item>
          <el-descriptions-item label="合约买单均价" label-align="right">
            {{ value.SwapAvgPx }}
          </el-descriptions-item>
          <el-descriptions-item label="合约成交数量" label-align="right">
            {{ value.SwapFillSz }}
          </el-descriptions-item>
          <el-descriptions-item label="合约订单号" label-align="right">
            {{ value.SwapOid }}
          </el-descriptions-item>

          <el-descriptions-item label="瀑布预计做单价" label-align="right">
            {{ value.SwapPlanPx }}
          </el-descriptions-item>

          <el-descriptions-item label="现货止盈队列" v-for="(v, k, i) in value.SpotQueue" label-align="right" span="2">


            <el-tag>
              订单号：{{ v.Oid }}
              成交触发价：{{ v.AvgPx }}
              成交量：{{ v.FillSz }}
              止盈触发价：{{ v.BackPx }}
            </el-tag>
            <br />

          </el-descriptions-item>

          <el-descriptions-item label="合约止盈队列" v-for="(v1, k1, i1) in value.SwapQueue" label-align="right" span="2">

            <el-tag>
              订单号：{{ v1.Oid }}
              成交触发价：{{ v1.AvgPx }}
              成交量：{{ v1.FillSz }}
              止盈触发价：{{ v1.BackPx }}
            </el-tag>
            <br />

          </el-descriptions-item>

          <el-descriptions-item label="现货挂单列表" v-for="(v2, k2, i2) in value.SpotBuys" label-align="right" span="2">


            <el-tag>
              订单号：{{ v2.Oid }}
              成交均价：{{ v2.AvgPx }}
              成交量：{{ v2.FillSz }}
              止盈触发价：{{ v2.Sell }}
            </el-tag>
            <br />


          </el-descriptions-item>



        </el-descriptions>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  createApis,
  deleteApis,
  deleteApisByIds,
  updateApis,
  findApis,
  getApisList,
  findStatus,
  setPositionApi,
} from '@/api/lisApis'
import { getCoinsList } from '@/api/lisCoins'
// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict, ReturnArrImg, onDownloadFile } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'

defineOptions({
  name: 'Apis'
})

// 自动化生成的字典（可能为空）以及字段
const formData = ref({
  apiKey: '',
  passphrase: '',
  secretKey: '',
  status: '启动',
  symbol: []
})



// 验证规则
const rules = ref({
  apiKey: [{
    required: true,
    message: '请输入apikey',
    trigger: ['input', 'blur'],
  }],
  passphrase: [{
    required: true,
    message: '请输入passphrase',
    trigger: ['input', 'blur'],
  }],
  secretKey: [{
    required: true,
    message: '请输入secretKey',
    trigger: ['input', 'blur'],
  }],
  status: [{
    required: true,
    message: '请选择启动或停止',
    trigger: ['select', 'blur'],
  }],
  symbol: [{
    required: true,
    message: '请选择symbol',
    trigger: ['select', 'blur'],
  }],
})

const searchRule = reactive({
  createdAt: [
    {
      validator: (rule, value, callback) => {
        if (searchInfo.value.startCreatedAt && !searchInfo.value.endCreatedAt) {
          callback(new Error('请填写结束日期'))
        } else if (!searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt) {
          callback(new Error('请填写开始日期'))
        } else if (searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt && (searchInfo.value.startCreatedAt.getTime() === searchInfo.value.endCreatedAt.getTime() || searchInfo.value.startCreatedAt.getTime() > searchInfo.value.endCreatedAt.getTime())) {
          callback(new Error('开始日期应当早于结束日期'))
        } else {
          callback()
        }
      }, trigger: 'change'
    }
  ],
})

const elFormRef = ref()
const elSearchFormRef = ref()

// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(5)
const tableData = ref([])
const searchInfo = ref({})
// =========== symbol 控制
const symbolOptions = ref([])
// 重置
const onReset = () => {
  searchInfo.value = {}
  getTableData()
}

// 搜索
const onSubmit = () => {
  elSearchFormRef.value?.validate(async (valid) => {
    if (!valid) return
    page.value = 1
    pageSize.value = 10
    getTableData()
  })
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async () => {
  const table = await getApisList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()


// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () => {
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
  ElMessageBox.confirm('确定要删除吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    deleteApisFunc(row)
  })
}


// 批量删除控制标记
const deleteVisible = ref(false)

// 多选删除
const onDelete = async () => {
  const ids = []
  if (multipleSelection.value.length === 0) {
    ElMessage({
      type: 'warning',
      message: '请选择要删除的数据'
    })
    return
  }
  multipleSelection.value &&
    multipleSelection.value.map(item => {
      ids.push(item.ID)
    })
  const res = await deleteApisByIds({ ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updateApisFunc = async (row) => {
  const res = await findApis({ ID: row.ID })

  getCoins()

  res.data.relisApis.symbol = JSON.parse(res.data.relisApis.symbol)


  type.value = 'update'
  if (res.code === 0) {

    formData.value = res.data.relisApis
    dialogFormVisible.value = true

  }
}


// 删除行
const deleteApisFunc = async (row) => {
  const res = await deleteApis({ ID: row.ID })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)


// 查看详情控制标记
const detailShow = ref(false)

const detailShow2 = ref(false)

// 打开详情弹窗
const openDetailShow = () => {
  detailShow.value = true
}

const openDetailShow2 = () => {
  detailShow2.value = true
}


// 打开详情
const getDetails = async (row) => {
  // 打开弹窗
  const res = await findApis({ ID: row.ID })
  if (res.code === 0) {
    formData.value = res.data.relisApis
    openDetailShow()
  }
}

const setPosition = async (row) => { 
  const res = await setPositionApi({ apiKey:row.apiKey })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '平仓成功'
    })
  }
}

const getStatus = async (row) => {
  // 打开弹窗
  const res = await findStatus({ apiKey: row.apiKey })
  if (res.code === 0) {
    formData2.value = res.data
    openDetailShow2()
  }
}

const resetStatus = async (apiKey) => {
  // 打开弹窗
  console.log(apiKey)
  const res = await findStatus({ apiKey: apiKey })
  if (res.code === 0) {
    formData2.value = res.data
  }
}





// 关闭详情弹窗
const closeDetailShow = () => {
  detailShow.value = false
  formData.value = {
    apiKey: '',
    passphrase: '',
    secretKey: '',
    status: '启动',
    symbol: []
  }
}


const formData2 = ref({
  Childs: {},
  apiKey: ""
})


const closeDetailShow2 = () => {
  detailShow2.value = false
  formData2.value = {
    Childs: {},
    apiKey: ""
  }
}



//查询coins
const getCoins = async () => {
  let list = await getCoinsList()
  let temp = []
  for (let i = 0; i < list.data.list.length; i++) {
    let symbol = list.data.list[i].name.split("-")
    temp[i] = { "label": symbol[0], "value": list.data.list[i].name }
  }
  symbolOptions.value = temp

}

// 打开弹窗
const openDialog = () => {
  getCoins()
  type.value = 'create'
  dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
  dialogFormVisible.value = false
  formData.value = {
    apiKey: '',
    passphrase: '',
    secretKey: '',
    status: '启动',
    symbol: []
  }
}
// 弹窗确定
const enterDialog = async () => {
  elFormRef.value?.validate(async (valid) => {
    if (!valid) return
    let res


    switch (type.value) {
      case 'create':
        res = await createApis(formData.value)
        break
      case 'update':
        res = await updateApis(formData.value)
        break
      default:
        res = await createApis(formData.value)
        break
    }
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '创建/更改成功'
      })
      closeDialog()
      getTableData()
    } else {

      ElMessageBox({
        title: '提示', //MessageBox 标题
        message: res.msg, //MessageBox 消息正文内容
        confirmButtonText: '确定', //确定按钮的文本内容

        showCancelButton: false, //是否显示取消按钮
        closeOnClickModal: false, //是否可通过点击遮罩关闭
        type: 'warning', //消息类型，用于显示图标
      })
    }
  })
}

</script>

<style></style>
