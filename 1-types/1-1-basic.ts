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

  // unkown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print() {
    console.log("hello");
  }

  // never
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
}
