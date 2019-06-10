window.cipher = {
  
  encode: (offset, string) => {
    string = string.toUpperCase();
    let mensajeCifrado = "";
    for (let i = 0; i < string.length; i++){      /*aca es el valor inicial entre 0 y 1, si no toma valor 0 */
      let caracter = string[i];
      /*if (caracter.match(/[a-z]/i)) { */
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let textoChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          mensajeCifrado += String.fromCharCode(textoChar);
        
      } else {
        mensajeCifrado += caracter;
    }
}
return mensajeCifrado;    

  },
  decode: (offset, string) => {
    string = string.toUpperCase();
    let mensajeDecifrado = "";
    for (let i = 0; i < string.length; i++){
      let caracter = string[i];
      /*if (caracter.match(/[a-z]/i)) {*/
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let textoChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
          mensajeDecifrado += String.fromCharCode(textoChar);
        
      } else {
        mensajeDecifrado += caracter;
    }
}
return mensajeDecifrado;    
  }
};



/*else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          textoChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          mensajeCifrado += String.fromCharCode(textoChar);
        } */