const $btc = document.querySelector("#btc")

const getBitcoin = async (type) => {
    let url = `https://www.mercadobitcoin.net/api/BTC/${type}`
    fetch(url)
    .then(response => {
        response.json()
        .then(res => {
            switch(type) {
                case 'ticker':
                    getBitcoinTicker(res)
                    break
            }
        })
        .catch(err => {
            console.log(`ERRO line 9: ${err}`)
        })
    })
    .catch(error => {
        console.log(`ERRO line 13: ${error}`)
    })
}

const getBitcoinTicker = (data) => {
    data = data['ticker']
    data.date = data.date * 1000;
    data.date = new Date(data.date);
    data.date = data.date.toLocaleString();
}

getBitcoin('ticker')
// getBitcoin('orderbook')
// getBitcoin('trades')