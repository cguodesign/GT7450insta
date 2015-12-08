var isResizing = false,
    lastDownX = 0;

console.log("hey");

$(function() {
      var container = $('#maincontainer'),
        left = $('#left_panel'),
        middle = $('#center_panel'),
        right = $('#right_panel'),
        handle_left = $('#drag_left'),
        handle_right = $('#drag_right');

      var handler_selected = 0;

      handle_right.on('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
        handler_selected = 2; //2 for right handler
        console.log(handler_selected);
      });

      handle_left.on('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
        handler_selected = 1; // 1 for left handler
        console.log(handler_selected);
      });

      $(document).on('mousemove', function(e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing)
          return;

        var updated_X = e.clientX - container.offset().left;

        if (handler_selected == 1) {
          if (updated_X <= (container.width() - right.width())){
            left.css('right', updated_X);
            left.css('width', updated_X);
            middle.css('width', container.width() - updated_X - right.width());
            middle.css('left', updated_X);
            console.log("ha");
          }else{
            console.log("no middle part");
          };
        };

        if (handler_selected == 2) {
          if (updated_X >= left.width()){
            right.css('left', updated_X);
            right.css('width', container.width() - updated_X);
            middle.css('width', updated_X - left.width());
            middle.css('right', updated_X);
            console.log(container.width() - left.width());
          }else{
            console.log("no middle part");
          }
        };

        }).on('mouseup', function(e) {
            // stop resizing
            isResizing = false;
            //eventDropsChart(element);
          });
      });
