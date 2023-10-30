package listen

import (
	v1 "github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type ConfigRouter struct {
}

func (e *ConfigRouter) InitConfigRouter(Router *gin.RouterGroup) {
	configRouter := Router.Group("config").Use(middleware.OperationRecord())
	configRouterWithoutRecord := Router.Group("config")
	lisConfigAPi := v1.ApiGroupApp.ListenApiGroup.LisConfigAPi
	{
		configRouter.PUT("config", lisConfigAPi.UpdateLisConfig) // 更新客户
	}
	{
		configRouterWithoutRecord.GET("config", lisConfigAPi.GetLisConfig) // 获取配置
	}
}
