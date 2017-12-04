 //$(문서객체 or "selector").method();
 //제어하려는 문서객체를 jQuery 객체로치환
 //select : 문자열(특수한 형태의 문자열

 function myFunc(){
    //1. 전체 선택자("*")
    $("*").css("color", "red");
    //2. 태그 선택자
    $("h1").remove();
    //3. ID 선택자 ("#")
    alert($("#region").text());
    //4. class 선택자 (".")
    $(".there").css("background-color","yellow");
    //5. attribute 선택자 ("[]")
    //$("[type=button]").attr("disabled", "disabled");
    $("[type]").attr("disabled", "disabled");
    //6. 구조 선택자 (자식 : ">", 후손 : " ", 형제(바로 뒤):"+", 형제(뒤 모두):"~")
    //$("ul li").remove();
    //$("ul>li").remove();
    //$("#region+li").remove();
    $("#region~li").remove();

 }