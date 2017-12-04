function myFunc() {
    var arr = $("[type=checkbox]:checked+span").each(function(idx, item){
        // idx : index, tiem : selector 에 의해서 선택된 문서 객체
        //console.log(item.innerText);
        console.log($(item).text());
    })
}