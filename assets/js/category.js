
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
