d3.json("../data/gameresults.json", function(error, data){
    //use data here
    var gameresults = d3.select("#results").append("svg")
    	.attr("width", 200)
    	.attr("height", 800)
    	.attr('id', 'games_svg')

    gameresults.selectAll("rect")
    	.data(data)
    	.enter()
    		.append("rect")
    		.attr('class', 'game_scoreboard')
    		.attr('id', function(d){
    			var gameid = "g_" + d.Home;
    			return gameid;
    		})
    		.attr('y', function(d){
    			return (d.Number -1)*50 ;
    		})
    		.attr('x', '0')
    		.attr('width', '200')
    		.attr('height', '50')
    		.attr('fill', 'rgba(255,255,255,1.0)');
 
    gameresults.selectAll("text") // Add the score of the home team
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '45') 
    		.attr('y', function(d){
    			return (d.Number - 1) * 50+ 30;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
    			return (d.Score_home + " : " + d.Score_away);
    		});

    gameresults.selectAll("img")
        .data(data)
        .enter()
            .append("svg:image")
            .attr('x', '10')
            .attr('y', function(d){
                return (d.Number - 1) * 50+ 10;
            })
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', 'black')
            .attr("xlink:href", function(d){
                return (d.Logo + d.Home + ".gif");
            });

    gameresults.selectAll("img")
        .data(data)
        .enter()
            .append("svg:image")
            .attr('x', '90')
            .attr('y', function(d){
                return (d.Number - 1) * 50+ 10;
            })
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', 'black')
            .attr("xlink:href", function(d){
                return (d.Logo + d.Away + ".gif");
            });

    gameresults.selectAll("div")
        .data(data)
        .enter()
            .append("div")
            .attr('class','dddtooltip')
            .style('opacity', 1)
            .attr('for', function(d){
                var gameid = "g_" + d.Home;
                return gameid;
            })
            .text(function(d){
                return (d.Home + " vs " + d.Away)
            });
/*
    var mainArea = d3.select("#maincontainer").append('svg')
        .attr("width",800)
        .attr("width",800)

    mainArea.selectAll("line")
        .data(data)
        .enter()
            .append('line')
            .attr("x1", 5)
            .attr("y1", function(d){
                return (d.Number) * 50
            })
            .attr("x2", 795)
            .attr("y2", function(d){
                return (d.Number) * 50
            })
            .attr("stroke","blue")
            .attr('stroke-width', 1);
*/
});

/*
$(document).ready(function () {
  //your code here
	var jqxhr = $.getJSON( "../data/gameresults.json", function() {
	  console.log( "success" );
	});
});
*/