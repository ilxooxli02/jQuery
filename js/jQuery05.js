function myFunc() {
    //.css 메소드 이용하면 매번 렌더링 되기 때문에 좋지 않음
    //$("h1").css("color", "red");
    //$("h1").css("background-color", "yellow");

    //클래스를 직접 지정 가능
    //$("h1").addClass("myStyle");
    //$("h1").removeClass("myStyle");

    //속성 직접 지정 가능
    //$("h1").attr("id");
    //$("h1").removeAttr("id");

    //$("h1").text("<font color=red>소리없는 아우성</font>");
    //$("h1").html("<font color=red>소리없는 아우성</font>");

    //$("ul>li").remove();
    //$("ul").empty();

    //element를 새로 만드는 방법
    //1. 시작 태그와 마치는 tag 생성
    //<li id="suwon">수원</li>
    var li = $("<li></li>").text("수원").attr("id","suwon");
    //<input type="button" value="하하">
    var input = $("<input />").attr("type", "button")
                              .attr("value", "하하");
    //document에 원하는 element 붙이기
    //1. 자식으로 붙이고 맨 마지막에 붙이기
    //$("ul").append(li);
    //2. 자식으로 붙이고 맨 앞에 붙이기
    //$("ul").prepend(li);
    //3.형제로 붙이고 바로 뒤에 붙이기 (after)
    //$("ul>li:first").after(li);
    //4.형제로 붙이고 바로 앞에 붙이기 (before)
    //$("ul>li:last").before(li);
    //$("ul").append($("ul>li:eq(1)"));
    var li = $("<li></li>").text("수정").attr("id", "suwon");
    var tmp = li.clone();
}