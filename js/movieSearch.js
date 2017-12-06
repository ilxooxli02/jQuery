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
                var actorTd = $("<td></td>").attr("data-actors", item.movieCd);
                var genreTd = $("<td></td>").attr("data-genre", item.movieCd);

                tr.append(rankTd);
                tr.append(img);
                tr.append(titleTd);
                tr.append(actorTd);
                tr.append(genreTd);

                $.ajax({
                    async : true,
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

                        $("[data-genre="+item.movieCd+"]").text(movie.genres[0].genreNm);
                        $("[data-actors="+item.movieCd+"]").text(movie.actors[0].peopleNm);
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