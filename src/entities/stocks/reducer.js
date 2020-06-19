import * as actionTypes from "../types";

const INITIAL_STATE = {
    loading: false,
    error: false,
    stocks:{},
    mynewdata2:[],
    xAxis:[],
    open:[],
    high:[],
    low:[],
    close:[],
    fixedopen : [],
    fixedhigh : [],
    fixedclose : [],
    fixedlow : [],
    fixedxAxis: [],
    fixedStock:{}

}

const reducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
        case actionTypes.STOCK_INIT:
          return {...state,stock:{},loading:true}
        case actionTypes.SAVE_STOCKS:
          return { ...state, loading:false, stocks: action.payload ,mynewdata2:action.payload2,xAxis:action.payload3,
          open:action.payload4,
          high:action.payload5,
          low:action.payload6,
          close:action.payload7,
          fixedopen:action.fixedOpenPayload,
          fixedhigh:action.fixedHighPayload,
          fixedlow:action.fixedLowPayload,
          fixedclose:action.fixedClosePayload,
          fixedxAxis:action.fixedxAxisPayload
        }
        case actionTypes.FIXED_STOCK_INIT:
          return{...state,fixedStock:{}}
        case actionTypes.FIXED_SAVE_STOCKS:
          return{...state, loading:false,
            fixedopen:action.fixedOpenPayload,
            fixedhigh:action.fixedHighPayload,
            fixedlow:action.fixedLowPayload,
            fixedclose:action.fixedClosePayload,
            fixedxAxis:action.fixedxAxisPayload,
            fixedStock:action.fixedPayload
          }
        default:
          return state
      }
}

export default reducer