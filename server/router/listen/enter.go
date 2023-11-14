package listen

type RouterGroup struct {
	ConfigRouter
	ApisRouter
	CoinsRouter
	OrderRouter
	OrderErrorRouter
}
