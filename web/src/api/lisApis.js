import service from '@/utils/request'

// @Tags Apis
// @Summary 创建用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Apis true "创建用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /lisApis/createApis [post]
export const createApis = (data) => {
  return service({
    url: '/lisApis/createApis',
    method: 'post',
    data
  })
}

// @Tags Apis
// @Summary 删除用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Apis true "删除用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisApis/deleteApis [delete]
export const deleteApis = (data) => {
  return service({
    url: '/lisApis/deleteApis',
    method: 'delete',
    data
  })
}

// @Tags Apis
// @Summary 批量删除用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisApis/deleteApis [delete]
export const deleteApisByIds = (data) => {
  return service({
    url: '/lisApis/deleteApisByIds',
    method: 'delete',
    data
  })
}

// @Tags Apis
// @Summary 更新用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Apis true "更新用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lisApis/updateApis [put]
export const updateApis = (data) => {
  return service({
    url: '/lisApis/updateApis',
    method: 'put',
    data
  })
}

// @Tags Apis
// @Summary 用id查询用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Apis true "用id查询用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lisApis/findApis [get]
export const findApis = (params) => {
  return service({
    url: '/lisApis/findApis',
    method: 'get',
    params
  })
}


export const findStatus = (params) => {
  return service({
    url: '/lisApis/findStatus',
    method: 'get',
    params
  })
}




// @Tags Apis
// @Summary 分页获取用户Api列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取用户Api列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lisApis/getApisList [get]
export const getApisList = (params) => {
  return service({
    url: '/lisApis/getApisList',
    method: 'get',
    params
  })
}
