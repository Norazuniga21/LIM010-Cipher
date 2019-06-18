window.cipher = {

  encode: (offset, string) => {
    let mensajeCifrado = "";
    for (let i = 0; i < string.length; i++) {      /*aca es el valor inicial entre 0 y 1, si no toma valor 0 */
      let caracter = string[i];
      /*if (caracter.match(/[a-z]/i)) { */
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {  /*para letra en mayuscula*/
        let textoChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;  /*formula para cifrar*/
        mensajeCifrado += String.fromCharCode(textoChar);  /*obtener el valor de la letra cifrada*/
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {  /*para letra en mayuscula*/
        let textoChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
        mensajeCifrado += String.fromCharCode(textoChar);
      }
      else if (string.charCodeAt(i) >=48 && string.charCodeAt(i)<=57){
        let textoChar = (string.charCodeAt(i) - 48 + parseInt(offset)) % 10 + 48;
        mensajeCifrado += String.fromCharCode(textoChar);
      }

      else {
        mensajeCifrado += caracter;   /*formar la cadena cifrada*/
      }
    }
    return mensajeCifrado;
  },
  decode: (offset, string) => {
    let mensajeDecifrado = "";
    for (let i = 0; i < string.length; i++) {
      let caracter = string[i];
      /*if (caracter.match(/[a-z]/i)) {*/
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let textoChar = (string.charCodeAt(i) -13 - parseInt(offset)) % 26 + 65;
        mensajeDecifrado += String.fromCharCode(textoChar);
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        let textoChar = (string.charCodeAt(i) - 45 - parseInt(offset)) % 26 + 97;
        mensajeDecifrado += String.fromCharCode(textoChar);
      }
      else if (string.charCodeAt(i) >=48 && string.charCodeAt(i)<=57){
        let textoChar = (string.charCodeAt(i) - 8 - parseInt(offset)) % 10 + 48;
        mensajeDecifrado += String.fromCharCode(textoChar);
      }
      else {
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