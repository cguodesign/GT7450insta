var color = d3.scale.category20c();

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) { return d.size; });

var div = d3.select("#filterbar").append("div")
    .style("position", "relative")
    .style("width", "24%")
    .style("height", 300)

d3.json("http://7450_image_api.wuzizheng.com/user/1770019821.json", function(error, rawdata) {
    if (error) throw error;
    var filter_dictionary = {};
    for (var i in rawdata) {
        if (!(rawdata[i]["filter"] in filter_dictionary)) {
            filter_dictionary[rawdata[i]["filter"]] = 1;
        }
        else {
            filter_dictionary[rawdata[i]["filter"]] += 1;
        }
    }
    var filter_object = {};
    filter_object["children"] = [];
    for (var key in filter_dictionary) {
        filter_object["children"].push({"name": key, "size": filter_dictionary[key]});
    }
//        console.log(filter_dictionary);
//        console.log(filter_object);

    var previous_clicked_node = null;
    var previous_clicked_node_color = {};

    var disabled = [];
    var node = div.datum(filter_object).selectAll(".node")
        .data(treemap.nodes)
        .enter().append("div")
        .attr("class", "node")
        .call(position)
        .style("background", function(d) { return d.children ? color(d.name) : null; })
        .each(function(){
            var selection = d3.select(this);
            selection.on("click", function(d) {
                if (!(disabled.indexOf(d.name) > -1)) {
                    previous_clicked_node_color[d.name] = selection.style("background");
                    selection.style("background", "white");
                    disabled.push(d.name);
                }
                else {
                    selection.style("background", previous_clicked_node_color[d.name]);
                    var i = disabled.indexOf(d.name);
                    if(i != -1) {
                        disabled.splice(i, 1);
                    }
                }
                console.log(disabled);
            });
        })
        .text(function(d) { return d.children ? null : d.name; });

    d3.selectAll("input").on("change", function change() {
        var value = this.value === "count"
            ? function() { return 1; }
            : function(d) { return d.size; };

        node
            .data(treemap.value(value).nodes)
            .transition()
            .duration(1500)
            .call(position);
    });
});

function position() {
    this.style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}
