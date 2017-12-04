function startClock() {
    // 1. 제어 대상 element 찾기 (문서객체 - document object)
    var div = document.getElementById("myDiv");

    var today = new Date().toLocaleString();
    div.innerText = today;

    setInterval(function(){
        var today = new Date().toLocaleString();
        div.innerText = today;
    }, 1000);

}