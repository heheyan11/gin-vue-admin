import service from '@/utils/request'

// @Tags Coins
// @Summary 创建coin配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Coins true "创建coin配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /lisCoins/createCoins [post]
export const createCoins = (data) => {
  return service({
    url: '/lisCoins/createCoins',
    method: 'post',
    data
  })
}

// @Tags Coins
// @Summary 删除coin配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Coins true "删除coin配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisCoins/deleteCoins [delete]
export const deleteCoins = (data) => {
  return service({
    url: '/lisCoins/deleteCoins',
    method: 'delete',
    data
  })
}

// @Tags Coins
// @Summary 批量删除coin配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除coin配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisCoins/deleteCoins [delete]
export const deleteCoinsByIds = (data) => {
  return service({
    url: '/lisCoins/deleteCoinsByIds',
    method: 'delete',
    data
  })
}

// @Tags Coins
// @Summary 更新coin配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Coins true "更新coin配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lisCoins/updateCoins [put]
export const updateCoins = (data) => {
  return service({
    url: '/lisCoins/updateCoins',
    method: 'put',
    data
  })
}

// @Tags Coins
// @Summary 用id查询coin配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Coins true "用id查询coin配置"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lisCoins/findCoins [get]
export const findCoins = (params) => {
  return service({
    url: '/lisCoins/findCoins',
    method: 'get',
    params
  })
}

// @Tags Coins
// @Summary 分页获取coin配置列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取coin配置列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lisCoins/getCoinsList [get]
export const getCoinsList = (params) => {
  return service({
    url: '/lisCoins/getCoinsList',
    method: 'get',
    params
  })
}
