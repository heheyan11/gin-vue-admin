package listen

import (
	"encoding/json"
	"fmt"
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
	"github.com/flipped-aurora/gin-vue-admin/server/service"
	"github.com/flipped-aurora/gin-vue-admin/server/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"strconv"
)

type ApisApi struct {
}

var lisApisService = service.ServiceGroupApp.ListenServiceGroup.ApisService

// CreateApis 创建用户Api
// @Tags Apis
// @Summary 创建用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Apis true "创建用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"创建成功"}"
// @Router /lisApis/createApis [post]
func (lisApisApi *ApisApi) CreateApis(c *gin.Context) {

	var lisApis listenReq.ApisSymbol
	err := c.ShouldBindJSON(&lisApis)
	if err != nil {
		global.GVA_LOG.Error(err.Error())
		response.FailWithMessage(err.Error(), c)
		return
	}
	verify := utils.Rules{
		"ApiKey":     {utils.NotEmpty()},
		"PassPhrase": {utils.NotEmpty()},
		"SecretKey":  {utils.NotEmpty()},
	}

	if err := utils.Verify(lisApis, verify); err != nil {
		global.GVA_LOG.Error(err.Error())
		response.FailWithMessage(err.Error(), c)
		return
	}

	if lisApis.Status == "启动" {
		marshal, _ := json.Marshal(lisApis)
		post, err := global.HttpPost(global.GVA_CONFIG.Vars.LisUrl+"/user/start", marshal)
		if err != nil {
			global.GVA_LOG.Error("请求失败!", zap.Error(err))
			response.FailWithMessage(err.Error(), c)
			return
		}
		resp := response.Response{}
		json.Unmarshal(post, &resp)
		if resp.Code != 0 {
			global.GVA_LOG.Error(err.Error())
			response.FailWithMessage(resp.Msg, c)
			return
		}
	}
	symbol, err := json.Marshal(lisApis.Symbol)
	apis := listen.Apis{
		ApiKey:     lisApis.ApiKey,
		PassPhrase: lisApis.PassPhrase,
		SecretKey:  lisApis.SecretKey,
		Status:     lisApis.Status,
		Symbol:     string(symbol),
	}
	if err != nil {
		global.GVA_LOG.Error(err.Error())
	}

	if err = lisApisService.CreateApis(&apis); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {

		response.OkWithMessage("创建成功", c)
	}
}

// DeleteApis 删除用户Api
// @Tags Apis
// @Summary 删除用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Apis true "删除用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /lisApis/deleteApis [delete]
func (lisApisApi *ApisApi) DeleteApis(c *gin.Context) {
	var lisApis listen.Apis
	err := c.ShouldBindJSON(&lisApis)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisApisService.DeleteApis(lisApis); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		_, err = global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/user/stop?apikey=" + lisApis.ApiKey + "&delete=true")
		if err != nil {
			global.GVA_LOG.Error("请求失败!", zap.Error(err))
			response.FailWithMessage(err.Error(), c)
			return
		}
		response.OkWithMessage("删除成功", c)
	}
}

