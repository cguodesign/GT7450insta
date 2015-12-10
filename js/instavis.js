d3.json("static/data/gameresults.json", function(error, data){
    //use data here

    var gameresults = d3.select("#results").append("svg")
    	.attr("width", 200)
    	.attr("height", 700)
    	.attr('id', 'games_svg')

    gameresults.selectAll("rect")
    	.data(data)
    	.enter()
    		.append("rect")
    		.attr('class', 'game_scoreboard')
    		.attr('id', function(d){
    			var gameid = d.Location_ID;
    			return gameid;
    		})
    		.attr('y', function(d){
    			return (d.Number -1)*50 ;
    		})
    		.attr('x', '0')
    		.attr('width', '200')
    		.attr('height', '50')
    		.attr('fill', 'rgba(255,255,255,1.0)')
            .on('click', function(d) {
                console.log("rect?" + d.Location_ID);
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_treemap(data)});
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_barchart(data)});
                my_Map(d.Location_ID);
                /* Act on the event */
            });

    gameresults.selectAll("text") // Add the score of the home team
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '45')
    		.attr('y', function(d){
    			return (d.Number - 1) * 41+ 25;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
    			return (d.Score_home + " : " + d.Score_away);
    		})
            .on('click', function(d) {
				console.log("text?" + d.Location_ID);
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_treemap(data)});
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_barchart(data)});
                my_Map(d.Location_ID);
                /* Act on the event */
            });

    gameresults.selectAll("img")
        .data(data)
        .enter()
            .append("svg:image")
            .attr('x', '10')
            .attr('y', function(d){
                return (d.Number - 1) * 41+ 10;
            })
            .attr('width', 30)
            .attr('height', 20)
            .attr('fill', 'black')
            .attr("xlink:href", function(d){
                return (d.Logo + d.Home + ".gif");
            })
            .on('click', function(d) {
                console.log('left image?' + d.Location_ID);
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_treemap(data)});
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_barchart(data)});
                my_Map(d.Location_ID);
                /* Act on the event */
            });

    gameresults.selectAll("img")
        .data(data)
        .enter()
            .append("svg:image")
            .attr('x', '90')
            .attr('y', function(d){
                return (d.Number - 1) * 41+ 10;
            })
            .attr('width', 30)
            .attr('height', 20)
            .attr('fill', 'black')
            .attr("xlink:href", function(d){
                return (d.Logo + d.Away + ".gif");
            })
            .on('click', function(d) {
                console.log('right image?' + d.Location_ID);
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_treemap(data)});
                d3.json('http://7450_image_api.wuzizheng.com/location/'+d.Location_ID+'.json', function(data){draw_barchart(data)});
                my_Map(d.Location_ID);
                /* Act on the event */
            });
});
