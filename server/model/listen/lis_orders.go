// 自动生成模板Order
package listen

// 订单列表 结构体  Order
type Order struct {
	ID     uint   `gorm:"primarykey"`                                           // 主键ID
	Apikey string `json:"apikey" form:"apikey" gorm:"column:api_key;comment:;"` //用户apikey
	BuyId  string `json:"buyId" form:"buyId" gorm:"column:buy_id;comment:;"`    //买单id

	BuyAvgPx       string `json:"buyAvgPx" gorm:"buy_avg_px"`
	BuyNotionalUsd string `json:"buyNotionalUsd" gorm:"buy_notional_usd"`
	NotionalUsd    string `json:"notionalUsd" gorm:"notional_usd"`
	PnlRate        string `json:"pnlRate" gorm:"pnl_rate"`
	AccFillSz      string `json:"accFillSz" form:"accFillSz" gorm:"column:acc_fill_sz;comment:;"` //累计成交量
	AvgPx          string `json:"avgPx" form:"avgPx" gorm:"column:avg_px;comment:;"`              //成交均价
	Ctime          int64  `json:"ctime" form:"ctime" gorm:"column:ctime;comment:;"`               //创建订单的时间

	Fee      string `json:"fee" form:"fee" gorm:"column:fee;comment:;"`                 //累计手续费
	InstId   string `json:"instId" form:"instId" gorm:"column:inst_id;comment:;"`       //产品id
	InstType string `json:"instType" form:"instType" gorm:"column:inst_type;comment:;"` //产品类型
	Lever    string `json:"lever" form:"lever" gorm:"column:lever;comment:;"`           //杠杆倍数

	OrdId  string  `json:"ordId" form:"ordId" gorm:"column:ord_id;comment:;"`   //产品Id
	Income float64 `json:"income" form:"income" gorm:"column:income;comment:;"` //收益

}

// TableName 订单列表 Order自定义表名 lis_orders
func (Order) TableName() string {
	return "lis_orders"
}

type OrderIncome struct {
	Total float64
}
