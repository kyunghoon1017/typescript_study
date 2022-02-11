//타입 추론 

{
  let text = "hello"; 
  // 따로 타입을 명시하지 않아도 에러가 발생하지 않는다.(선언과 동시에 문자열을 할당했기 때문에 자동으로 타입을 유추한다.타입이 뻔한경우 생략하기도 함.)
  //text = 1 // 에러

  function print(message){
    console.log(message);
  }

  print("hello");
  print(1);
  //모두 가능

  // message 인자는 any라는 타입을 암묵적으로 가지고 있어서, 인자는 명확하게 해야한다. => 아무 값이나 다 들어올 수 있기 때문에
  // function print(message : string){} or function print(message = "hello")

  function add(X:number, Y : number){
    return X+Y
  }

  const result = add(1,2);
}