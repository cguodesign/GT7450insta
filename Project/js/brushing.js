d3.helper = {};

d3.helper.tooltip = function(){
    var tooltipDiv;
    var bodyNode = d3.select('body').node();

    function tooltip(selection){

        selection.on('mouseover.tooltip', function(pD, pI){
            // Clean up lost tooltips
            d3.select('body').selectAll('div.tooltip').remove();
            // Append tooltip
            tooltipDiv = d3.select('body')
                           .append('div')
                           .attr('class', 'tooltip')
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style({
                left: (absoluteMousePos[0] + 10)+'px',
                top: (absoluteMousePos[1] - 40)+'px',
                'background-color': '#d8d5e4',
                width: '65px',
                height: '30px',
                padding: '5px',
                position: 'absolute',
                'z-index': 1001,
                'box-shadow': '0 1px 2px 0 #656565'
            });

            var first_line = '<p>X-Value: ' + pD.index + '</p>'
            var second_line = '<p>Y-Value: ' + pD.value + '</p>'

            //tooltipDiv.html(first_line + second_line)
            tooltipDiv.append("img")
                    .attr("src","http://7450_image_api.wuzizheng.com/location/102089/1445227100")
                    .attr("width","30px")                  
                    .attr("height","30px")
        })
        .on('mousemove.tooltip', function(pD, pI){
            // Move tooltip
            var absoluteMousePos = d3.mouse(bodyNode);
            tooltipDiv.style({
                left: (absoluteMousePos[0] + 10)+'px',
                top: (absoluteMousePos[1] - 40)+'px'
            });
        })
        .on('mouseout.tooltip', function(pD, pI){
            // Remove tooltip
            tooltipDiv.remove();
        });

    }

    tooltip.attr = function(_x){
        if (!arguments.length) return attrs;
        attrs = _x;
        return this;
    };

    tooltip.style = function(_x){
        if (!arguments.length) return styles;
        styles = _x;
        return this;
    };

    return tooltip;
};







//Data haven't been put in!
var data = [];
/*var values = [];
for (var i = 2; i <= 50; i++) {
    var val = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    data.push({index: i, value: val});
    values.push(val);
}*/








var margin = {top: 10, right: 20, bottom: 80, left: 100},
    width = 960 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])
    .domain([14449,14465]);






var brush = d3.svg.brush()
    .x(x)
    .on("brush", brushmove);
    //.on("brushed", brushed);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");


var dotdrawing = d3.select("#maincontainer").append("svg")
      .attr("width", 1000)
      .attr("height", 1000)
      .attr('id', 'main_svg')



/*dotdrawing.append("rect")
    .attr("width", "87.5%")
    .attr("left", "5%")
    .attr("height", "600px")
    .attr("fill", "#999")
    .attr("transform", "translate(" + margin.left + ", 0)");

dotdrawing.append("g")
    .attr("class", "x axis")
    .attr("clip-path", "url(#clip)")
    .attr("transform", "translate(" + margin.left + ","+ height+ ")")
    .call(xAxis);*/






<<<<<<< HEAD
var dotdrawing = d3.select("#center_panel").append("svg")
      .attr("width", 1000)
      .attr("height", 1000)
      .attr('id', 'main_svg')
=======
>>>>>>> origin/Reframe_Index



points = dotdrawing.selectAll("circle");
    /*.data(data)
  .enter().append("circle")
    .attr("class", "point")
    .attr("clip-path", "url(#clip)")
    
    .attr("r", function(d){return Math.floor(Math.random() * (20 - 5 + 1) + 5);})
    .attr("cx", function(d) { return x(d.index); })
    .attr("cy", function(d) { return y(d.value); })
    .attr("transform", "translate(" + margin.left + ", 0)")
    .call(d3.helper.tooltip());*/

//1
d3.json("http://7450_image_api.wuzizheng.com/location/1264107.json", function(error, data){
      points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1444968000) / (1445054340 - 1444968000);
        })
        .attr("cy", 25)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});

//2
d3.json("http://7450_image_api.wuzizheng.com/location/229343917.json", function(error, data){ 
      points.data(data)
      .enter()
        .append('circle')
        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445194800) / (1445281200 - 1445194800);
        })
        .attr("cy", 75)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});

//3
d3.json("http://7450_image_api.wuzizheng.com/location/248861636.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')
        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 125)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});

//4
d3.json("http://7450_image_api.wuzizheng.com/location/219182853.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 175)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//5
d3.json("http://7450_image_api.wuzizheng.com/location/269087183.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 225)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//6
d3.json("http://7450_image_api.wuzizheng.com/location/222908252.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 275)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//7
d3.json("http://7450_image_api.wuzizheng.com/location/16430.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 325)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//8
d3.json("http://7450_image_api.wuzizheng.com/location/216284597.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 375)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//9
d3.json("http://7450_image_api.wuzizheng.com/location/329051044.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 425)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//10
d3.json("http://7450_image_api.wuzizheng.com/location/923043.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 475)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//11
d3.json("http://7450_image_api.wuzizheng.com/location/239586494.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 525)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//12
d3.json("http://7450_image_api.wuzizheng.com/location/102089.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 575)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});

//13
d3.json("http://7450_image_api.wuzizheng.com/location/962437084.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445140800) / (1445227200 - 1445140800);
        })
        .attr("cy", 625)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});
//14
d3.json("http://7450_image_api.wuzizheng.com/location/233268.json", function(error, data){
  points.data(data)
      .enter()
        .append('circle')

        .attr("cx", function (d) {
          return 0 + (1000 - 0) * (d.created_time - 1445281200) / (1445367600 - 1445281200);
        })
        .attr("cy", 675)
      .attr("r", function (d){ return d.created_time.length; })
      .style("fill", "blue")
      .style('opacity',0.5)
      //console.log(data.likes.length);
});

points.on('mousedown', function(){
  brush_elm = dotdrawing.select(".brush").node();
  new_click_event = new Event('mousedown');
  new_click_event.pageX = d3.event.pageX;
  new_click_event.clientX = d3.event.clientX;
  new_click_event.pageY = d3.event.pageY;
  new_click_event.clientY = d3.event.clientY;
  brush_elm.dispatchEvent(new_click_event);
});

function brushmove() {
  var extent = brush.extent();
  points.classed("selected", function(d) {
    is_brushed = extent[0] <= d.index && d.index <= extent[1];
    return is_brushed;
  });
}









/*var slider1 = document.getElementById('slider1');

noUiSlider.create(slider1, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
  svg.transition.duration(750)
     .select(".x.axis").call(xAxis)
});*/

$(function() {
    $( "#slider" ).slider({
    range: true,
    min: 0,
    max: 999,
    values: [0,999],
    slide: function( event, ui ) {
    var maxv = d3.min([ui.values[1], 1000]);
    var minv = d3.max([ui.values[0], 0]);


    //x.domain([maxv-1, minv]);
    x.domain([minv, maxv-1]);
    dotdrawing.transition().duration(750)
      .select(".x.axis").call(xAxis);
    dotdrawing.transition().duration(750)
      .selectAll(".point").attr("transform", function transform(d) {return "translate(" + x(d.index) + "," + "0)";
  });
    
    }


  });
    });