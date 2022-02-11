// 여러가지 관련된 상수 값을 한곳에 모아 정리할 수 있게 도와주는 타입
// JS는 지원하지 않는다.
// => Union 타입을 이용해서 사용하는 것이 더 안전하다!
// 코틀린이나 스위프트에서는 Enum을 사용한다.(Union타입이 불가능하기 때문)

{
  //Js
  const MAX_NUM =6;
  const MAX_STUDENTS_PER_CLASS =10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"Monday":0, "TUESDAY":1,"WEDNESDAY":2})
  const dayOfToday = DAYS_ENUM.Monday; 

  //TS
  enum DAYS {
    Monday, // 0
    Tuesday, // 1
    WednesDay, // 2
    Thursday, // 3
    Friday,// 4
    Saturday,// 5
    Sunday,// 6
  }
  // -> 1부터 시작하고 싶으면 Monday= 1 값을 할당해주면 된다.
  // 문자열도 가능한데 수동으로 Monday = "Monday" 이런식으로 할당해주면 된다.

  console.log(DAYS.Tuesday) //1
  const day = DAYS.Saturday;
  console.log(day)//5

  // Enum의 문제
  // => 타입이 정확하게 보장되지 않는다. 
  // => 상수를 묶을 방법이 이것만 있는 것이 아니고 Union 타입을 이용해서 묶어줄 수 있음
  // type Days = "Monday"|"Tuesday"|"Wednesday"| 나머지 요일들

}