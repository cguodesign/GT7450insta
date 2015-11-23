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
                    .attr("src","http://7450.wuzizheng.com/users/102089/10028433/1090710327143017259_10028433.jpg")
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
var values = [];
for (var i = 2; i <= 50; i++) {
    var val = Math.floor(Math.random() * (50 - 5 + 1) + 5);
    data.push({index: i, value: val});
    values.push(val);
}

var margin = {top: 10, right: 20, bottom: 80, left: 100},
    width = 960 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width])
    .domain(["7 days ago","4 days ago","2 days ago","1 days ago","Kickoff","End of Game","After 7 days"]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0,height])
    .domain(["Central","East","South","West","Central1","East1","South1","West1"]);




var brush = d3.svg.brush()
    .x(x)
    .on("brush", brushmove);
    //.on("brushed", brushed);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(11);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    //.attr("fill","pink");
    //.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


svg.append("rect")
    .attr("width", "87.5%")
    .attr("left", "5%")
    .attr("height", "600px")
    .attr("fill", "#999")
    .attr("transform", "translate(" + margin.left + ", 0)");

svg.append("g")
    .attr("class", "x axis")
    .attr("clip-path", "url(#clip)")
    .attr("transform", "translate(" + margin.left + ","+ height+ ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(yAxis);

var game1 = svg.append("g")
    .attr("class","game_store1")
    .append("rect")
   
    .attr("width","100px")
    .attr("height","30px")
    .attr("stroke","#000")
    .attr("fill","#999");



//Want to add logos to the gameboard. But failed!
defs = svg;
defs
     .append('svg:pattern')
     .attr('id', 'image')
     .attr('x', 0)
     .attr('y', 0)
     .attr('width', 9)
     .attr('height', 39)
     .append('svg:image')
     .attr('xlink:href', 'https://lh3.googleusercontent.com/-epZdTUpfes8/AAAAAAAAAAI/AAAAAAAAEuA/eYM1LLFGA2s/photo.jpg')
     .attr('x', 0)
     .attr('y', 0)
     .attr('width', width)
     .attr('height', height)
   .attr('stroke-width','1px')
   .attr('stroke','#d8d8d8');









svg.append("g")
    .attr("class","game_store2")
    .append("rect")
    .attr("width","100px")
    .attr("height","30px")
    .attr("fill","#999")
    .attr("stroke","#000")
    .attr("transform", "translate(0," + 30 + ")");


svg.append("g")
    .attr("class", "brush")
    .attr("transform", "translate(" + margin.left + ", 0)")
    .call(brush)
  .selectAll('rect')
    .attr('height', height);

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height + 20);

points = svg.selectAll(".point")
    .data(data)
  .enter().append("circle")
    .attr("class", "point")
    .attr("clip-path", "url(#clip)")
    .attr("r", function(d){return Math.floor(Math.random() * (20 - 5 + 1) + 5);})
    .attr("cx", function(d) { return x(d.index); })
    .attr("cy", function(d) { return y(d.value); })
    .attr("transform", "translate(" + margin.left + ", 0)")
    .call(d3.helper.tooltip());

points.on('mousedown', function(){
  brush_elm = svg.select(".brush").node();
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



var x1 = d3.scale.linear()
    .domain([1, 100])
    .range([0, width])
    .clamp(true);





var slider1 = document.getElementById('slider1');

noUiSlider.create(slider1, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});

