//URL book에 해당하는 parameter 값 읽어오자
let book = new URL(location.href).searchParams.get('book'); //url에서 book이라는 변수의 값을 가져오는 코드
console.log(`book: ${typeof(book)}`);
//book이 null이면 책장으로 가자
if(book===null) location.href='index.html';


//book값(string) -> bookId(number) 변환하자
let bookId = parseInt(book);  //Number(book)
console.log(`book: ${typeof(book)} bookId: ${typeof(bookId)}`); //"3" -> 3


//books를 돌면서 book 숫자와 같은 i값의 책을 가져오자
let bookData;
for(let bookOne of books) {
    if(bookId === bookOne.id) { // === : 값과 자료형이 둘 다 맞을 때 참
        bookData = bookOne;
        break;
    }
}
//제목
let title = bookData.title;     //bookData["title"]
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;   
console.log(title, author, publisher, bookImage); 


//화면에 보여주기
// HTML 요소 -> js 변수
const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`;

const titleDiv = document.getElementsByClassName("title")[1];
// const titleDiv = document.querySelectorAll(".title");    //위 코드와 같은 역할
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

//읽은 날짜: 임시로 오늘의 날짜 표시하자
let now = new Date();
//오늘의 날짜 구하자
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
//사람이 알아보는 형식으로 바꾸자
let dateString = `${year}년 ${month}월 ${date}일`;
//HTML -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
//오늘의 날짜 값 넣자
readDateDiv.innerHTML = dateString;
  


// var와 let의 차이 -> var는 function()에서 쓰고, let은 {}에서 사용된다. var를 선언하면 함수 안에서 선언해도
// 함수 밖에서 사용할 수 있지만 let은 {}안에서 하용하면 {}안에서만 사용할 수 있다.