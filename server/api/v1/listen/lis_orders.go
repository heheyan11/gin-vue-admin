package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
    "github.com/flipped-aurora/gin-vue-admin/server/model/listen"
    "github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
    listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
    "github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
    "github.com/flipped-aurora/gin-vue-admin/server/service"
    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
    "github.com/flipped-aurora/gin-vue-admin/server/utils"
)

type OrderApi struct {
}

var lisOrdersService = service.ServiceGroupApp.ListenServiceGroup.OrderService


// CreateOrder 创建订单列表
// @Tags Order
// @Summary 创建订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Order true "创建订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /lisOrders/createOrder [post]
func (lisOrdersApi *OrderApi) CreateOrder(c *gin.Context) {
	var lisOrders listen.Order
	err := c.ShouldBindJSON(&lisOrders)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
    verify := utils.Rules{
        "Apikey":{utils.NotEmpty()},
    }
	if err := utils.Verify(lisOrders, verify); err != nil {
    		response.FailWithMessage(err.Error(), c)
    		return
    	}
	if err := lisOrdersService.CreateOrder(&lisOrders); err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteOrder 删除订单列表
// @Tags Order
// @Summary 删除订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Order true "删除订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisOrders/deleteOrder [delete]
func (lisOrdersApi *OrderApi) DeleteOrder(c *gin.Context) {
	var lisOrders listen.Order
	err := c.ShouldBindJSON(&lisOrders)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisOrdersService.DeleteOrder(lisOrders); err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteOrderByIds 批量删除订单列表
// @Tags Order
// @Summary 批量删除订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /lisOrders/deleteOrderByIds [delete]
func (lisOrdersApi *OrderApi) DeleteOrderByIds(c *gin.Context) {
	var IDS request.IdsReq
    err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisOrdersService.DeleteOrderByIds(IDS); err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateOrder 更新订单列表
// @Tags Order
// @Summary 更新订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Order true "更新订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lisOrders/updateOrder [put]
func (lisOrdersApi *OrderApi) UpdateOrder(c *gin.Context) {
	var lisOrders listen.Order
	err := c.ShouldBindJSON(&lisOrders)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
      verify := utils.Rules{
          "Apikey":{utils.NotEmpty()},
      }
    if err := utils.Verify(lisOrders, verify); err != nil {
      	response.FailWithMessage(err.Error(), c)
      	return
     }
	if err := lisOrdersService.UpdateOrder(lisOrders); err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindOrder 用id查询订单列表
// @Tags Order
// @Summary 用id查询订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listen.Order true "用id查询订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lisOrders/findOrder [get]
func (lisOrdersApi *OrderApi) FindOrder(c *gin.Context) {
	var lisOrders listen.Order
	err := c.ShouldBindQuery(&lisOrders)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if relisOrders, err := lisOrdersService.GetOrder(lisOrders.ID); err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"relisOrders": relisOrders}, c)
	}
}

// GetOrderList 分页获取订单列表列表
// @Tags Order
// @Summary 分页获取订单列表列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listenReq.OrderSearch true "分页获取订单列表列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lisOrders/getOrderList [get]
func (lisOrdersApi *OrderApi) GetOrderList(c *gin.Context) {
	var pageInfo listenReq.OrderSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := lisOrdersService.GetOrderInfoList(pageInfo); err != nil {
	    global.GVA_LOG.Error("获取失败!", zap.Error(err))
        response.FailWithMessage("获取失败", c)
    } else {
        response.OkWithDetailed(response.PageResult{
            List:     list,
            Total:    total,
            Page:     pageInfo.Page,
            PageSize: pageInfo.PageSize,
        }, "获取成功", c)
    }
}
