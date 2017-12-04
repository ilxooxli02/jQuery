

//1. 선언적 함수
var sum=myFunc(20); //undefined 값이 지정되었다가 함수가 load 되면 값이 할당됨
console.log(sum);

    //load 시 함수를 마치 변수처럼 메모리를 할당하고 데이터에 실행 주소 값을 지정함
    //매개변수가 정확히 맵핑되지 않아도 정상 호출됨(값이 없으면 undefined, 더 많이 추가되면 별도 arg 인자로 처리 가능)
function myFunc(a,b){
    return a+b;
}


//2. 값의 역할을 하는 함수
    //함수를 변수에 저장, 다른 함수의 인자, 다른 함수의 리턴값.
    //일급함수(first classes function, first-level class function)
var test = function(a, b){
    //익명함수, 람다함수
};

//3. 객체를 만들기 위한 용도의 함수.
function myObj(a,b){
    this.name="홍길동";
}

var obj = new myObj(10,20);

//====================================================================================

//객체 literal
var myObj = {
    "my Hobby" : "당구",
    myName : "홍길동",
    myAge : 30,
    myInfo : function() {
        console.log("안녕!!");
    }
};

//자바스크립트 객체는 동적으로 property와 method를 제어 할 수 있다.
myobj.myName="최길동";
myobj.myAddress="서울";
delete myobj.myAge;

//myobj.my Hobby = "게임";
myobj["my Hobby"] = "게임";