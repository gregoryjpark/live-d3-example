// ajax call to load initial json
var loadData = function(){
                $.ajax({
                  type: 'GET',
                  contentType: 'application/json; charset=utf-8',
                  url: '/votes',
                  dataType: 'json',
                  success: function(data){
                    drawBarPlot(data);
                  },
                  failure: function(result){
                    error();
                  }
                });
              };

// set plot parameters
var barWidth = 20;
var colors = ['red', 'blue'];
var plotHeight = 500;

// draw bar plot
function drawBarPlot(data){

  // define linear y-axis scale
  var yScale = d3.scale.linear()
                 .domain([0, d3.max(data)])
                 .range([0, (plotHeight - 50)]);

  d3.select("#plot")
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d){ return yScale(d); })
    .attr("fill", function(d, i) {
        return colors[i];
    })
    .attr("x", function(d, i){
        return (i * 100) + 90; // horizontal location of bars
    })
    .attr("y", function(d){ 
        return plotHeight - yScale(d); // scale bars within plotting area
    });
}

// load data on page load
$(document).ready(function(){ 
  loadData(); 
});