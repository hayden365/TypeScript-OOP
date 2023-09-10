{
  /**
   * Type Assertions SHIT
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  /**
   * 100% 장담할때 사용하는데 undefined가 나오게 됨
   */

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  /**
   * 위의 경우 앱이 종료되는 에러
   * type assertion 은 권장하지 않습니다.
   */
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2);
  /** undefined가 되지 않는다고 장담하는 것임 */
}
