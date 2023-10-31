package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
    listenReq "github.com/flipped-aurora/gin-vue-admin/server/model/listen/request"
)

type CoinsService struct {
}

// CreateCoins 创建coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService) CreateCoins(lisCoins *listen.Coins) (err error) {
	err = global.GVA_DB.Create(lisCoins).Error
	return err
}

// DeleteCoins 删除coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService)DeleteCoins(lisCoins listen.Coins) (err error) {
	err = global.GVA_DB.Delete(&lisCoins).Error
	return err
}

// DeleteCoinsByIds 批量删除coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService)DeleteCoinsByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]listen.Coins{},"id in ?",ids.Ids).Error
	return err
}

// UpdateCoins 更新coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService)UpdateCoins(lisCoins listen.Coins) (err error) {
	err = global.GVA_DB.Save(&lisCoins).Error
	return err
}

// GetCoins 根据id获取coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService)GetCoins(id uint) (lisCoins listen.Coins, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&lisCoins).Error
	return
}

// GetCoinsInfoList 分页获取coin记录
// Author [piexlmax](https://github.com/piexlmax)
func (lisCoinsService *CoinsService)GetCoinsInfoList(info listenReq.CoinsSearch) (list []listen.Coins, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&listen.Coins{})
    var lisCoinss []listen.Coins
    // 如果有条件搜索 下方会自动创建搜索语句
    if info.StartCreatedAt !=nil && info.EndCreatedAt !=nil {
     db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
    }
	err = db.Count(&total).Error
	if err!=nil {
    	return
    }

	if limit != 0 {
       db = db.Limit(limit).Offset(offset)
    }
	
	err = db.Find(&lisCoinss).Error
	return  lisCoinss, total, err
}
