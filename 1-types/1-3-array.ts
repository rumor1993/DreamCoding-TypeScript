{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
