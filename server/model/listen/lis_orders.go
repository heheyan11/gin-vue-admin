// 自动生成模板Order
package listen

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// 订单列表 结构体  Order
type Order struct {
	global.GVA_MODEL
	Apikey          string `json:"apikey" form:"apikey" gorm:"column:api_key;comment:;"`                             //用户apikey
	BuyId           string `json:"buyId" form:"buyId" gorm:"column:buy_id;comment:;"`                                //买单id
	AccFillSz       string `json:"accFillSz" form:"accFillSz" gorm:"column:acc_fill_sz;comment:;"`                   //累计成交量
	AvgPx           string `json:"avgPx" form:"avgPx" gorm:"column:avg_px;comment:;"`                                //成交均价
	Ctime           int64  `json:"ctime" form:"ctime" gorm:"column:ctime;comment:;"`                                 //创建订单的时间
	Code            string `json:"code" form:"code" gorm:"column:code;comment:;"`                                    //错误码
	Msg             string `json:"msg" form:"msg" gorm:"column:msg;comment:;"`                                       //错误信息
	Fee             string `json:"fee" form:"fee" gorm:"column:fee;comment:;"`                                       //累计手续费
	FeeCcy          string `json:"feeCcy" form:"feeCcy" gorm:"column:fee_ccy;comment:;"`                             //手续费币种
	FillNotionalUsd string `json:"fillNotionalUsd" form:"fillNotionalUsd" gorm:"column:fill_notional_usd;comment:;"` //委托单已成交美元价值
	FillTime        string `json:"fillTime" form:"fillTime" gorm:"column:fill_time;comment:;"`                       //最新成交时间
	InstId          string `json:"instId" form:"instId" gorm:"column:inst_id;comment:;"`                             //产品id
	InstType        string `json:"instType" form:"instType" gorm:"column:inst_type;comment:;"`                       //产品类型
	Lever           string `json:"lever" form:"lever" gorm:"column:lever;comment:;"`                                 //杠杆倍数
	NotionalUsd     string `json:"notionalUsd" form:"notionalUsd" gorm:"column:notional_usd;comment:;"`              //委托单美元价值
	OrdId           string `json:"ordId" form:"ordId" gorm:"column:ord_id;comment:;"`                                //产品Id
	OrdType         string `json:"ordType" form:"ordType" gorm:"column:ord_type;comment:;"`                          //订单类型
	Pnl             string `json:"pnl" form:"pnl" gorm:"column:pnl;comment:;"`                                       //收益
	Px              string `json:"px" form:"px" gorm:"column:px;comment:;"`                                          //委托价格
	Side            string `json:"side" form:"side" gorm:"column:side;comment:;"`                                    //订单方向
	Sz              string `json:"sz" form:"sz" gorm:"column:sz;comment:;"`                                          //委托数量
	TdMode          string `json:"tdMode" form:"tdMode" gorm:"column:td_mode;comment:;"`                             //交易模式
}

// TableName 订单列表 Order自定义表名 lis_orders
func (Order) TableName() string {
	return "lis_orders"
}
