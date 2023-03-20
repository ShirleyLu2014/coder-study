// 判断有效的括号
import ArrayStack from "./01-arrayStack";
function isValidBracket(st: string): boolean {
  const stack = new ArrayStack<string>();
  for (let i = 0; i < st.length; i++) {
    switch (st[i]) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (st[i] !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.isEmpty();
}
console.log(isValidBracket("{}[]()"));
console.log(isValidBracket("{}[](){"));
console.log(isValidBracket("{)[](){"));
console.log(isValidBracket("{))](){"));
