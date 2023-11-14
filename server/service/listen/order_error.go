package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
)

type OrderErrorService struct {
}

// CreateOrderError 创建错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) CreateOrderError(orderError *listen.OrderError) (err error) {
	err = global.GVA_DB.Create(orderError).Error
	return err
}

// DeleteOrderError 删除错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) DeleteOrderError(orderError listen.OrderError) (err error) {
	err = global.GVA_DB.Delete(&orderError).Error
	return err
}

// DeleteOrderErrorByIds 批量删除错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) DeleteOrderErrorByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]listen.OrderError{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateOrderError 更新错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) UpdateOrderError(orderError listen.OrderError) (err error) {
	err = global.GVA_DB.Save(&orderError).Error
	return err
}

// GetOrderError 根据id获取错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) GetOrderError(id uint) (orderError listen.OrderError, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&orderError).Error
	return
}

// GetOrderErrorInfoList 分页获取错误订单记录
// Author [piexlmax](https://github.com/piexlmax)
func (orderErrorService *OrderErrorService) GetOrderErrorInfoList(info listenReq.OrderErrorSearch) (list []listen.OrderError, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&listen.OrderError{})
	var orderErrors []listen.OrderError
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
	}
	if info.Scode != nil {
		db = db.Where("scode =  ?", info.Scode)
	}
	if info.Smsg != "" {
		db = db.Where("smsg LIKE ?", "%"+info.Smsg+"%")
	}
	if info.ApiKey != "" {
		db = db.Where("api_key = ?", info.ApiKey)
	}
	if info.Symbol != "" {
		db = db.Where("symbol = ?", info.Symbol)
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Find(&orderErrors).Error
	return orderErrors, total, err
}
