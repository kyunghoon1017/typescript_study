// union과 반대되는 개념 -> 모든것을 다 합친 성격 : &
{
  type Student = {
    name : string;
    score : number;
  }

  type Worker = {
    empolyeeId : number;
    work : () => void;
  }

  function internWork(person: Student & Worker){
    console.log(person.name,person.empolyeeId,person.work());
  }

  internWork({
    name : "kyunghoon",
    score : 1,
    empolyeeId : 200,
    work:() => {},
  })
}