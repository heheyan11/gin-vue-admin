// 自动生成模板OrderError
package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// 错误订单 结构体  OrderError
type OrderError struct {
	global.GVA_MODEL
	Source  string `json:"source" form:"source" gorm:"column:source;comment:;"`     //来源
	Scode   *int   `json:"scode" form:"scode" gorm:"column:scode;comment:;"`        //接口状态码
	Smsg    string `json:"smsg" form:"smsg" gorm:"column:smsg;comment:;"`           //错误说明
	ApiKey  string `json:"apiKey" form:"apiKey" gorm:"column:api_key;comment:;"`    //账号key
	Symbol  string `json:"symbol" form:"symbol" gorm:"column:symbol;comment:;"`     //symbol
	OutTime *int   `json:"outTime" form:"outTime" gorm:"column:out_time;comment:;"` //时间
}

// TableName 错误订单 OrderError自定义表名 lis_errors
func (OrderError) TableName() string {
	return "lis_errors"
}
