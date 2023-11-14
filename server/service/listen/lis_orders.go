package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
)

type OrderService struct {
}

// CreateOrder 创建订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) CreateOrder(lisOrders *listen.Order) (err error) {
	err = global.GVA_DB.Create(lisOrders).Error
	return err
}

// DeleteOrder 删除订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) DeleteOrder(lisOrders listen.Order) (err error) {
	err = global.GVA_DB.Delete(&lisOrders).Error
	return err
}

// DeleteOrderByIds 批量删除订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) DeleteOrderByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]listen.Order{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateOrder 更新订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) UpdateOrder(lisOrders listen.Order) (err error) {
	err = global.GVA_DB.Save(&lisOrders).Error
	return err
}

// GetOrder 根据id获取订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) GetOrder(id uint) (lisOrders listen.Order, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&lisOrders).Error
	return
}

func (lisOrdersService *OrderService) GetIncomeSum(apiKey string) []float64 {
	var zheng listen.OrderIncome
	global.GVA_DB.Model(&listen.Order{}).Where("api_key = ? and income > 0", apiKey).Select("SUM(income) as total").First(&zheng)

	var fu listen.OrderIncome
	global.GVA_DB.Model(&listen.Order{}).Where("api_key = ? and income < 0", apiKey).Select("SUM(income) as total").First(&fu)

	return []float64{zheng.Total, fu.Total, zheng.Total + fu.Total}
}

// GetOrderInfoList 分页获取订单列表记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisOrdersService *OrderService) GetOrderInfoList(info listenReq.OrderSearch) (list []listen.Order, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&listen.Order{})
	var lisOrderss []listen.Order

	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("ctime BETWEEN ? AND ?", info.StartCreatedAt.UnixMilli(), info.EndCreatedAt.UnixMilli())
	}
	if info.BuyId != "" {
		db = db.Where("buy_id = ?", info.BuyId)
	}
	if info.InstId != "" {
		db = db.Where("inst_id = ?", info.InstId)
	}
	if info.InstType != "" {
		db = db.Where("inst_type = ?", info.InstType)
	}
	if info.OrdId != "" {
		db = db.Where("ord_id LIKE ?", "%"+info.OrdId+"%")
	}
	if info.Apikey != "" {
		db = db.Where("api_key = ?", info.Apikey)
	}

	err = db.Count(&total).Error
	if err != nil {
		return
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Order("id desc").Find(&lisOrderss).Error
	return lisOrderss, total, err
}
