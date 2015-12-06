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
d3.json("http://7450_image_api.wuzizheng.com/location/216590000.json", function(error, data){
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