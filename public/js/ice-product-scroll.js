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

$('#my-nav').on('hidden.bs.collapse', function () {
  // do something…
  $('#nav').removeClass('nav-cd-bk')
})

$('#my-nav').on('show.bs.collapse', function () {
  // do something…
  $('#nav').addClass('nav-cd-bk')
})