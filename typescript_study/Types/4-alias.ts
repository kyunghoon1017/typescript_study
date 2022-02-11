{
  //새로운 타입을 정의할 수 있다.

  // Primitive
  type Text = string;
  const name : Text = "kyunghoon";
  const address : Text = "seoul"

  type Num = number;

  // Object
  type Lunch ={
    name : string;
    kinds : number;
  };
  
  const lunch : Lunch ={
    name : "백반",
    kinds : 5,
  };

  //String Literal Types

  type Name = 'name'

  let myName : Name;
  myName ="name";

  type JSON = "json";
  const json :JSON = "json"

}