const API = `https://criptoya.com/api/btc/usd/1`
const API2 = `https://criptoya.com/api/ETH/usd/1`
const API3 = `https://criptoya.com/api/SOL/usd/1`
const API4 = `https://criptoya.com/api/DAI/usd/1`

const comisionAPI = `https://criptoya.com/api/fees`;

// CRYPTO PRICE
const btcprice = document.getElementById("coin-value1");
const ethprice = document.getElementById("coin-value2");
const solprice = document.getElementById("coin-value3");
const daiprice = document.getElementById("coin-value4");

// COMISION PRICE

const binance = document.getElementById("comision-value1");
const lemoncash = document.getElementById("comision-value2");
const ripio = document.getElementById("comision-value3");
const buenbit = document.getElementById("comision-value4");

// FUNCTION API
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }
            else{
                const error = new Error("Error " + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}


fetchData(API, (error1, data1) =>{
    if(error1){
        return console.error(error1)
    }
    btcprice.innerHTML = "$" + data1.bitex.ask;

    fetchData(API2, (error2, data2) =>{
        if(error2){
            return console.error(error2)
        }
        ethprice.innerHTML = "$" + data2.bitex.ask
    })

    fetchData(API3, (error3, data3) =>{
        if(error3){
            return console.error(error3)
        }
        solprice.innerHTML = "$" + data3.tiendacrypto.ask
    })
    fetchData(API4, (error4, data4) =>{
        if(error4){
            return console.error(error4)
        }
        daiprice.innerHTML = "$" + data4.buenbit.ask
    })
});


// 


fetchData(comisionAPI, (errro1, data1) =>{
    if(errro1){
        console.log(errro1)
    }
    console.log(data1);
    binance.innerHTML = "$ " + data1.Binance.BTC.BITCOIN;
    lemoncash.innerHTML = "$ " + data1.LemonCash.BTC.BITCOIN;
    ripio.innerHTML = "$ " + data1.Ripio.BTC.BITCOIN;
    buenbit.innerHTML = "$ " + data1.Buenbit.BTC.BITCOIN;
});


