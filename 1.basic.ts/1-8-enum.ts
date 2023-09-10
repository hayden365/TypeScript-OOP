{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'MONDAY' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  console.log(day);
  /**
   * TypeScript 에서 enum은 사용하지 않는것이 좋다.
   * 대부분의 case에서 Union으로 대체가 가능하다.
   */
}
