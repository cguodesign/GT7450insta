d3.json("../data/gameresults.json", function(error, data){
    //use data here
    var gameresultsHome = d3.select("#home_area").append("svg")
    	.attr("width", 100)
    	.attr("height", 800)
    	.attr('id', 'games_svg')

    gameresultsHome.selectAll("rect")
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
    		.attr('width', '100')
    		.attr('height', '50')
    		.attr('fill', 'rgba(255,255,255,0.1');

    gameresultsHome.selectAll("text")
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '10')
    		.attr('y', function(d){
    			return (d.Number - 1) * 50+ 30;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
    			return d.Home;
    		});

    var gameresultsAway = d3.select("#away_area").append("svg")
    	.attr("width", 100)
    	.attr("height", 800)
    	.attr('id', 'games_svg')

    gameresultsAway.selectAll("rect")
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
    		.attr('width', '110')
    		.attr('height', '50')
    		.attr('fill', 'rgba(255,255,255,0.1');

    gameresultsAway.selectAll("text")
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '10')
    		.attr('y', function(d){
    			return (d.Number - 1) * 50+ 30;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
    			return d.Away;
    		})
});
/*
$(document).ready(function () {
  //your code here
	var jqxhr = $.getJSON( "../data/gameresults.json", function() {
	  console.log( "success" );
	});
});
*/