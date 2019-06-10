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


const msjCodificar = document.getElementById("btnCodificar");
msjCodificar.addEventListener("click", () => {
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").innerHTML = cipher.encode(offset,msj);
});  

const msjDecodificar = document.getElementById("btnDecodificar");
msjDecodificar.addEventListener("click",()=>{
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").innerHTML = cipher.decode(offset,msj);
});  

let borrar = document.getElementById("borrar");
borrar.addEventListener("click",()=>{
  document.getElementById("mensaje_pet").value="";
  document.getElementById("offset_pet").value="";
  document.getElementById("mensajeCheck").innerHTML="";
}); 