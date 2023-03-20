// 十进制转二进制
import ArrayStack from "./01-arrayStack";
function decimalismToBinary(n: number): string {
  const stack = new ArrayStack<number>();
  while (n !== 0) {
    let remainder = n % 2;
    n = Math.floor(n / 2);
    stack.push(remainder);
  }
  let binaryData = "";
  //   const len = stack.size();
  //   console.log(stack.size());
  //   for (let i = 0; i < len; i++) {
  //     binaryData = `${binaryData}${stack.pop()}`;
  //   }
  while (!stack.isEmpty()) {
    binaryData = `${binaryData}${stack.pop()}`;
  }
  console.log(binaryData);
  return binaryData;
}
decimalismToBinary(35);
