
  $.ajax({
    type: "get",
    url: "/admin/category/getAllCategory",
    success(res) {
      if (res.code === 200) {
        let html = template('tp',res.data);
        $('tbody').html(html);
      }
    }
  });

  //1.切换显示隐藏
$('.form-group > .Boxfont').on('click', function () {
  $('.Boxfont > .right').toggle();//切换显示隐藏
})
