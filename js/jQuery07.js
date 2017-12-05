//원래 방식
/*$(document).on("ready", function(){
    $("h1").click(function(){
        alert("클릭");
    });
})*/

//축약형
/*$(document).ready(function(){
    $("h1").click(function(){
        alert("클릭");
    });
})*/

//축약형2
/*$(function(){
    $("h1").click(function(){
        alert("클릭");
    });
})*/

//결론: $() 는 $(document).ready 를 의미하게 되었다.

$(function(){
    $("h1").click(function(){
        //this : jQuery의 'event handler에서' this 키워드를 이용하면 event source를 지칭한다.
        // * 문서객체임
        alert($(this).text());
    });
})