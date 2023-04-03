am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "date": "2013-01-26",
      "market1": 87,
      "market2": 92,
      "sales1": 55,
      "sales2": 100
    }, {
      "date": "2013-01-27",
      "market1": 84,
      "market2": 87,
      "sales1": 60,
      "sales2": 100
    }, {
      "date": "2013-01-28",
      "market1": 83,
      "market2": 88,
      "sales1": 70,
      "sales2": 100
    }, {
      "date": "2013-01-29",
      "market1": 84,
      "market2": 87,
      "sales1": 90,
      "sales2": 100
    }, {
      "date": "2013-01-30",
      "sales1": 80,
      "sales2": 100
    }];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    //dateAxis.renderer.grid.template.location = 0;
    //dateAxis.renderer.minGridDistance = 30;
    
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Sales";
      //categoryAxis.renderer.grid.template.disabled = true;
    valueAxis1.renderer.grid.template.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    
    
    // Create series
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "sales1";
    series1.dataFields.dateX = "date";
    series1.yAxis = valueAxis1;
    series1.name = "Target Sales";
    series1.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
    //series1.fill = chart.colors.getIndex(0);
    series1.strokeWidth = 0;
    series1.clustered = false;
    series1.columns.template.width = am4core.percent(20);
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "sales2";
    series2.dataFields.dateX = "date";
    series2.yAxis = valueAxis1;
    series2.name = "Actual Sales";
    series2.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
    series2.fill = chart.colors.getIndex(0).lighten(0.5);
    //series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(20);
    series2.toBack();
    
    
    var gradient = new am4core.LinearGradient();
    gradient.rotation = 90;
    gradient.addColor(am4core.color('#f5d047'));
    gradient.addColor(am4core.color('#f5d047'), 0, 0.32);
    series1.columns.template.fill = gradient;
    series1.columns.template.strokeWidth = 0;
    series2.columns.template.fill = am4core.color('#FFFFFF'); //#FFFFFF
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    
    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    
    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series1);
    chart.scrollbarX.series.push(series3);
    //chart.scrollbarX.parent = chart.bottomAxesContainer;
    
    }); // end am4core.ready()
    
    
    