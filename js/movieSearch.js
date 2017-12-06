function search(){
    // AJAX
    // http://atglab.synology.me:7070/bookSearch/bs?btitle=java

    var dataVal = $("[type=date]").val();
    var date = dataVal.replace(/-/g, "");

    $.ajax({
        async : true,
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        data : {
            key : "1efcaa139225d33ea442d16fe325da49",
            targetDt : date
        },
        timeout : 3000,
        type : "get",
        dataType : "json",
        success : function(data) {
            $("tbody").empty();
            var boxOffice = data.boxOfficeResult.dailyBoxOfficeList;
            $.each(boxOffice, function(idx, item){
                var tr = $("<tr></tr>");
                var img = $("<img />");
                var rankTd = $("<td></td>").text(item.rank);
                var titleTd = $("<td></td>").text(item.movieNm);

                tr.append(rankTd);
                tr.append(img);
                tr.append(titleTd);

                $.ajax({
                    async : false,
                    url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                    data : {
                        key : "1efcaa139225d33ea442d16fe325da49",
                        movieCd : item.movieCd
                    },
                    timeout : 3000,
                    type : "get",
                    dataType : "json",
                    success : function(data) {
                        var movie = data.movieInfoResult.movieInfo;

                        var actorTd = $("<td></td>").text(movie.actors[0].peopleNm);
                        var genreTd = $("<td></td>").text(movie.genres[0].genreNm);

                        tr.append(actorTd);
                        tr.append(genreTd);

                    },
                    error : function() {
                        alert("error");
                    }
                })

                $("tbody").append(tr);
            })
        },
        error : function() {
            alert("error");
        }
    })
}