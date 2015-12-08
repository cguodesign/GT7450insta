<script>  
  
  //  --- this part is about sliders and their operations: add , replace , delete
  
  // this is the control index of two sliders( for add, modify or reset),    the third one is in idle
  var indexoffilter1 = -1;
  var indexoffilter2 = -1;
  var indexoffilter3 = -1;
  
  
  var nonLinearSlider1 = document.getElementById('my_filter1');
  noUiSlider.create(nonLinearSlider1, {
    connect: true,
    behaviour: 'tap',
    start: [ 500, 4000 ],
    range: {
    // Starting at 500, step the value by 500,
    // until 4000 is reached. From there, step by 1000.
      'min': [ 0 ],
      '10%': [ 500, 500 ],
      '50%': [ 4000, 1000 ],
      'max': [ 10000 ]
    },
    pips: {
    mode: 'values',
    values: [500, 8000],
    density: 2
    }
  });
  
    var nonLinearSlider2 = document.getElementById('my_filter2');
    noUiSlider.create(nonLinearSlider2, {
    connect: true,
    behaviour: 'tap',
    start: [ 10, 1000 ],
    range: {
    // Starting at 500, step the value by 500,
    // until 4000 is reached. From there, step by 1000.
      'min': [ 1, 1 ],
      '25%': [ 10, 1 ],
      '50%': [ 100, 1 ],
      '75%': [ 1000, 1 ],
      'max': [ 9999 ]
    },
    pips: {
    mode: 'values',
    values: [1,100,9999],
    density: 2
    }
  });
  
  function fff(id){
    var obj=document.getElementById(id);
    return obj;
  }
  
  // this is delete function which will also lead to reset corresponding slider
  function del(n) {  
    if(n == "filter1"){
      fff('myfilterul').removeChild(fff(n));
      indexoffilter1 = -4;
      nonLinearSlider1.noUiSlider.set([0, null]);
      nonLinearSlider1.noUiSlider.set([null, 10000]); 
      //alert("reset: " + indexoffilter1);      
      return;
    }   
    
    if(n == "filter2"){
      fff('myfilterul').removeChild(fff(n));
      indexoffilter2 = -4;
      nonLinearSlider2.noUiSlider.set([0, null]);
      nonLinearSlider2.noUiSlider.set([null, 10000]); 
      //alert("reset: " + indexoffilter2);      
      return;
    } 
  }
  
    // every time user adjust slider, system will trigger this function 
    nonLinearSlider1.noUiSlider.on('update', function ( values, handle ) {
    if ( !handle ) {
        addfilter(1,values[0],values[1]);
        return; 
      } else {
        addfilter(1,values[0],values[1]);
        return;
      }
    });  
  
    nonLinearSlider2.noUiSlider.on('update', function ( values, handle ) {
    if ( !handle ) {
        addfilter(2,values[0],values[1]);
        return;
  
      } else {
        addfilter(2,values[0],values[1]);
        return;

      }
    });  
    
    
    // this part is about showing numbers of filter on the top of screen, user can delete it by clicking a 'del' button.
    // this includes two parts: add new one , just modify existing one
    function addfilter(numoffilter, value1, value2){
     //chk ul childNodes is WRONG!!!!  children.length
     var txt = value1 + "  ,  " + value2;
     var ul_obj=fff('myfilterul').children;   
      if(numoffilter == 1){
        var flag = true;

        if(indexoffilter1 < -1 ){
          indexoffilter1++;
          return;
        }
        
        if(indexoffilter1 == -1){
          flag=false;
          indexoffilter1 = ul_obj.length;
        }    
      
        if(!flag){
          addf("filter1",txt);
        }else{
          replacef("filter1",txt);
        }   
    }
    
    
    if(numoffilter == 2){
      var flag = true;

      if(indexoffilter2 < -1 ){
        indexoffilter2++;
        return;
      }
      
      if(indexoffilter2 == -1){
        flag=false;
        indexoffilter2 = ul_obj.length;
      }          
      if(!flag){
        addf("filter2",txt);
      }else{
        replacef("filter2",txt);
      }     
    }
    
    
    /*if(numoffilter == 1){
      var flag = true;
      //var ul_obj=fff('myfilterul').children;    
        alert("current 1: " + indexoffilter1);  
      if(indexoffilter1 < -1 ){
        indexoffilter1++;
        //alert("current index: "indexoffilter1);
        return;
      }
      
      if(indexoffilter1 == -1){
        //alert("ÒÑ¾­Ìí¼Ó£¡");
        alert("equal -1");
        flag=false;
        indexoffilter1 = ul_obj.length;
      }    
      
      if(!flag){
        addf("filter1",txt);
      }else{
        replacef("filter1",txt);
      }      

    }*/
    return;
  }
    
  function addf(id,txt) {  
    var ul=fff('myfilterul');  
    var li= document.createElement("li");  
    var href_a = document.createElement("a");
            href_a.href="javascript:del('"+id+"');";
      href_a.innerHTML ="del";
        li.innerHTML=txt;
      li.id=id;
      li.appendChild(href_a);
      ul.appendChild(li);  
  }
  
  function replacef(id,txt) {  
    var li= document.getElementById(id);//document.createElement("li");  
    var href_a = document.createElement("a");
            href_a.href="javascript:del('"+id+"');";
      href_a.innerHTML ="del";
        li.innerHTML=txt;
    //  li.id=id;
      li.appendChild(href_a);
      
      
      
  // this is about area chart on top of slider, the data is calculated according to like-slider's x-axis
    var data = [{ x: 0, y: 259, },{ x: 1, y: 465, },{ x: 2, y: 657, },{ x: 3, y: 701, },{ x: 4, y: 703, },{ x: 5, y: 4472, },{ x: 6, y: 1901, },{ x: 7, y: 891, },{ x: 8, y: 470, },{ x: 9, y: 358, },{ x: 10, y: 802, },{ x: 11, y: 99, },{ x: 12, y: 33, },{ x: 13, y: 12, },{ x: 14, y: 36, },{ x: 15, y: 51, },{ x: 16, y: 28, },{ x: 17, y: 32, },{ x: 18, y: 6, },{ x: 19, y: 89,}];

  var margin = {top: 5, right: 5, bottom: 5, left: 5},
    width = 195 - margin.left - margin.right,
    height = 50 - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.x; })])
    .range([0, width]);

  var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.y; })])
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

  var svg = d3.select("svg#areachart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    //.call(xAxis);

  svg.append("g")
    .attr("class", "y axis");
    //.call(yAxis);       
  }

</script>