{
  //굉장히 많이 쓰이고 중요함
  //Union Types : OR
  // 가능한 모든 케이스 중 하나를 담을 수 있는 타입을 만들 때 사용한다.

  type Direction = "left"|"right"| "up"|"down";

  function move(direction : Direction){
    console.log(direction);
  }

  move("left");
  move("right");
  move("up");
  move("down");

  type TileSize = 8| 16| 32;
  const tile : TileSize = 16;

  //로그인 함수를 호출하는 경우(간단예시)
  type SuccessState ={
    response :{
      body : string;// 임의 지정 한거임
    }
  }

  type FailState = {
    reason : string;
  }

  type LoginState = SuccessState | FailState;

  function login1():LoginState{
    return{
      response : {
        body : "logged in!"
      }
    }
  }

  // id, password 를 받아오는 것과 Promise로 로그인을 관리해주는 것은 따로 프로젝트를 하면서 작성해보자.
  // Quiz

  function printLoginState1(state : LoginState){
    if("response" in state){
      console.log(`${state.response.body}`)
    }else{
      console.log(`${state.reason}`)
    }
  }

}