// 自动生成模板Coins
package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	
	
)

// coin配置 结构体  Coins
type Coins struct {
      global.GVA_MODEL
      Name  string `json:"name" form:"name" gorm:"column:name;comment:coin名字;"`  //名字 
      Zhang  string `json:"zhang" form:"zhang" gorm:"column:zhang;comment:;"`  //每张价值 
      Decimal  string `json:"decimal" form:"decimal" gorm:"column:decimal;comment:精度;"`  //精度 
}


// TableName coin配置 Coins自定义表名 lis_coins
func (Coins) TableName() string {
  return "lis_coins"
}

