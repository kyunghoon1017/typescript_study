{
  type SuccessState ={
    result : "success";
    response :{
      body : string;// 임의 지정 한거임
    }
  }

  type FailState = {
    result :"fail";
    reason : string;
  }

  type LoginState = SuccessState | FailState;

  function login():LoginState{
    return{
      result : "success",
      response : {
        body : "logged in!"
      }
    }
  }

  function printLoginState(state : LoginState){
    if(state.result === "success"){
      console.log(`${state.response.body}`)
    }else{
      console.log(`${state.reason}`)
    }
  }
  
  // => 조금 더 직관적으로 코드를 작성할 수 있다. 
  // => 핵심 : 공통의 프로퍼티를 가지고 있으면서 구분하기 쉽게 만들어준다.
}