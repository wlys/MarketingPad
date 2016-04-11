/**
 * Created by liu on 2016/3/11.
 */

'use strict';
var React = require('react-native');

var {
    AppRegistry,
    Navigator,
    WebView,
    View,
    Text,
    Component,
    Dimensions,
    StyleSheet,
    ScrollView,
    BackAndroid,
    ToastAndroid,

    } = React;
var Manager = require('./Manager');
var {width, height, scale} = require('./Style');
var tail = `);});</script></head><body><div id="container" style="justify-content: flex-end"></div></body></html>`;
var head = `
<!doctype html>\n
<html lang="en">
<head>
  <script type="text/javascript" src="http://cdn.hcharts.cn/jquery/jquery-1.8.3.min.js"></script>
  <script type="text/javascript" src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
  <script type="text/javascript" src="http://cdn.hcharts.cn/highcharts/exporting.js"></script>
  <script>
    $(function () {
    $('#container').highcharts(`;
var data={
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
        ]
    }]

};



class MyChart extends Component {




    render() {
        data=JSON.stringify(this.props.data);


        var HTML=head+data+tail;
        return (

                <WebView style={styles.webview_style}
                         source={{html:HTML}}
                         startInLoadingState={true}
                         scalesPageToFit={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                    >
                </WebView>


        );
    }
}
var styles = StyleSheet.create({

    page: {
        flex: 1,
    },
    webview_style:{
        backgroundColor:'#000',
      flex:1


    }


});
module.exports = MyChart;