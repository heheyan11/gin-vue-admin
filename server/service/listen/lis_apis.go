package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
)

type ApisService struct {
}

// CreateApis 创建用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) CreateApis(lisApis *listen.Apis) (err error) {
	err = global.GVA_DB.Create(lisApis).Error
	return err
}

// DeleteApis 删除用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) DeleteApis(lisApis listen.Apis) (err error) {
	err = global.GVA_DB.Delete(&lisApis).Error
	return err
}

// DeleteApisByIds 批量删除用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) DeleteApisByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]listen.Apis{}, "id in ?", ids.Ids).Error
	return err
}

// UpdateApis 更新用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) UpdateApis(lisApis listen.Apis) (err error) {
	err = global.GVA_DB.Omit("created_at", "deleted_at", "secret_key", "pass_phrase").Save(&lisApis).Error
	return err
}

// GetApis 根据id获取用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) GetApis(id uint) (lisApis listen.Apis, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&lisApis).Error
	return
}

// GetApisInfoList 分页获取用户Api记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisApisService *ApisService) GetApisInfoList(info listenReq.ApisSearch) (list []listen.Apis, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&listen.Apis{})
	var lisApiss []listen.Apis
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
	}
	if info.ApiKey != "" {
		db = db.Where("api_key = ?", info.ApiKey)
	}

	err = db.Count(&total).Error
	if err != nil {
		return
	}

	if limit != 0 {
		db = db.Limit(limit).Offset(offset)
	}

	err = db.Find(&lisApiss).Error
	return lisApiss, total, err
}
