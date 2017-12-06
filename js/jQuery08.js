function myFunc(){
    $.ajax({
        async : true,
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        timeout : 3000,
        type : "get",
        data : {
            key : "1efcaa139225d33ea442d16fe325da49",
            targetDt : $("[type=text]").val()
        },
        dataType : "json",
        success : function(data){
            var arr = data.boxOfficeResult.dailyBoxOfficeList;
            $.each(arr, function(idx, item){
                console.log(item.movieNm);
            })
        },
        error : function() {
            alert("error");
        }
    });
}