function draw_barchart(rawdata) {

    var tags_dictionary = {};
    for (var i in rawdata) {
        for (var j in rawdata[i]["tags"]) {
            if (!(rawdata[i]["tags"][j] in tags_dictionary)) {
                tags_dictionary[rawdata[i]["tags"][j]] = 1;
            }
            else {
                tags_dictionary[rawdata[i]["tags"][j]] += 1;
            }
        }
    }

    console.log(tags_dictionary);

    var sorted_data = sortProperties(tags_dictionary);
    data = [];
    var count = 0;
    for (var key in sorted_data) {
        data.push(sorted_data[key]);
        if (count > 10) {
            break;
        }
        count += 1;
    }
    
    $("#tag_bar").html("");

    var chart = document.getElementById("tag_bar"),
        axisMargin = 20,
        margin = 20,
        valueMargin = 4,
        width = chart.offsetWidth,
        height = chart.offsetHeight,
        barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
        barPadding = (height-axisMargin-margin*2)*0.6/data.length,
        data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data.map(function(i){
        return i[1];
    }));

    svg = d3.select(chart)
        .append("svg")
        .attr("width", 300)
        .attr("height", 400);


    bar = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g");

    bar.attr("class", "bar")
        .attr("cx",0)
        .attr("transform", function(d, i) {
            return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
        });

    bar.append("text")
        .attr("class", "label")
        .attr("y", barHeight / 2)
        .attr("dy", ".20em") //vertical align middle
        .text(function(d){
            return d[0];
        }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
        .domain([0, max])
        .range([0, width - margin*2 - labelWidth]);

    

    bar.append("rect")
        .attr("transform", "translate("+labelWidth+", 0)")
        .attr("height", barHeight)
        .attr("width", function(d){
            return scale(d[1]);
        });

    bar.append("text")
        .attr("class", "value")
        .attr("y", barHeight / 3)
        .attr("dx", -valueMargin + labelWidth) //margin right
        .attr("dy", ".10em") //vertical align middle
        .attr("text-anchor", "end")
        .text(function(d){
            return d[1];
        })
        .attr("x", function(d){
            var width = this.getBBox().width;
            return Math.max(width + valueMargin, scale(d[1]));
        });

    svg.insert("g",":first-child")
        .attr("class", "axis")
        .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
        .call(xAxis);
}

function sortProperties(obj)
{
    // convert object into array
    var sortable=[];
    for(var key in obj)
        if(obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]); // each item is an array in format [key, value]

    // sort items by value
    sortable.sort(function(a, b)
    {
        return b[1]-a[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}