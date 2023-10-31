package request

import (
	"github.com/flipped-aurora/gin-vue-admin/server/model/listen"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"time"
)

type CoinsSearch struct{
    listen.Coins
    StartCreatedAt *time.Time `json:"startCreatedAt" form:"startCreatedAt"`
    EndCreatedAt   *time.Time `json:"endCreatedAt" form:"endCreatedAt"`
    request.PageInfo
}
