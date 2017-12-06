function myFunc(){
    $.ajax({
        async: true,
        url : "http://localhost:8081/ajax/ajaxCall",
        timeout : 3000,
        type : "get",
        dataType : "jsonp",
        jsonp : "callback",
        success : function(data) {
            console.log("2번");
            $("div").html(data.name + " : " + data.address);
        },
        error : function() {
            alert("이상");
        }
    });
    console.log("1번");
}