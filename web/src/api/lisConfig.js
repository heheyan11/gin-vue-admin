import service from '@/utils/request'

// @Tags config
// @Summary listen获取配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /config/config [get]
export const getLisConfig = () => {
    return service({
      url: '/config/config',
      method: 'get'
    })
  }
  

  // @Tags config
// @Summary listen获取配置
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} json "{"success":true,"data":{},"msg":"设置成功"}"
// @Router /config/config [put]
export const updateLisConfig = (data) => {
    return service({
      url: '/config/config',
      method: 'put',
      data
    })
  }
  