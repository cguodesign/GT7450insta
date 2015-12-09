// 是向一个		<div id="areachart" ></div>   里面画，在界面中写一个这个就可以了。
// 只使用到了d3

/*			svg { border: 0px solid #dedede; }
			.axis path,
			.axis line {
			fill: none;
			stroke: #000;
			shape-rendering: crispEdges;
			}
			.area {
			fill: steelblue;
			}
		然后style中放这一段， 是areachart的。  不用的话，画出来是黑色的。	
			
			
			*/
			
			
	var myChartData;
	
	
	//  调用函数，输入比赛的编号，直接画图。
	function my_Map(dataindex){
		
		if(dataindex == 1264107){
			return draw1();
		}else if(dataindex == 229343917){
			return draw1();
		}else if(dataindex == 248861636){
			return draw1();
		}else if(dataindex == 219182853){
			return draw1();
		}else if(dataindex == 269087183){
			return draw1();
		}else if(dataindex == 222908252){
			return draw1();
		}else if(dataindex == 16430){
			return draw1();
		}else if(dataindex == 216284597){
			return draw1();
		}else if(dataindex == 329051044){
			return draw1();
		}else if(dataindex == 309794523){
			return draw1();
		}else if(dataindex == 239586494){
			return draw1();
		}else if(dataindex == 401306254){
			return draw1();
		}else if(dataindex == 962437084){
			return draw1();
		}else if(dataindex == 233268){
			return draw1();
		}			
		return 
	}
	
			
			var data_1264107 = [{ x: 0, y: 11, },{ x: 1, y: 15, },{ x: 2, y: 20, },{ x: 3, y: 31, },{ x: 4, y: 24, },{ x: 5, y: 221, },{ x: 6, y: 113, },{ x: 7, y: 43, },{ x: 8, y: 13, },{ x: 9, y: 11, },{ x: 10, y: 46, },{ x: 11, y: 10, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 1, },{ x: 15, y: 1, },{ x: 16, y: 0, },{ x: 17, y: 1, },{ x: 18, y: 0, },{ x: 19, y: 5,}];
			
			
			var data_229343917 = [{ x: 0, y: 18, },{ x: 1, y: 24, },{ x: 2, y: 21, },{ x: 3, y: 33, },{ x: 4, y: 26, },{ x: 5, y: 216, },{ x: 6, y: 95, },{ x: 7, y: 50, },{ x: 8, y: 27, },{ x: 9, y: 12, },{ x: 10, y: 39, },{ x: 11, y: 1, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 5, },{ x: 16, y: 2, },{ x: 17, y: 1, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
		
			var data_248861636 = [{ x: 0, y: 0, },{ x: 1, y: 0, },{ x: 2, y: 0, },{ x: 3, y: 0, },{ x: 4, y: 0, },{ x: 5, y: 0, },{ x: 6, y: 0, },{ x: 7, y: 0, },{ x: 8, y: 0, },{ x: 9, y: 0, },{ x: 10, y: 0, },{ x: 11, y: 0, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];


			var data_219182853 = [{ x: 0, y: 7, },{ x: 1, y: 29, },{ x: 2, y: 32, },{ x: 3, y: 50, },{ x: 4, y: 43, },{ x: 5, y: 266, },{ x: 6, y: 65, },{ x: 7, y: 26, },{ x: 8, y: 18, },{ x: 9, y: 14, },{ x: 10, y: 30, },{ x: 11, y: 3, },{ x: 12, y: 1, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 4, },{ x: 18, y: 1, },{ x: 19, y: 6,}];
		
			var data_269087183 = [{ x: 0, y: 14, },{ x: 1, y: 37, },{ x: 2, y: 41, },{ x: 3, y: 44, },{ x: 4, y: 41, },{ x: 5, y: 232, },{ x: 6, y: 91, },{ x: 7, y: 39, },{ x: 8, y: 15, },{ x: 9, y: 15, },{ x: 10, y: 30, },{ x: 11, y: 4, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 1, },{ x: 15, y: 10, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
		
		
			var data_222908252 = [{ x: 0, y: 23, },{ x: 1, y: 40, },{ x: 2, y: 54, },{ x: 3, y: 50, },{ x: 4, y: 60, },{ x: 5, y: 326, },{ x: 6, y: 112, },{ x: 7, y: 51, },{ x: 8, y: 35, },{ x: 9, y: 26, },{ x: 10, y: 64, },{ x: 11, y: 13, },{ x: 12, y: 2, },{ x: 13, y: 2, },{ x: 14, y: 2, },{ x: 15, y: 1, },{ x: 16, y: 18, },{ x: 17, y: 19, },{ x: 18, y: 1, },{ x: 19, y: 3,}];
		
			var data_16430 = [{ x: 0, y: 0, },{ x: 1, y: 3, },{ x: 2, y: 1, },{ x: 3, y: 4, },{ x: 4, y: 2, },{ x: 5, y: 29, },{ x: 6, y: 6, },{ x: 7, y: 1, },{ x: 8, y: 1, },{ x: 9, y: 0, },{ x: 10, y: 3, },{ x: 11, y: 0, },{ x: 12, y: 1, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
		
			var data_216284597 = [{ x: 0, y: 24, },{ x: 1, y: 73, },{ x: 2, y: 75, },{ x: 3, y: 106, },{ x: 4, y: 114, },{ x: 5, y: 753, },{ x: 6, y: 397, },{ x: 7, y: 185, },{ x: 8, y: 107, },{ x: 9, y: 52, },{ x: 10, y: 132, },{ x: 11, y: 11, },{ x: 12, y: 7, },{ x: 13, y: 0, },{ x: 14, y: 5, },{ x: 15, y: 7, },{ x: 16, y: 2, },{ x: 17, y: 4, },{ x: 18, y: 3, },{ x: 19, y: 7,}];
		
			var data_329051044 = [{ x: 0, y: 1, },{ x: 1, y: 3, },{ x: 2, y: 8, },{ x: 3, y: 3, },{ x: 4, y: 6, },{ x: 5, y: 49, },{ x: 6, y: 8, },{ x: 7, y: 6, },{ x: 8, y: 3, },{ x: 9, y: 0, },{ x: 10, y: 10, },{ x: 11, y: 0, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 1, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
			
			var data_309794523 = [{ x: 0, y: 14, },{ x: 1, y: 24, },{ x: 2, y: 21, },{ x: 3, y: 22, },{ x: 4, y: 33, },{ x: 5, y: 130, },{ x: 6, y: 49, },{ x: 7, y: 16, },{ x: 8, y: 11, },{ x: 9, y: 1, },{ x: 10, y: 13, },{ x: 11, y: 0, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
			
			
			var data_239586494 = [{ x: 0, y: 39, },{ x: 1, y: 72, },{ x: 2, y: 151, },{ x: 3, y: 135, },{ x: 4, y: 138, },{ x: 5, y: 984, },{ x: 6, y: 483, },{ x: 7, y: 260, },{ x: 8, y: 127, },{ x: 9, y: 97, },{ x: 10, y: 167, },{ x: 11, y: 29, },{ x: 12, y: 9, },{ x: 13, y: 5, },{ x: 14, y: 11, },{ x: 15, y: 17, },{ x: 16, y: 7, },{ x: 17, y: 2, },{ x: 18, y: 1, },{ x: 19, y: 30,}];

			
			var data_401306254 = [{ x: 0, y: 7, },{ x: 1, y: 4, },{ x: 2, y: 4, },{ x: 3, y: 14, },{ x: 4, y: 15, },{ x: 5, y: 40, },{ x: 6, y: 8, },{ x: 7, y: 5, },{ x: 8, y: 6, },{ x: 9, y: 5, },{ x: 10, y: 16, },{ x: 11, y: 0, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
	
			var data_962437084 = [{ x: 0, y: 0, },{ x: 1, y: 0, },{ x: 2, y: 0, },{ x: 3, y: 2, },{ x: 4, y: 2, },{ x: 5, y: 2, },{ x: 6, y: 4, },{ x: 7, y: 0, },{ x: 8, y: 0, },{ x: 9, y: 0, },{ x: 10, y: 1, },{ x: 11, y: 0, },{ x: 12, y: 0, },{ x: 13, y: 0, },{ x: 14, y: 0, },{ x: 15, y: 0, },{ x: 16, y: 0, },{ x: 17, y: 0, },{ x: 18, y: 0, },{ x: 19, y: 0,}];
			
			var data_233268 = [{ x: 0, y: 43, },{ x: 1, y: 54, },{ x: 2, y: 99, },{ x: 3, y: 105, },{ x: 4, y: 111, },{ x: 5, y: 803, },{ x: 6, y: 380, },{ x: 7, y: 180, },{ x: 8, y: 109, },{ x: 9, y: 87, },{ x: 10, y: 160, },{ x: 11, y: 21, },{ x: 12, y: 7, },{ x: 13, y: 3, },{ x: 14, y: 17, },{ x: 15, y: 10, },{ x: 16, y: 0, },{ x: 17, y: 2, },{ x: 18, y: 3, },{ x: 19, y: 7,}];
			
			

	
	function draw1(){	
		myChartData = data_1264107;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}	
	
			
	function draw2(){	
		myChartData = data_229343917;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
	function draw3(){	
		myChartData = data_248861636;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
	function draw4(){	
		myChartData = data_219182853;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}			
		
	function draw5(){	
		myChartData = data_269087183;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}	

	function draw6(){	
		myChartData = data_222908252;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}	
	
			
	function draw7(){	
		myChartData = data_16430;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
	function draw8(){	
		myChartData = data_216284597;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
	function draw9(){	
		myChartData = data_329051044;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}			
		
	function draw10(){	
		myChartData = data_309794523;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}	

	function draw11(){	
		myChartData = data_239586494;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}	
	
			
	function draw12(){	
		myChartData = data_401306254;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
	function draw13(){	
		myChartData = data_962437084;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}				
			
			
	function draw14(){	
		myChartData = data_233268;
		d3.select('#areachart').select('svg').remove();
	
		var margin = {top: 10, right: 10, bottom: 10, left: 10},
			width = 375 - margin.left - margin.right,
			height = 150 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.x; })])
			.range([0, width]);

		var y = d3.scale.linear()
			.domain([0, d3.max(myChartData, function(d) { return d.y; })])
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var area = d3.svg.area()
			.x(function(d) { return x(d.x); })
			.y0(height)
			.y1(function(d) { return y(d.y); });

		var svg = d3.select("#areachart").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("path")
			.datum(myChartData)
			.attr("class", "area")
			.attr("d", area);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")");

		svg.append("g")
			.attr("class", "y axis");
			
			}		