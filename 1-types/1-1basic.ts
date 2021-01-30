{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;
}
