function log(){
    console.log($("#apple").text());
    console.log($("#pineapple").text());
    console.log($("#pineapple+li.myList").text());
    //console.log($("ul>li.myList").text());

    console.log($("[type=text]").attr("id"))

    console.log($("ol >li:first").text());
    console.log($("ol >li:eq(1)").text());
    //console.log($("ol >li").first().text());
    console.log($("ol >li:last").text());


}