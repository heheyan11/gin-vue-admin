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
)

type OrderErrorApi struct {
}

var orderErrorService = service.ServiceGroupApp.ListenServiceGroup.OrderErrorService


// CreateOrderError 创建错误订单
// @Tags OrderError
// @Summary 创建错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.OrderError true "创建错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /orderError/createOrderError [post]
func (orderErrorApi *OrderErrorApi) CreateOrderError(c *gin.Context) {
	var orderError listen.OrderError
	err := c.ShouldBindJSON(&orderError)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := orderErrorService.CreateOrderError(&orderError); err != nil {
        global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteOrderError 删除错误订单
// @Tags OrderError
// @Summary 删除错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.OrderError true "删除错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /orderError/deleteOrderError [delete]
func (orderErrorApi *OrderErrorApi) DeleteOrderError(c *gin.Context) {
	var orderError listen.OrderError
	err := c.ShouldBindJSON(&orderError)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := orderErrorService.DeleteOrderError(orderError); err != nil {
        global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteOrderErrorByIds 批量删除错误订单
// @Tags OrderError
// @Summary 批量删除错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /orderError/deleteOrderErrorByIds [delete]
func (orderErrorApi *OrderErrorApi) DeleteOrderErrorByIds(c *gin.Context) {
	var IDS request.IdsReq
    err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := orderErrorService.DeleteOrderErrorByIds(IDS); err != nil {
        global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateOrderError 更新错误订单
// @Tags OrderError
// @Summary 更新错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.OrderError true "更新错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /orderError/updateOrderError [put]
func (orderErrorApi *OrderErrorApi) UpdateOrderError(c *gin.Context) {
	var orderError listen.OrderError
	err := c.ShouldBindJSON(&orderError)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := orderErrorService.UpdateOrderError(orderError); err != nil {
        global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindOrderError 用id查询错误订单
// @Tags OrderError
// @Summary 用id查询错误订单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listen.OrderError true "用id查询错误订单"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /orderError/findOrderError [get]
func (orderErrorApi *OrderErrorApi) FindOrderError(c *gin.Context) {
	var orderError listen.OrderError
	err := c.ShouldBindQuery(&orderError)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if reorderError, err := orderErrorService.GetOrderError(orderError.ID); err != nil {
        global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"reorderError": reorderError}, c)
	}
}

// GetOrderErrorList 分页获取错误订单列表
// @Tags OrderError
// @Summary 分页获取错误订单列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listenReq.OrderErrorSearch true "分页获取错误订单列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /orderError/getOrderErrorList [get]
func (orderErrorApi *OrderErrorApi) GetOrderErrorList(c *gin.Context) {
	var pageInfo listenReq.OrderErrorSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := orderErrorService.GetOrderErrorInfoList(pageInfo); err != nil {
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
