
var all_games = [1264107,229343917,248861636,219182853,269087183,222908252,16430,216284597,329051044,309794523,239586494,401306254,962437084,233268];
var eventdrop_location = new Array(14);
var middle_placeholder = document.getElementById('center_panel');
//var eventdrop_element = {name:"", dates:[]};

var eventDropsChart = d3.chart.eventDrops()
  .start(new Date(1444968000000))
  .end(new Date(1445399940000))
  .width($("#center_panel").width())
  .hasBottomAxis(false)
  .hasTopAxis(false);

var Initial_Eventdrop_location = function(d){
  for (g = 0; g< d.length; g++){
    //console.log(eventdrop_location.length);
    eventdrop_location[g] = { name:'', dates:[]};
    eventdrop_location[g].name = d[g];
    //eventdrop_location[g].dates = [];
  }
  //console.log(eventdrop_location);
}

var addGamesDots = function(d){
  var url_heading = "http://7450_image_api.wuzizheng.com/location/"
  for (game = 0; game < d.length; game++){
    url = url_heading + d[game] + ".json";
    var game_time_id = d[game];
    //console.log(url);
    console.log(d[game]);
    $.ajax({      
      type: 'GET',
      url: url,
      dataType: 'json',
      async: true,
            cache: true,
            timeout: 10000,
            success: function(data){
                if(data && data.length > 0){
                  data.forEach(function(obj) {
                    //console.log(game_time_id + ' : ' + obj.created_time); 
                    //console.log(obj);
                      if (Math.random() > 0.9) {
                          appendData(obj.location.id, new Date(obj.created_time * 1000));
                      }
                  });
                };
              setTimeout(appendData, 2000);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
              console.log(textStatus + ', ' + errorThrown);
              setTimeout(appendData, 5000);
          }
    });
  }
}


var appendData = function (game_time, time) {
     for(i in eventdrop_location){
          if(eventdrop_location[i].name == game_time){
               eventdrop_location[i].dates.push(time);
               //console.log(eventdrop_location);
               break;
          }else{
            //console.log(eventdrop_location[i].name);
          }
     }
     //console.log(eventdrop_location);
     //elements = element.datum(eventdrop_location);
     //graph(element);
}

Initial_Eventdrop_location(all_games);
addGamesDots(all_games);

var element = d3.select(middle_placeholder).append('div').datum(eventdrop_location);
eventDropsChart(element);


