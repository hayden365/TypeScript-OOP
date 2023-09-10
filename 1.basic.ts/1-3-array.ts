{
  // Array
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class 로 대체 하는 것을 추천
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // Tuple을 사용하는것을 권장하지 않음
  // 배열의 형태로 접근하는 것이 가독성이 매우 떨어지기 때문
  const [name, age] = student;
  // 구조분해한다면 조금 더 명시적이긴 하지만 부족.
}
