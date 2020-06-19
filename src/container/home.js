import React , {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../entities/stocks/actions";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactApexChart from "react-apexcharts";
import Spinner from "../component/spinner";
import CustomNavbar from "../component/navbar";
import {Button} from "react-bootstrap";






// const useStyles = withStyles((theme) => ({
//     button: {
//       display: 'block',
//       marginTop: theme.spacing(2),
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//   }));

//   const classes = useStyles();

   

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            stock:"",
            open:false,
            fixedStock:'NFTY',
            FixedData: [],
            button:true
        }
    }    
    componentDidMount(){
        this.props.fixedStock(this.state.fixedStock)
        
    }
    // componentDidUpdate(){
    //     this.setState({button:false})
    // }
    
    
     handleChange = (event) => {
        this.setState({stock:event.target.value});
      };
    
       handleClose = () => {
        this.setState({open:false});
      };
    
       handleOpen = () => {
        this.setState({open:true});
      };
      
    render(){
        const obj = this.props.stocks['Time Series (Daily)'];
        const fixedobj = this.props.fixedopen;
        console.log('JUST CHECKING',fixedobj)
        // console.log("home page x axis", this.props.xAxis)
        // console.log('home stock',obj)
        // console.log("home page open", this.props.open)
        // console.log("home page high", this.props.high)
        // console.log("home page low", this.props.low)
        // console.log("home page close", this.props.close)
        let arr3=[];

        for(let i =0;i<100;i++){
            arr3.push(this.props.xAxis[i]);
            arr3.push(parseFloat(this.props.open[i]));
            arr3.push(parseFloat(this.props.high[i]));
            arr3.push(parseFloat(this.props.low[i]));
            arr3.push(parseFloat(this.props.close[i]));

        }
        // console.log('arr3 should be empty',arr3)
        console.log("home page open", this.props.open)

        let fixedarr3=[];

       if(this.props.fixedxAxis){
        for(let i =0;i<100;i++){
            fixedarr3.push(this.props.fixedxAxis[i]);
            fixedarr3.push(parseFloat(this.props.fixedopen[i]));
            fixedarr3.push(parseFloat(this.props.fixedhigh[i]));
            fixedarr3.push(parseFloat(this.props.fixedlow[i]));
            fixedarr3.push(parseFloat(this.props.fixedclose[i]));

        }
       }

        console.log('my fixed array 3 mounted ', fixedarr3)

        let fixednewarr=[]
        for(let a=0;a<500;a+=5){
          let  fixednewarrdata =[fixedarr3[a] ,[fixedarr3[a+1],fixedarr3[a+2],fixedarr3[a+3],fixedarr3[a+4]]]
          fixednewarr.push(fixednewarrdata)

        }
        // console.log('MY FIXED NEW ARRAY',fixednewarr)

        var myfixeddata = fixednewarr.map(function(a) { 
            return { 
              x: new Date(a[0]), 
              y: a[1] 
            }; 
          });
          console.log('MY FINAL FIXED ARRAY',myfixeddata)
          // this.setState({FixedData:myfixeddata})
         
          if(fixedobj){
            //   this.setState({FixedData:myfixeddata})
              console.log('MY PROGRAM STATE IS WORKING',)
              
          }
  

        // console.log('arr3 should be empty',arr3)
        let newarr=[]
        for(let a=0;a<500;a+=5){
          let  newarrdata =[arr3[a] ,[arr3[a+1],arr3[a+2],arr3[a+3],arr3[a+4]]]
          newarr.push(newarrdata)

        }
        // var d = new Date(1538778600000);
        // console.log("my date", d)
        
        var mydata = newarr.map(function(a) { 
            return { 
              x: new Date(a[0]), 
              y: a[1] 
            }; 
          });
        //   console.log("MY FINAL DATA", mydata);

        // console.log("newarr",newarr)
        // console.log("array3",arr3)
        // if(obj){
        //     console.log("my data",Object.values( obj))
        //     console.log( obj)
            
        // }

        const series = [{
            name: 'candle',
            data: mydata
        }]
        const options = {
            chart: {
                height: 350,
                width:'100%',
                type: 'candlestick',
              },
              title: {
                text: this.state.stock + ' Stock Price' ,
                align: 'left'
              },
              annotations: {
                xaxis: [
                  {
                   
                    borderColor: '#00E396',
                    label: {
                      borderColor: '#00E396',
                      style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: '#00E396'
                      },
                      orientation: 'horizontal',
                      offsetY: 7,
                      text: 'Annotation Test'
                    }
                  }
                ]
              },
              tooltip: {
                enabled: true,
              },
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            }
          
            //fixed chart details

            const fixedseries = [{
                name: 'candle',
                data: this.state.FixedData
            }]
            const fixedoptions = {
                chart: {
                    height: 350,
                    width:'100%',
                    type: 'candlestick',
                  },
                  title: {
                    text: this.state.fixedStock + ' Stock Price' ,
                    align: 'left'
                  },
                  annotations: {
                    xaxis: [
                      {
                       
                        borderColor: '#00E396',
                        label: {
                          borderColor: '#00E396',
                          style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                          },
                          orientation: 'horizontal',
                          offsetY: 7,
                          text: 'Annotation Test'
                        }
                      }
                    ]
                  },
                  tooltip: {
                    enabled: true,
                  },
                  xaxis: {
                    type: 'datetime',
                  },
                  yaxis: {
                    tooltip: {
                      enabled: true
                    }
                  }
                }
              
          

            
        
        console.log(this.state.stock)
        
       
        return(
            <>
            <div><CustomNavbar/></div>
            <br/>
                <div className="container" style={{
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  flexDirection:"column",
                  fontFamily:'Lexend Giga'
                }}>
                <FormControl >
                    <InputLabel id="demo-controlled-open-select-label">Stocks</InputLabel>
                    <Select style={{width:"100px"}}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.stock}
                    onChange={this.handleChange}
                    >
                    
                    <MenuItem onClick={()=>this.props.updateStock('IBM')} value={'IBM'}>IBM</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('AAP')} value={'AAP'}>AAP</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('ACC')} value={'ACC'}>ACC</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('AAIT')} value={'AAIT'}>AAIT</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('AMZN')} value={'AMZN'}>AMZN</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('MSFT')} value={'MSFT'}>MSFT</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('GOOGL')} value={'GOOGL'}>GOOGL</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('FB')} value={'FB'}>FB</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('NFLX')} value={'NFLX'}>NFLX</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('AAPL')} value={'AAPL'}>AAPL</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('F')} value={'F'}>F</MenuItem>
                    <MenuItem onClick={()=>this.props.updateStock('NKE')} value={'NKE'}>NKE</MenuItem>

                    </Select>
                </FormControl>
                <br/>

                {
                 this.props.loading?<Spinner/>:null
               }
                {
                    obj?<div className="container-fluid" style={{width:"100%"}}>
                    
                    <ReactApexChart options={options} series={series} type="candlestick" height={450} />



                    </div>: <div>
                    <br/><center><h4>Choose a stock symbol</h4></center>

                    </div>
                    
                }

                </div>
                <br/>
                   <div className="container" style={{
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  flexDirection:"column",
                  fontFamily:'Lexend Giga'
                }}>

                     {
                      obj?null: this.state.button?<Button style={{
                      borderRadius:"20px"
                    }} variant="info" onClick={()=>{this.setState({FixedData:myfixeddata,button:false})}} >Show Nifty</Button>:null
                  }
                   
                
                {
                    this.state.button?null:<div className="container-fluid" style={{width:"100%"}}>
                      <ReactApexChart options={fixedoptions} series={fixedseries} type="candlestick" height={450} />
                    </div>
                }
              </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      loading:state.loading,
        stocks:state.stocks,
        mynewdata2:state.mynewdata2,
        xAxis:state.xAxis,
        open:state.open,
        high:state.high,
        low:state.low,
        close:state.close,
        fixedopen:state.fixedopen,
        fixedhigh:state.fixedhigh,
        fixedlow:state.fixedlow,
        fixedclose:state.fixedclose,
        fixedxAxis:state.fixedxAxis,
        fixedStock:state.fixedStock

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fixedStock:(fixedStock)=>{
            dispatch(actions.fixedsaveStock(fixedStock))
        },
        updateStock: (stock)=>{
            dispatch(actions.saveStocks(stock))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)


        // const data = Object.values(obj)
        // const data = [this.props.xAxis,this.props.yAxis]
        // console.log("mydata",data)

        // var ohlc = [],
        // dataLength = newarr.length,
        // i = 0;
        // for (i; i < dataLength; i += 1) {
        //     ohlc.push([
        //         newarr[i][0], // the date
        //         newarr[i][1], // open
        //         // data[i][2], // high
        //         // data[i][3], // low
        //         // data[i][4] // close
        //     ]);}

        // const options = {
            
        //     rangeSelector: {
        //         selected: 1
        //     },
        //     title: {
        //       text: this.state.stock + " Stock Price"
        //     },
            
        //     series: [{
        //         type: 'ohlc',
        //         id: 'aapl-ohlc',
        //         name: 'AAPL Stock Price',
        //         data: ohlc
        //     },
        //     ]
        // }
        // const options = {
        //     chart: {
        //       type: 'spline'
        //     },
        //     title: {
        //       text: this.state.stock 
        //     },
        //     xAxis:{
        //         categories:this.props.xAxis,
        //         title:{
        //             text:"Time"
        //         }
        //     },
        //     yAxis:{
        //         categories: this.props.yAxis,
        //         title:{
        //             text:"Prices"
        //         }
        //     },
        //     series: [
        //       {
        //         type:'ohlc',
        //         name:this.state.stock,
        //         data: ohlc
        //       }
        //     ]
        //   };