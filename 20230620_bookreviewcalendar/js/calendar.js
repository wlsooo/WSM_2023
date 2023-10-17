var now = new Date(); // 오늘 날짜, 시간
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];
// console.log(datesContainerDiv);

const setCalendar = (year, month) => {
    // 현재 월 제목에 표시하자
    // html -> js
    const titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`
    titleMonthDiv.innerHTML = `${month}월`;
    
    // 1~해당 월의 마지막 날짜까지 날짜Div 만들자
    // datesContainerDiv의 자식들(dateItemDiv) clear
    // 자식들을 한 명씩 지워서 마지막 자식까지 지우면 새로운 달의 달력을 출력함
    //1.
    // while (datesContainerDiv.firstChild) {
    //     datesContainerDiv.removeChild(datesContainerDiv.firstChild);
    // }
    //2.
    // datesContainerDiv.innerHTML = null;
    //3.
    datesContainerDiv.replaceChildren();


    // 해당 월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month + 1 - 1, 0).getDate(); //2023년 10월 1일의 하루 전날 : 9월 30일
    for(let date=1; date<=thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement("div");    //<div></div>
        dateItemDiv.classList.add("date"); 
        dateItemDiv.classList.add("item");  //<div class="date item"></div>
        dateItemDiv.innerHTML = date;       //<div class="date item">date</div>
        //.dates.container에게 자식으로 붙이자
        datesContainerDiv.appendChild(dateItemDiv);
    }
    
    //1일을 해당 요일로 이동하자
    var firstDateDiv = datesContainerDiv.querySelector(".date.item:nth-child(1)");
    //css: .date.item:nth-child(1) {grid-column-start: 6}
    //1일의 요일을 구하자 year, month -> month 1일의 요일 : 9월 : 5
    var firstDateDay = new Date(year, month-1, 1).getDay(); //date 객체의 1일 요일을 구함
    firstDateDiv.style.gridColumnStart = firstDateDay+1;
    
    //토요일 : 파란색 글자로
    let saturdayFirstDate = 7 - firstDateDay;
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for(let saturdayDiv of saturdayDivs) {
        //css: .date.item:nth-child(7n+2) {color: blue};
        saturdayDiv.style.color = "blue";
    }
    
    //일요일 : 빨간색 글자로
    let sundayFirstDate = (8 - firstDateDay) % 7;   // 일요일이 1일인 경우를 대비해 %를 사용
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs) {
        sundayDiv.style.color = "red";
    }
    
    // 해당 월의 1일은 무슨 요일?
    var thisMonthFirstDay = new Date(year, month-1, 1).getDay();   //0:일, 1:월, 2:화, ..., 6:토
    
    console.log(thisMonthLastDate, thisMonthFirstDay);
    // 공휴일 빨간색
}
setCalendar(year, month);

// date: 날짜, day: 요일


// <: 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month-1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
};   // onclick은 함수 아님
// leftDiv.addEventListener("click", () => console.log("이전달"));  //addEventListener는 함수

// >: 이후달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year,month);
};