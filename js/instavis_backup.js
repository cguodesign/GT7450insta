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
<<<<<<< HEAD:Project/js/instavis.js
    		.attr('fill', 'rgba(255,255,255,1.0)');
 
    gameresults.selectAll("text") // Add the score of the home team
=======
    		.attr('fill', 'rgba(255,255,255,0.1');
 
    gameresultsHome.selectAll("text") // Add the score of the home team
>>>>>>> master:js/instavis_backup.js
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '45') 
    		.attr('y', function(d){
    			return (d.Number - 1) * 50+ 30;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
<<<<<<< HEAD:Project/js/instavis.js
    			return (d.Score_home + " : " + d.Score_away);
    		});

    gameresults.selectAll("img")
=======
    			return d.Score_home;
    		});

    gameresultsHome.selectAll("img")
>>>>>>> master:js/instavis_backup.js
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
<<<<<<< HEAD:Project/js/instavis.js

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
=======

    var gameresultsAway = d3.select("#away_area").append("svg") // add the area to show the away team 
    	.attr("width", 100)
    	.attr("height", 800)
    	.attr('id', 'games_svg')

    gameresultsAway.selectAll("rect") // add the background for away team 
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

    gameresultsAway.selectAll("text") // add the score for away team 
    	.data(data)
    	.enter()
    		.append("text")
    		.attr('x', '10')
    		.attr('y', function(d){
    			return (d.Number - 1) * 50+ 30;
    		})
    		.attr('fill', 'black')
    		.text(function(d){
    			return d.Score_away;
    		});

    gameresultsAway.selectAll("img")
        .data(data)
        .enter()
            .append("svg:image")
            .attr('x', '35')
            .attr('y', function(d){
                return (d.Number - 1) * 50+ 10;
            })
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', 'black')
            .attr("xlink:href", function(d){
                return (d.Logo + d.Away + ".gif");
            });
>>>>>>> master:js/instavis_backup.js
});

/*
$(document).ready(function () {
  //your code here
	var jqxhr = $.getJSON( "../data/gameresults.json", function() {
	  console.log( "success" );
	});
});
*/