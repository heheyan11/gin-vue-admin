import service from '@/utils/request'

// @Tags OrderError
// @Summary 创建错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.OrderError true "创建错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /orderError/createOrderError [post]
export const createOrderError = (data) => {
  return service({
    url: '/orderError/createOrderError',
    method: 'post',
    data
  })
}

// @Tags OrderError
// @Summary 删除错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.OrderError true "删除错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /orderError/deleteOrderError [delete]
export const deleteOrderError = (data) => {
  return service({
    url: '/orderError/deleteOrderError',
    method: 'delete',
    data
  })
}

// @Tags OrderError
// @Summary 批量删除错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /orderError/deleteOrderError [delete]
export const deleteOrderErrorByIds = (data) => {
  return service({
    url: '/orderError/deleteOrderErrorByIds',
    method: 'delete',
    data
  })
}

// @Tags OrderError
// @Summary 更新错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.OrderError true "更新错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /orderError/updateOrderError [put]
export const updateOrderError = (data) => {
  return service({
    url: '/orderError/updateOrderError',
    method: 'put',
    data
  })
}

// @Tags OrderError
// @Summary 用id查询错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.OrderError true "用id查询错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /orderError/findOrderError [get]
export const findOrderError = (params) => {
  return service({
    url: '/orderError/findOrderError',
    method: 'get',
    params
  })
}

// @Tags OrderError
// @Summary 分页获取错误订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取错误订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /orderError/getOrderErrorList [get]
export const getOrderErrorList = (params) => {
  return service({
    url: '/orderError/getOrderErrorList',
    method: 'get',
    params
  })
}
