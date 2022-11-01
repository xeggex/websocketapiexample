const XeggexSocketClient = require('./wsapiClass.js');

const yourApiKey = "";
const yourApiSecret = "";

var xeggexApi = new XeggexSocketClient(yourApiKey, yourApiSecret);

// events

xeggexApi.on( "notification", ( message ) => {

	console.log("Type: " + message.method)

	console.log(JSON.stringify(message, null, 4));

});


(async () => {

	let isconnected = await xeggexApi.waitConnect();
	
	console.log('connected');


	try {
	
		let assetinfo = await xeggexApi.getasset('BTC');
		
		console.log(assetinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let assetsinfo = await xeggexApi.getassets();
		
		console.log(assetsinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let marketinfo = await xeggexApi.getmarket('BTC/USDT');
		
		console.log(marketinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let marketsinfo = await xeggexApi.getmarkets();
		
		console.log(marketsinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let balanceinfo = await xeggexApi.getbalances();
		
		console.log(balanceinfo);
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let tradeinfo = await xeggexApi.gettrades('BTC/USDT');
		
		console.log(JSON.stringify(tradeinfo, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subticker = await xeggexApi.subscribeticker('BMB/USDT');
		
		console.log(JSON.stringify(subticker, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let unsubticker = await xeggexApi.unsubscribeticker('BMB/USDT');
		
		console.log(JSON.stringify(unsubticker, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let suborderbook = await xeggexApi.subscribeorderbook('BMB/USDT', 30);
		
		console.log(JSON.stringify(suborderbook, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	
	try {
	
		let unsuborderbook = await xeggexApi.unsubscribeorderbook('BMB/USDT');
		
		console.log(JSON.stringify(unsuborderbook, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subtrades = await xeggexApi.subscribetrades('BMB/USDT');
		
		console.log(JSON.stringify(subtrades, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	try {
	
		let unsubtrades = await xeggexApi.unsubscribetrades('BMB/USDT');
		
		console.log(JSON.stringify(unsubtrades, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	try {
	
		let getorders = await xeggexApi.getorders("USDC/USDT"); 
		
		console.log(JSON.stringify(getorders, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}


	try {
	
		let subreports = await xeggexApi.subscribereports();
		
		console.log(JSON.stringify(subreports, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	

	let createorder;
	
	try {
	
		createorder = await xeggexApi.createorder('BMB/USDT', 'buy', '0.007', '50');
		
		console.log(JSON.stringify(createorder, null, 4));
	
	} catch (e) {
	
		console.log(e);
	
	}
	
	let cancelorder;
	
	try {
	
		if (createorder && createorder.result)
		{
			cancelorder = await xeggexApi.cancelorder(createorder.result.id);
			console.log(JSON.stringify(cancelorder, null, 4));
		}
		
	} catch (e) {
	
		console.log(e);
	
	}

	
})();