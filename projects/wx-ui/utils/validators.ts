export function stringByte(value: string) {debugger
  if (typeof value !== "string") {
    return 0;
  }
  let length = value.length;
  const macth = value.match(/[^\x00-\xff]/ig);
  if (macth) {
    length += matchMedia.length;
  }
  const match1 = value.match(/x/gi);
  if (match1) {
    length += match1.length;
  }
  return length;
}
