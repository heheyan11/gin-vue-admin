package response

type LisConfigResponse struct {
	// 现货下单U
	SpotNum       string `json:"spotNum"`
	SwapNum       string `json:"swapNum"`
	PlanOrderRate string `json:"planOrderRate"`
	TopRate       string `json:"topRate"`
	TopCallRate   string `json:"topCallRate"`
}