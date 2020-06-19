import * as actionTypes from "../types"
import axios from "axios"
import { keys } from "highcharts"

export const saveStocks =  (data) => {
    // console.log(data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.STOCK_INIT
        })
        try{
            const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${data}&apikey=79K25F7YOB4SVO9F`)
                        
            const mynewdata = Object.values(response.data['Time Series (Daily)'])
            const xAxis = Object.keys(response.data['Time Series (Daily)'])
            // console.log("my response" ,mynewdata)
            // console.log("x axis",Object.keys(response.data['Time Series (Daily)']))
            let open = [];
            let high = [];
            let close = [];
            let low =[];

            Object.values(response.data['Time Series (Daily)']).map((myopen)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                open.push(myopen['1. open'])

            ))
            Object.values(response.data['Time Series (Daily)']).map((myhigh)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                high.push(myhigh['2. high'])

            ))
            Object.values(response.data['Time Series (Daily)']).map((mylow)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                low.push(mylow['3. low'])

            ))
            Object.values(response.data['Time Series (Daily)']).map((myclose)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                close.push(myclose['4. close'])

            ))
            // console.log("open",open)
            // console.log("high",high)
            // console.log("low",low)
            // console.log("close",close)
            
            dispatch({
                type:actionTypes.SAVE_STOCKS,
                payload: response.data,
                payload2:mynewdata,
                payload3:xAxis,
                payload4:open,
                payload5:high,
                payload6:low,
                payload7:close,
                
                
                
            })
        }catch(err){
            throw err
        }
    }
}

export const fixedsaveStock =  (data) =>{
        console.log('GETTING DATA IN ACTIONS',data)
    return async (dispatch) => {
        dispatch({
            type:actionTypes.FIXED_STOCK_INIT
        })
        try{
            const fixedresponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=79K25F7YOB4SVO9F`)
            
            console.log("fixed nifty",fixedresponse.data['Time Series (Daily)'])
            let finalData = fixedresponse.data['Time Series (Daily)']

            const fixedxAxis = Object.keys(fixedresponse.data['Time Series (Daily)'])
            
            console.log("nifty x axis",fixedxAxis)

            let fixedopen = [];
            let fixedhigh = [];
            let fixedclose = [];
            let fixedlow = [];

            Object.values(fixedresponse.data['Time Series (Daily)']).map((myopenfixed)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                fixedopen.push(myopenfixed['1. open'])

            ))
            Object.values(fixedresponse.data['Time Series (Daily)']).map((myhighfixed)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                fixedhigh.push(myhighfixed['2. high'])

            ))
            Object.values(fixedresponse.data['Time Series (Daily)']).map((mylowfixed)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                fixedlow.push(mylowfixed['3. low'])

            ))
            Object.values(fixedresponse.data['Time Series (Daily)']).map((myclosefixed)=>(
                // console.log("MY Y AXIS",myaxis['1. open'])
                fixedclose.push(myclosefixed['4. close'])
            ))


            dispatch({
                type:actionTypes.FIXED_SAVE_STOCKS,
                fixedPayload:finalData ,
                fixedOpenPayload:fixedopen,
                fixedHighPayload:fixedhigh,
                fixedLowPayload:fixedlow,
                fixedClosePayload:fixedclose,
                fixedxAxisPayload:fixedxAxis
            })
        }catch(err){
            throw(err)

        }
    }
}