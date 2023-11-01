package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type OrderRouter struct {
}

// InitOrderRouter 初始化 订单列表 路由信息
func (s *OrderRouter) InitOrderRouter(Router *gin.RouterGroup) {
	lisOrdersRouter := Router.Group("lisOrders").Use(middleware.OperationRecord())
	lisOrdersRouterWithoutRecord := Router.Group("lisOrders")
	var lisOrdersApi = v1.ApiGroupApp.ListenApiGroup.OrderApi
	{
		lisOrdersRouter.POST("createOrder", lisOrdersApi.CreateOrder)   // 新建订单列表
		lisOrdersRouter.DELETE("deleteOrder", lisOrdersApi.DeleteOrder) // 删除订单列表
		lisOrdersRouter.DELETE("deleteOrderByIds", lisOrdersApi.DeleteOrderByIds) // 批量删除订单列表
		lisOrdersRouter.PUT("updateOrder", lisOrdersApi.UpdateOrder)    // 更新订单列表
	}
	{
		lisOrdersRouterWithoutRecord.GET("findOrder", lisOrdersApi.FindOrder)        // 根据ID获取订单列表
		lisOrdersRouterWithoutRecord.GET("getOrderList", lisOrdersApi.GetOrderList)  // 获取订单列表列表
	}
}
