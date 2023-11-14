package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type ApisRouter struct {
}

// InitApisRouter 初始化 用户Api 路由信息
func (s *ApisRouter) InitApisRouter(Router *gin.RouterGroup) {
	lisApisRouter := Router.Group("lisApis").Use(middleware.OperationRecord())
	lisApisRouterWithoutRecord := Router.Group("lisApis")
	var lisApisApi = v1.ApiGroupApp.ListenApiGroup.ApisApi
	{
		lisApisRouter.POST("createApis", lisApisApi.CreateApis)             // 新建用户Api
		lisApisRouter.DELETE("deleteApis", lisApisApi.DeleteApis)           // 删除用户Api
		lisApisRouter.DELETE("deleteApisByIds", lisApisApi.DeleteApisByIds) // 批量删除用户Api
		lisApisRouter.PUT("updateApis", lisApisApi.UpdateApis)              // 更新用户Api
	}
	{
		lisApisRouterWithoutRecord.GET("findApis", lisApisApi.FindApis)       // 根据ID获取用户Api
		lisApisRouterWithoutRecord.GET("findStatus", lisApisApi.FindStatus)   // 根据ID获取用户Api
		lisApisRouterWithoutRecord.GET("setPosition", lisApisApi.SetPosition) // 根据ID获取用户Api
		lisApisRouterWithoutRecord.GET("getApisList", lisApisApi.GetApisList) // 获取用户Api列表
	}
}
