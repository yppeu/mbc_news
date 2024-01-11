$(document).ready(function () {
  let basicFont = 12; // 기본 폰트 크기를 12px로 지정

  //  스크롤 맨 위로
  $("#btn-gotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // 텍스트 축소 및 확대
  $(".btn-zoomIn").click(function () {
    // zoomIn을 누르면, 함수 발생
    basicFont++; // basicFont는 1씩 계속 증가하고,

    // 20 넘어가면 20에서 동작 멈춤
    if (basicFont > 20) {
      basicFont = 20;
      return false;
    }

    // 기존에 크기가 몇인지 알려주던 p 태그의 텍스트도 현재 폰트 크기랑 같이 변경
    $(".fontSize").text(basicFont + "px");
    // txtBox의 폰트 크기는, 변수 basicFont 크기대로 감
    $("#txtBox").css("font-size", basicFont);
  });

  $(".zoomOut").click(function () {
    // zoomOut을 누르면, 함수 발생
    basicFont--; // basicFont가 1씩 계속 감소

    // 10 이하로 내려가면 10에서 동작 멈춤
    if (basicFont < 10) {
      basicFont = 10;
      return false;
    }
    $(".fontSize").text(basicFont + "px");
    $("#txtBox").css("font-size", basicFont);
  });

  $(".origin").click(function () {
    $(".fontSize").text("12px");
    $("#txtBox").css("font-size", "12px");
  });
});
