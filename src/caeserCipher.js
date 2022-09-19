function cipher(text, shift) {
  let cipheredText = "";
  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);
    if (c <= 122 && c >= 97) {
      c += shift;
      c = c > 122 ? c - 26 : c;
    } else if (c >= 65 && c <= 90) {
      c += shift;
      c = c > 90 ? c - 26 : c;
    }
    const cipheredChar = String.fromCharCode(c);
    cipheredText += cipheredChar;
  }
  return cipheredText;
}

export default cipher;
