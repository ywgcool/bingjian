// 全屏滚动
new fullpage('#fullpage', {
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  showActiveTooltip: true,
  slidesNavigation: true,
  navigation: true,
  menu: '#my-nav',
  scrollOverflow: true,
  afterLoad: function(origin, destination, direction) {
    const nav = document.getElementById('nav')
    if (destination.index === 1 || destination.index === 2) {
      nav.classList.add('nav-white')
    } else {
      nav.classList.remove('nav-white')
    }
  }
})

// 第一屏轮播图
new Swiper('.section-1 .swiper-container', {
  pagination: {
    el: '.section-1 .swiper-pagination'
  },
  speed: 2000,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.section-1 .swiper-button-next',
    prevEl: '.section-1 .swiper-button-prev'
  }
})

// 第三屏轮播图
new Swiper('.section-3 .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.section-3 .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: 'section-3 .swiper-button-next',
    prevEl: 'section-3 .swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  }
})
;(function () {
  // 第二屏效果
  const deviecWrap = document.querySelector('.device-wrap')
  const deviecOn = document.querySelector('.device-on')
  deviecWrap.onmousemove = e => {
    deviecOn.style.width = e.offsetX + 'px'
  }
})()

$('#my-nav').on('hidden.bs.collapse', function () {
  // do something…
  $('#nav').removeClass('nav-cd-bk')
})

$('#my-nav').on('show.bs.collapse', function () {
  // do something…
  $('#nav').addClass('nav-cd-bk')
})