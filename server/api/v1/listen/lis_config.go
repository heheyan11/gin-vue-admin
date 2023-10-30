package listen

import (
	"context"
	"encoding/json"
	"errors"
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
	"github.com/flipped-aurora/gin-vue-admin/server/utils"

	configRes "github.com/flipped-aurora/gin-vue-admin/server/model/listen/response"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type LisConfigAPi struct {
}

// GetLisConfig
// @Tags      GetLisConfig
// @Summary   获取配置
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Success   200   {object}  response.Response{data=configRes.LisConfigResponse,msg=string}  "获取配置信息"
// @Router    /config/config [get]
func (e *LisConfigAPi) GetLisConfig(c *gin.Context) {

	data, err := global.GVA_REDIS.Get(context.Background(), "config").Result()
	if err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err), zap.Error(errors.New(data)))
		response.FailWithMessage("获取失败", c)
		return
	}
	configResponse := configRes.LisConfigResponse{}
	err = json.Unmarshal([]byte(data), &configResponse)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	response.OkWithDetailed(configResponse, "获取成功", c)
}

// UpdateLisConfig
// @Tags      UpdateLisConfig
// @Summary   设置配置
// @Security  ApiKeyAuth
// @accept    application/json
// @Produce   application/json
// @Param     data  body      example.ExaCustomer            true  "客户ID, 客户信息"
// @Success   200   {object}  response.Response{msg=string}  "更新客户信息"
// @Router    /config/config [put]
func (e *LisConfigAPi) UpdateLisConfig(c *gin.Context) {

	var config request.LisConfigRequest
	err := c.ShouldBindJSON(&config)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = utils.Verify(config, utils.LisConfigVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	str, err := json.Marshal(config)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = global.GVA_REDIS.Set(context.Background(), "config", str, 0).Err()
	if err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
		return
	}

	get, err := global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/system/setSystem")
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	global.GVA_LOG.Info(string(get))
	response.OkWithMessage("更新成功", c)
}
