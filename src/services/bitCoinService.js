import axios from "axios"
import dataMarketPrice from '../assets/data/market-price.json' 
import dataConfirmedTransactions from '../assets/data/n-transactions.json' 

const marketPrice = dataMarketPrice["market-price"]
const confirmedTransactions =  dataConfirmedTransactions["n-transactions"]

export const bitCoinService={
    getRate,
    getMarketPrice,
    getConfirmedTransactions

}
async function getRate(){
    try {
        const res = await axios(`https://blockchain.info/tobtc?currency=USD&value=1`)
        console.log('res',res.data);
        
        return res.data
    } catch (err) {
        console.log(`err`,err)

}
}
// getConfirmedTransactions()
function  getConfirmedTransactions() {
    const formatedData =[]
    const options = {  year: 'numeric', month: 'short' };

    confirmedTransactions.forEach(value =>{
       const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options)
       const date1 = new Date(value.x);
       const formatedTime= dateTimeFormat3.format(date1)

        const newData=  {
            name: formatedTime,
            "Confirmed Transactions": value.y,
            amt: 2400,
           }

           formatedData.push(newData)
       }) 
       const marketPriceArr=[]
       marketPrice.forEach(value => {
        marketPriceArr.push(value.y)
        })
        formatedData.forEach((item,index) =>{
            item['market-price']=marketPriceArr[index]
        } )   
       console.log('confirmedTransactions',formatedData);
        
       return formatedData
}

 function getMarketPrice() {
     const formatedData =[]
     const options = {  year: 'numeric', month: 'short' };

        marketPrice.forEach(value =>{
        const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options)
        const date1 = new Date(value.x);
        const formatedTime= dateTimeFormat3.format(date1)

         const newData=  {
             name: formatedTime,
             uv: value.y,
             "BTC market price": value.y,
             amt: 2400,
            }

            formatedData.push(newData)
        })
   
return formatedData

}