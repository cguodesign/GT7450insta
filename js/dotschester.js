d3.json("http://7450_image_api.wuzizheng.com/location/1264107.json", function(error, data){
	var dotdrawing = d3.select("#maincontainer").append("svg")
    	.attr("width", 1000)
    	.attr("height", 800)
    	.attr('id', 'main_svg')

    dotdrawing.selectAll("circle")
    	.data(data)
    	.enter()
    		.append('circle')

    		.attr("cx", function (d) {
    			return 0 + (800 - 0) * (d.created_time - 1444968000) / (1445054340 - 1444968000);
    		})
    		.attr("cy", 300)
			.attr("r", 2)
			.style("fill", rgba(0,0,255,0.3));
});


function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}