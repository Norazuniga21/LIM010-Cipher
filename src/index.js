let password = 0;
 const ingreso = document.getElementById("ingreso");
 ingreso.addEventListener("click",()=>{
   if(password<=3){
    const contrasena = document.getElementById("contrasena_lab").value;
    if (contrasena == "LABORATORIA") {
      document.getElementById("pantalla1").classList.add("hide");
      document.getElementById("pantalla2").classList.remove("hide");
    }
    else{
      document.getElementById("error").innerHTML="Contraseña incorrecta, intente de nuevo";
      password=password + 1;
      if(password>2){
        document.getElementById("error").innerHTML="Numero de intentos excedidos, regrese en 6 horas";
        document.getElementById("contrasena_lab").disabled = true;
        document.getElementById("ingreso").disabled = true;
      }}}}
 );

/*variables generales*/
const msj = document.getElementById("mensaje_pet");
const offset= document.getElementById("offset_pet");

const msjCodificar = document.getElementById("btnCodificar");
btnCodificar.addEventListener("click", () => {
  const msjCod = msj.value;
  const off = offset.value;
  document.getElementById("mensajeCheck").innerHTML = window.cipher.encode(msj,offset);
});  

const msjDecodificar = document.getElementById("btnDecodificar");
btnDecodificar.addEventListener("click",()=>{
  let msj = document.getElementById("mensaje_pet").value;
  let offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").innerHTML = window.cipher.decode(msj,offset);
});  

/*let borrar = document.getElementById("borrar");
borrar.addEventListener("click",()=>{
  let mensaje_pet = 
  
  for(let i = 0; i < td.length; i++){
    borrar[i].innerHTML = ''
  }
});  */

