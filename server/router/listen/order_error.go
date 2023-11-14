package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type OrderErrorRouter struct {
}

// InitOrderErrorRouter 初始化 错误订单 路由信息
func (s *OrderErrorRouter) InitOrderErrorRouter(Router *gin.RouterGroup) {
	orderErrorRouter := Router.Group("orderError").Use(middleware.OperationRecord())
	orderErrorRouterWithoutRecord := Router.Group("orderError")
	var orderErrorApi = v1.ApiGroupApp.ListenApiGroup.OrderErrorApi
	{
		orderErrorRouter.POST("createOrderError", orderErrorApi.CreateOrderError)   // 新建错误订单
		orderErrorRouter.DELETE("deleteOrderError", orderErrorApi.DeleteOrderError) // 删除错误订单
		orderErrorRouter.DELETE("deleteOrderErrorByIds", orderErrorApi.DeleteOrderErrorByIds) // 批量删除错误订单
		orderErrorRouter.PUT("updateOrderError", orderErrorApi.UpdateOrderError)    // 更新错误订单
	}
	{
		orderErrorRouterWithoutRecord.GET("findOrderError", orderErrorApi.FindOrderError)        // 根据ID获取错误订单
		orderErrorRouterWithoutRecord.GET("getOrderErrorList", orderErrorApi.GetOrderErrorList)  // 获取错误订单列表
	}
}
