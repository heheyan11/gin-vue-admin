// 自动生成模板Apis
package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// 用户Api 结构体  Apis
type Apis struct {
	global.GVA_MODEL
	ApiKey     string `json:"apiKey" form:"apiKey" gorm:"column:api_key;comment:ApiKey;"`                     //ApiKey
	PassPhrase string `json:"passphrase" form:"passPhrase" gorm:"column:pass_phrase;comment:PassPhrase;"`     //PassPhrase
	SecretKey  string `json:"secretKey" form:"secretKey" gorm:"column:secret_key;comment:SecretKey;"`         //SecretKey
	Status     string `json:"status" form:"status" gorm:"column:status;type:enum('停止','启动');comment:Status;"` //是否启动
}

// TableName 用户Api Apis自定义表名 lis_apis
func (Apis) TableName() string {
	return "lis_apis"
}
