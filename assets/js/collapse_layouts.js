$(function(){
  // 实现点击父级菜单，可以展开和收起子级菜单的代码
  $('.aside > ul').collapse();


  // 需要判断url是否是某些特定的页面，如果是，需要把子级菜单展开
  // 比如分类页面就需要展开子级菜单
  let start = location.href.lastIndexOf('/');
  // console.log(start);
  let url = location.href.substring(start + 1);
  // console.log(url);
  if(url === 'category.html'){
    // 把子级ul的一个class去除就行了
    $("#menu-posts").removeClass('collapse');
  }
});