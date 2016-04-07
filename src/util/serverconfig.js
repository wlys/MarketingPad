var API_ADDRESS = 'http://192.168.155.2';

var DEBUG = true;

var ServerConfig = {
    getSmsCode:function (type) {
        return API_ADDRESS+'/sms/sendcode'
    },
    HOST: 			API_ADDRESS,
    LOGIN:    		API_ADDRESS + '/login/verifiycode',
    CATEGORYLIST: 	API_ADDRESS + '/stores/assortment',
    GOODSLIST: 		API_ADDRESS + '/goods/goodslist',
    CARTLIST: 		API_ADDRESS + '/cart/cartlists',
    ADDRESSLIST: 	API_ADDRESS + '/user/address',
    ORDERLIST:  	API_ADDRESS + '/user/order',
    COUPONLIST:  	API_ADDRESS + '/coupon/lists',
    GOODSDETAIL: 	API_ADDRESS + '/goods/goodsdetail',
    FUNDDATA: API_ADDRESS + '/listFunds'
};

module.exports = ServerConfig;
