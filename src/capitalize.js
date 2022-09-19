export default function capitalize(str) {
  if (!str) {
    return "";
  }
  let newStr = "";
  newStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    newStr += str[i].toLowerCase();
  }
  return newStr;
}
