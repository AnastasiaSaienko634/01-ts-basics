function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = getFirstElement<number>([1, 2, 3]); // 1
const strings = getFirstElement<string>(["a", "b", "c"]); // "a"
const booalen = getFirstElement<boolean>([true, false, true]); // true
