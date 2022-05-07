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


const callApi = async (n) =>{
    try{
        if(n === 1){
            const response = await fetch(API);
            const data = response.json();
            return data;
        }
        else if(n === 2){
            const response = await fetch(API2);
            const data = response.json();
            return data;
        }
        else if(n === 3){
            const response = await fetch(API3);
            const data = response.json();
            return data;
        }
        else{
            const response = await fetch(API4);
            const data = response.json();
            return data;
        }
    }
    catch(error){
        console.error(error);
    }

}

function datos(n){
    btcprice.innerHTML = "$" + n.bitex.ask;
}

function datos2(n){
    ethprice.innerHTML = "$" + n.bitex.ask
}

function datos3(n){
    solprice.innerHTML = "$" + n.tiendacrypto.ask
}

function datos4(n){
    daiprice.innerHTML = "$" + n.buenbit.ask
}

callApi(1).then(datos);
callApi(2).then(datos2);
callApi(3).then(datos3);
callApi(4).then(datos4);





fetchData(comisionAPI, (errro1, data1) =>{
    if(errro1){
        console.log(errro1)
    }
    binance.innerHTML = "$ " + data1.Binance.BTC.BITCOIN;
    lemoncash.innerHTML = "$ " + data1.LemonCash.BTC.BITCOIN;
    ripio.innerHTML = "$ " + data1.Ripio.BTC.BITCOIN;
    buenbit.innerHTML = "$ " + data1.Buenbit.BTC.BITCOIN;
});
