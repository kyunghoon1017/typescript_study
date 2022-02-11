{
  // Array
  //표현 방법
  const fruits:string[] =["사과","바나나"];

  const numbers : number[] =[1,3,4];
  const numbers2 : Array<number> = [1,3,5,7,9]

  //전달되어진 인자를 함수 내에서 변경하지 못하게 하는 방법(readonly) => 불변성 유지
  function printArray(fruits: readonly string[]){}

  // Tuple
  // class || interface 로 묶기 애매하고, 동적으로 관련 타입의 데이터를 묶어 사용자가 이름을 정의해서 쓸 경우에 유용하게 쓰일 수 있음.
  // interface, type alias, class 로 대체해서 사용하는 것이 좋음 => 가독성이 좋지 않기때문에
  let student : [string, number];
  student = ["kyunghoon",7]
  student[0] // "kyunghoon"
  student[1] // 7
  const [name, age] = student; // => 조금 더 명확해짐
}