import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {

    //
    let totalMaximum = 0;
    
    if (props.dataPoints !== undefined){
        const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
        totalMaximum = Math.max(...dataPointsValues); // thelei list oxi array gi auto vazoyme ta ... gia na pane san standalone arguments

    }
   


    return (
        <div className="chart">
            
            { props.dataPoints !== undefined && ( props.dataPoints.map(datapoint => 
            
            <ChartBar
             key={datapoint.label}
             value = {datapoint.value}
             maxValue = {totalMaximum}
             label = {datapoint.label}
             />) ) 
             } 
            
        </div>
    );

}

export default Chart;