/**
 * Extracts the function body of a JS function
 * @param fn The function of which you want to extract the body from
 */
export default function extractFunctionBody(fn: Function) {
  const fnString = fn.toString();
  return fnString.slice(fnString.indexOf("{") + 1, fnString.lastIndexOf("}"));
}
