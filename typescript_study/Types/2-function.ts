{
  //JScode
  function jsAdd(num1,num2){
    return num1 + num2;
  }

  //TScode
  function tsAdd(num1:number,num2:number):number{
    return num1+num2;
  }

  //JScode
  function jsFetchNum(id){
    //code..
    //code..
    return new Promise((resolve,reject)=>{
      resolve(100);
    })
  }

  //TScode
  function tsFecthNum(id:string):Promise<number>{
    //code..
    //code..
    return new Promise((resolve,reject)=>{
      resolve(100);
    })
  }

  //JS => TS
  //(1) Optional parameter
  //lasteName 인자에 "?"를 넣어서 전달을 받을 수도 있고 아닐수도 있게 표현할 수 있음.
  function printName(firstName:string, lastName?:string){
    console.log(firstName);
    console.log(lastName);
  }
  printName("kyunghoon","chung")
  printName("kyunghoon")
  printName("kyunghoon",undefined)
  // 비슷하지만 다른 방식
  function printName2(firstName:string, lastName:string|undefined){
    console.log(firstName);
    console.log(lastName);
  }
  printName2("kyunghoon","chung")
  // printName2("kyunghoon") => 에러발생(lastName자리에 undefined라고 꼭 명시해야됌)
  printName2("kyunghoon",undefined)
  // => 그렇기 때문에 옵셔널일 경우에는 위의 경우를 사용해야함

  //(2) Default parameter
  //=> 인자를 아무것도 전달하지 않았을 때 기본값으로 설정이 되어진다.
  function printMessage(message : string = "default message"){
    console.log(message);
  }
  printMessage(); // => default message

  //(3) Rest parameter
  //원하는 만큼의 숫자를 전달해서(인자 개수 제한 없음) 자동으로 더해주는 함수

  function addNumbers(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b)
  }
  console.log(addNumbers(1,2)); // 3
  console.log(addNumbers(1,2,3,4,5));//10
  console.log(addNumbers(1,2,3,4,5,6));//15

}