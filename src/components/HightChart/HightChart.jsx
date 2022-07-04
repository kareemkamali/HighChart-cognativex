import React from 'react'

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import moment from 'moment'; // format date
import { motion } from 'framer-motion';

import './Chart.scss'


const HightChart = (data) => {
    //option const pass to option propertie to HighChartReact
    const options = {

        chart: {
            align: 'right',
            backgroundColor: '#282c34',//dark background of whole chart
            type: 'line',
            width: 500 ,//width of chart graph
       
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },}]},



        title: {
            text: 'PageViews over Time',//title of chart
            align: 'left',//postion on left
            style: {
                color: 'white'//text color
            }
        },
        xAxis: {// xAxis Date (14jun,15jun......)
            type: 'datetime',
            //moment date to format date in this case number of day, and Month
            categories: data.data.map(date => moment(date.timestamp).format("DD[,]MMM")),//fetch array from prop named data get from dashboaed pages
            reversed: true,//ro reverse the data (19 ju,18jun)=>(18jun,19jun)
            showLastLabel: false,   //14 jun not show this is the first label but when reveres so its last label
            padding: 0,

        },
        yAxis: [
            { // Primary yAxis articles
                title: {
                    text: 'published Articles',//title 
                },
                opposite: true,//opsite for the right side opposite for the second axis
                min: 100 //start from 100 count
            },
            { // Secondary yAxis
                gridLineWidth: 0, // frid line to fix 0
                title: {
                    text: 'Page views',//title

                    //   style:{} i can edit the font size and color .....

                },
                min: 0,
                max: 800000,// max value 800k to show the data between this two values 0 and 800k
                labels: {
                    allowDecimals: true,//to allow if i have a decimal number 
                    format: '{text:,.1f}',    // format to get k(thousands) or M(Millions)    
                    style: {
                        color: 'grey',//


                    }
                }


            },],
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,// enable to show value on line 

                },

                enableMouseTracking: true // to show when mouse hover
            },


        },

        // in scss file i edit the first legend item of serie-0(PageViews)
        legend: {
            itemStyle: {
                color: 'white'
            } // color the legend of series value for showing with dark background 
        }


        ,
        series: [
            {// first line
                yAxis: 1,//to allow this serie for the first yAxis
                name: 'PageViews',// named for know each line this serie
                data: data.data.map(pageviews => pageviews.pageviews),// fetch or get data from prop named data get from dashboard
                type: 'spline',//type of line
                color: 'orange',// color orange
                lineWidth: 5, // width of this line 
                marker: {
                    enabled: false // to remove the circle of each value
                },
            },
            {
                name: 'published Articles',
                data: data.data.map(articles => articles.published_count), // fetch or get data from prop named data get from dashboard
                color: 'blue',
                dashStyle: 'longdash',// type dashed 
                marker: {
                    symbol: 'circle' // convert losange to circke (points of each value)
                },

            },

        ]
    }

    return (
        <>
            {/* hichartsreact components get from library and has a properties i can use charjs another library but i am using this for the first time to show how can i learn every libraries */}
            <div className="charts">
                {/* this div to center chart in container */}
                <HighchartsReact

                    highcharts={Highcharts}
                    options={options}

                />
            </div>

            <div className='footer_finished'>
                <motion.div
                    whileInView={{ scale: [0, 1], opacity: [0, 1] }} //while in view for the first loading page change scale and opacity
                    transition={{ duration: 1, ease: 'easeInOut' }} 
                    className="footer_finished-title">
                    <h1>DONE</h1>
                    🤓
                </motion.div>

                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 2 }}>
                    <h3>i hope to be on your team</h3>
                    <h2>Thank You</h2>
                </motion.div>

            </div>

        </>

    )
}

export default HightChart