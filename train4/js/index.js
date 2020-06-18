
      $(function() {
        //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
        $('.send').click(function() {
          //获取文本输入框的内容
          var val = $('.content').val();
          //将文本框的内容赋值给val后，将文本框的内容清除，以便用户下一次输入
          $('.content').val('');
          //将文本框内容用div包裹起来，便于后续处理
          var $content = $('<div class="text">' + val + '</div>');
          //获取弹幕墙对象
          $screen = $(document.getElementById("screen"));
          //设置字体随机大小
          //var Fontsize=parseInt(Math.random() * $content.fontsize());
         //设置字体随机颜色
          //var Fontcolor=Math.floor(Math.random() * $content.fontcolor());

          //设置弹幕体出现时的上边距，为任意值
          var top = Math.random() * $screen.height()+40;
          //设置弹幕体的上边距和左边距
          $content.css({
            top: top + "px",
            left: 80
          });
          //将弹幕体添加到弹幕墙中
          $('.dm_show').append($content);
          //弹幕体从左端移动到最右侧，时间为8秒，然后直接删除该元素
          $content.animate({
            left: $screen.width()+80-$content.width()
          }, 10000, function() {
            $(this).remove();
          });
        });
        //设置“清屏”点击事件，清除弹幕墙中的所有内容
        $('.clear').click(function() {
          $('.dm_show').empty();
        });
      });
