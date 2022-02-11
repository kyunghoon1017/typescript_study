// 타입이 100% 정확하다 생각할 때만 쓰자...

{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 하면안됌

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 하면안됌

  const button = document.querySelector('class')!;
}
