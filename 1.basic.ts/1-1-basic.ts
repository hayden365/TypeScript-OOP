{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  //boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // SHIT
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let persion: null; // SHIT
  let person2: string | null;

  // unknown SHIT
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any SHIT
  let anything: any = 0;
  anything = 'hello';

  // void
  // 아무런 값도 return하지 않으면 void타입이 됨.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // SHIT 활용성이 떨어짐.

  // never -> return 되지 않을때 사용
  // error를 던지던지, while로 계속 반복되는 로직일 경우 성립 됩니다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // object
  // 원시타입을 제외한 모든 object타입을 전달받을 수 있습니다.
  // 구체적이지 않기 때문에 SHIT
  let obj: object = [1, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
