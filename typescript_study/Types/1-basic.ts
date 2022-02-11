{
  // 1. number
  const num:number = 1;
  const num2:number = 0.1;
  const num3:number = -6;

  // 2. string
  const str :string = "hello";

  // 3. boolean
  const boal : boolean = false;

  //4. undefined(가능하면 쓰지않는 것이 좋음)
  //잘못된 예
  let name : undefined 

  //옵셔널 타입으로 선언(단독적으로 X)
  let age : number | undefined
  age = undefined;
  age = 1;

  function find():number|undefined{
    return undefined
  }

  //5. null(가능하면 쓰지않는 것이 좋음)
  //잘못된 예
  let preson : null;

  //옵셔널 타입 선언(거의 안씀)
  let person2 : string|null;

//6. unknown(가능하면 쓰지않는 것이 좋음 => 타입이 없는 자바스크립트와 연동해서 쓸 경우만 사용)
  let notSure : unknown = 0;
  notSure = "he";
  notSure = true;

//7. any(쓰지않는 것이 좋음)
  let anything : any =0;
  anything ="hello";

//8. void(함수에서 어떠한 것을 리턴하지 않을 때 사용)
  function print(): void{
    console.log("hello");
    return;
  }
  let unusable :void = undefined;//사용하며 안됌

  //9. never (함수에서 절대 리턴되지 않을 때 명시하기 위해 사용한다. 에러를 던지거나 계속 끝나지 않게 코드(while)를 작성해야함) 
  function throwError(message : string):never{
    // message -> server (log)
    throw new Error(message);
    // // while(true){

    // }
  }

  //10. Object
  let obj : object;// 안좋은 경우임, 가능하면 object의 타입을 명시해서 작성하는 것이 좋음
  function acceptSomeObject(obj:object){

  }
  acceptSomeObject({name : "hoon"})
}