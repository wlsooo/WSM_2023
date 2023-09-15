var now = new Date(); // 오늘 날짜, 시간
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];
console.log(datesContainerDiv);

// <: 이전달
// month -= 1;
// >: 이후달
// month += 1;

const setCalendar = (year, month) => {
    // 현재 월 제목에 표시하자
    // html -> js
    const titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`
    titleMonthDiv.innerHTML = `${month}월`;

    // 1~해당 월의 마지막 날짜까지 날짜Div 만들자
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


    // 해당 월의 1일은 무슨 요일?
    var thisMonthFirstDay = new Date(year, month-1, 1).getDay();   //0:일, 1:월, 2:화, ..., 6:토
    
    console.log(thisMonthLastDate, thisMonthFirstDay);
    // 공휴일 빨간색
}
setCalendar(year, month);

// date: 날짜, day: 요일