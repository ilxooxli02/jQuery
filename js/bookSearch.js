function search(){
    // AJAX
    // http://atglab.synology.me:7070/bookSearch/bs?btitle=java
    $.ajax({
        async : true,
        url : "http://atglab.synology.me:7070/bookSearch/bs",
        data : {
            btitle : $("[type=text]").val()
        },
        timeout : 3000,
        type : "get",
        dataType : "jsonp",
        jsonp : "callback",
        success : function(data) {
            $("tbody").empty();
            for(var i=0; i<data.length; i++){
                var tr = $("<tr></tr>");
                var imgTd = $("<td></td>");
                var img = $("<img />").attr("src", data[i].bimgurl)
                                     .attr("width", 200);
                var titleTd = $("<td></td>").text(data[i].btitle);
                var authorTd = $("<td></td>").text(data[i].bauthor);
                var priceTd = $("<td></td>").text(data[i].bprice);
                var buttonTd = $("<td></td>");
                var button = $("<button></button>").text("삭제")
                                                   .addClass("btn btn-outline-success my-2 my-sm-0");
                button.on("click", function(){
                        $(this).parent().parent().remove();
                    }
                );

                // onClick : javaScript inline event model
                //button.attr("onClick", "delete()");

                tr.append(imgTd.append(img));
                tr.append(titleTd);
                tr.append(authorTd);
                tr.append(priceTd);
                tr.append(buttonTd.append(button));

                $("tbody").append(tr);
            }
        },
        error : function() {
            alert("error");
        }
    })
}