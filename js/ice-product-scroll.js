$(window).scroll(function(){
  var st=$("html").scrollTop()|| $("body").scrollTop()
  if(st>430){
    $(".aside-box .goTop").removeClass('fade')
  }else {
    $(".aside-box .goTop").addClass('fade')
  }
})
$('.aside-box .goTop').click(function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})