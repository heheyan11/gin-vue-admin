package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type CoinsRouter struct {
}

// InitCoinsRouter 初始化 coin 路由信息
func (s *CoinsRouter) InitCoinsRouter(Router *gin.RouterGroup) {
	lisCoinsRouter := Router.Group("lisCoins").Use(middleware.OperationRecord())
	lisCoinsRouterWithoutRecord := Router.Group("lisCoins")
	var lisCoinsApi = v1.ApiGroupApp.ListenApiGroup.CoinsApi
	{
		lisCoinsRouter.POST("createCoins", lisCoinsApi.CreateCoins)   // 新建coin
		lisCoinsRouter.DELETE("deleteCoins", lisCoinsApi.DeleteCoins) // 删除coin
		lisCoinsRouter.DELETE("deleteCoinsByIds", lisCoinsApi.DeleteCoinsByIds) // 批量删除coin
		lisCoinsRouter.PUT("updateCoins", lisCoinsApi.UpdateCoins)    // 更新coin
	}
	{
		lisCoinsRouterWithoutRecord.GET("findCoins", lisCoinsApi.FindCoins)        // 根据ID获取coin
		lisCoinsRouterWithoutRecord.GET("getCoinsList", lisCoinsApi.GetCoinsList)  // 获取coin列表
	}
}
