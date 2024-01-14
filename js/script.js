$(document).ready(function () {

  //  스크롤 맨 위로
  $("#btn-gotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // 햄버거 메뉴 누를 시 block
  $('.m-ham>img').on('click', function(){
      console.log('햄버거 메뉴 누를 시 block');
      $('.fullscreen-menu').fadeIn();
  });
  $('.m-ham-close').on('click', function(){
      $('.fullscreen-menu').hide();
  });

  let basicFont = 14; // 기본 폰트 크기를 12px로 지정

  // 텍스트확대
  $(".btn-zoomIn").click(function () {
    console.log(1);
    basicFont++;

    // 20 넘어가면 20에서 동작 멈춤
    if (basicFont > 15) {
      basicFont = 15;
      return false;
    }
    $(".fontSize").css("font-size", basicFont + "px"); // 폰트 크기는, 변수 basicFont 크기대로 감
  });
  // 텍스트 축소
  $(".btn-zoomOut").click(function () {
    basicFont--; // basicFont가 1씩 계속 감소

    // 10 이하로 내려가면 10에서 동작 멈춤
    if (basicFont < 13) {
      basicFont = 13;
      return false;
    }
    $(".fontSize").css("font-size", basicFont + "px");
  });
});
