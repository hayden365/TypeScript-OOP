/**
 * Type Inference
 */
let text: string = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');
/** 별도의 type을 명시하지 않았지만 string임을 알 수 있다.
 */

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
