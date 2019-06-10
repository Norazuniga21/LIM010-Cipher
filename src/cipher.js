window.cipher = {
  encode: (offset, string) => {
    let mensajeCifrado = "";
    for (let i = 0;i = i< string.length;i++){
      let caracter = string[i];
      if (caracter.matchmatch(/[a-z]/i)) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let textoChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          mensajeCifrado += String.fromCharCode(textoChar);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          textoChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          mensajeCifrado += String.fromCharCode(textoChar);
        }  
      } else {
        mensajeCifrado += caracter;
    }
}
return mensajeCifrado;    

  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};

