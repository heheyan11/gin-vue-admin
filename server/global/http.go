package global

import (
	"bytes"
	"io/ioutil"
	"net"
	"net/http"
	"time"
)

var defclient *http.Client

func init() {
	transport := &http.Transport{
		MaxIdleConns:        100, // 最大空闲连接
		MaxIdleConnsPerHost: 10,  // 最大空闲连接/host
		MaxConnsPerHost:     0,   //最大连接数
		DialContext: (&net.Dialer{
			Timeout:   30 * time.Second, //拨号超时
			KeepAlive: 30 * time.Second, //探活间隔
		}).DialContext,
		DisableKeepAlives:   false,            //禁用长连接
		ForceAttemptHTTP2:   true,             //是否尝试http2
		IdleConnTimeout:     90 * time.Second, //空闲连接超时时间
		TLSHandshakeTimeout: 10 * time.Second, //握手超时
		//ExpectContinueTimeout: 1 * time.Second,  //限制client在发送包含 Expect: 100-continue的header到收到继续发送body的response之间的时间等待
	}

	defclient = &http.Client{Transport: transport}
}
func HttpGet(url string) ([]byte, error) {

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("accept", "application/json")

	resp, err := defclient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	return ioutil.ReadAll(resp.Body)
}

func HttpPost(url string, body []byte) ([]byte, error) {

	req, _ := http.NewRequest("POST", url, bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("accept", "application/json")

	resp, err := defclient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	return ioutil.ReadAll(resp.Body)
}

type Resp struct {
	Code string
	Msg  string
	Data interface{}
}
