package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
	"github.com/flipped-aurora/gin-vue-admin/server/service"
	"github.com/flipped-aurora/gin-vue-admin/server/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type CoinsApi struct {
}

var lisCoinsService = service.ServiceGroupApp.ListenServiceGroup.CoinsService

// CreateCoins 创建coin
// @Tags Coins
// @Summary 创建coin
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Coins true "创建coin"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /lisCoins/createCoins [post]
func (lisCoinsApi *CoinsApi) CreateCoins(c *gin.Context) {
	var lisCoins listen.Coins
	err := c.ShouldBindJSON(&lisCoins)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	verify := utils.Rules{
		"Name":    {utils.NotEmpty()},
		"Zhang":   {utils.NotEmpty()},
		"Decimal": {utils.NotEmpty()},
	}
	if err := utils.Verify(lisCoins, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisCoinsService.CreateCoins(&lisCoins); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {

		_, err = global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/system/setSymbol?symbol=" + lisCoins.Name)
		if err != nil {
			global.GVA_LOG.Error("请求失败!", zap.Error(err))
			response.FailWithMessage(err.Error(), c)
			return
		}
		response.OkWithMessage("创建成功", c)
	}
}

// DeleteCoins 删除coin
// @Tags Coins
// @Summary 删除coin
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Coins true "删除coin"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisCoins/deleteCoins [delete]
func (lisCoinsApi *CoinsApi) DeleteCoins(c *gin.Context) {
	var lisCoins listen.Coins
	err := c.ShouldBindJSON(&lisCoins)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisCoinsService.DeleteCoins(lisCoins); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		_, err = global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/system/delSymbol?symbol=" + lisCoins.Name)
		if err != nil {
			global.GVA_LOG.Error("请求失败!", zap.Error(err))
			response.FailWithMessage(err.Error(), c)
			return
		}
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteCoinsByIds 批量删除coin
// @Tags Coins
// @Summary 批量删除coin
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除coin"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /lisCoins/deleteCoinsByIds [delete]
func (lisCoinsApi *CoinsApi) DeleteCoinsByIds(c *gin.Context) {
	var IDS request.IdsReq
	err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisCoinsService.DeleteCoinsByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateCoins 更新coin
// @Tags Coins
// @Summary 更新coin
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Coins true "更新coin"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lisCoins/updateCoins [put]
func (lisCoinsApi *CoinsApi) UpdateCoins(c *gin.Context) {
	var lisCoins listen.Coins
	err := c.ShouldBindJSON(&lisCoins)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	verify := utils.Rules{
		"Name":    {utils.NotEmpty()},
		"Zhang":   {utils.NotEmpty()},
		"Decimal": {utils.NotEmpty()},
	}
	if err := utils.Verify(lisCoins, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisCoinsService.UpdateCoins(lisCoins); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		//global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/system/setSymbols")
		response.OkWithMessage("更新成功", c)
	}
}

// FindCoins 用id查询coin
// @Tags Coins
// @Summary 用id查询coin
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listen.Coins true "用id查询coin"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lisCoins/findCoins [get]
func (lisCoinsApi *CoinsApi) FindCoins(c *gin.Context) {
	var lisCoins listen.Coins
	err := c.ShouldBindQuery(&lisCoins)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if relisCoins, err := lisCoinsService.GetCoins(lisCoins.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"relisCoins": relisCoins}, c)
	}
}

// GetCoinsList 分页获取coin列表
// @Tags Coins
// @Summary 分页获取coin列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listenReq.CoinsSearch true "分页获取coin列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lisCoins/getCoinsList [get]
func (lisCoinsApi *CoinsApi) GetCoinsList(c *gin.Context) {
	var pageInfo listenReq.CoinsSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := lisCoinsService.GetCoinsInfoList(pageInfo); err != nil {
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