// DeleteApisByIds 批量删除用户Api
// @Tags Apis
// @Summary 批量删除用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /lisApis/deleteApisByIds [delete]
func (lisApisApi *ApisApi) DeleteApisByIds(c *gin.Context) {
	var IDS request.IdsReq
	err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := lisApisService.DeleteApisByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdateApis 更新用户Api
// @Tags Apis
// @Summary 更新用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body listen.Apis true "更新用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /lisApis/updateApis [put]
func (lisApisApi *ApisApi) UpdateApis(c *gin.Context) {
	var lisApis listenReq.ApisSymbol
	err := c.ShouldBindJSON(&lisApis)
	if err != nil {
		global.GVA_LOG.Error(err.Error())
		response.FailWithMessage(err.Error(), c)
		return
	}
	verify := utils.Rules{
		"ApiKey":     {utils.NotEmpty()},
		"PassPhrase": {utils.NotEmpty()},
		"SecretKey":  {utils.NotEmpty()},
	}
	if err := utils.Verify(lisApis, verify); err != nil {
		global.GVA_LOG.Error(err.Error())
		response.FailWithMessage(err.Error(), c)
		return
	}

	apis, err := lisApisService.GetApis(lisApis.ID)
	if err != nil {
		global.GVA_LOG.Error(err.Error())
		response.FailWithMessage(err.Error(), c)
		return
	}
	symbol, err := json.Marshal(lisApis.Symbol)
	//启动停止
	if apis.Status != lisApis.Status {

		switch lisApis.Status {
		case "启动":
			marshal, _ := json.Marshal(lisApis)
			post, err := global.HttpPost(global.GVA_CONFIG.Vars.LisUrl+"/user/start", marshal)
			if err != nil {
				global.GVA_LOG.Error("请求失败!", zap.Error(err))
				response.FailWithMessage(err.Error(), c)
				return
			}
			resp := response.Response{}
			json.Unmarshal(post, &resp)
			if resp.Code != 0 {
				response.FailWithMessage(resp.Msg, c)
				return
			}
		case "停止":
			_, err = global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/user/stop?apikey=" + lisApis.ApiKey)
			if err != nil {
				global.GVA_LOG.Error("请求失败!", zap.Error(err))
				response.FailWithMessage(err.Error(), c)
				return
			}
		}
	} else {
		if apis.Status == "启动" && string(symbol) != apis.Symbol {
			_, err := global.HttpPost(global.GVA_CONFIG.Vars.LisUrl+"/user/setSymbol?apikey="+lisApis.ApiKey, symbol)
			if err != nil {
				global.GVA_LOG.Error("请求失败!", zap.Error(err))
				response.FailWithMessage(err.Error(), c)
				return
			}
		}
	}

	apis = listen.Apis{
		ApiKey:     lisApis.ApiKey,
		PassPhrase: lisApis.PassPhrase,
		SecretKey:  lisApis.SecretKey,
		Status:     lisApis.Status,
		Symbol:     string(symbol),
	}
	apis.ID = lisApis.ID

	if err := lisApisService.UpdateApis(apis); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	}
	response.OkWithMessage("更新成功", c)
}

// FindApis 用id查询用户Api
// @Tags Apis
// @Summary 用id查询用户Api
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listen.Apis true "用id查询用户Api"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /lisApis/findApis [get]
func (lisApisApi *ApisApi) FindApis(c *gin.Context) {
	var lisApis listen.Apis
	err := c.ShouldBindQuery(&lisApis)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if relisApis, err := lisApisService.GetApis(lisApis.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		response.OkWithData(gin.H{"relisApis": relisApis}, c)
	}
}

func (lisApisApi *ApisApi) FindStatus(c *gin.Context) {
	var lisApis listen.Apis
	err := c.ShouldBindQuery(&lisApis)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	rest, err := global.HttpGet(global.GVA_CONFIG.Vars.LisUrl + "/user/status?apikey=" + lisApis.ApiKey)
	if err != nil {
		global.GVA_LOG.Error("请求失败!", zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	}

	c.String(200, string(rest))
	//response.OkWithData(gin.H{"rest": string(rest)}, c)

}

// GetApisList 分页获取用户Api列表
// @Tags Apis
// @Summary 分页获取用户Api列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query listenReq.ApisSearch true "分页获取用户Api列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /lisApis/getApisList [get]
func (lisApisApi *ApisApi) GetApisList(c *gin.Context) {
	var pageInfo listenReq.ApisSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := lisApisService.GetApisInfoList(pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", c)
	} else {

		for i, value := range list {
			res := lisOrdersService.GetIncomeSum(value.ApiKey)
			fmt.Println(res)
			list[i].Zheng = strconv.FormatFloat(res[0], 'f', 4, 64)
			list[i].Fu = strconv.FormatFloat(res[1], 'f', 4, 64)
			list[i].Zong = strconv.FormatFloat(res[2], 'f', 4, 64)
		}

		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}
