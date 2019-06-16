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
      document.getElementById("error").innerHTML=`Contraseña incorrecta, intente de nuevo <i class="fas fa-exclamation-circle"></i>` ;
      password=password + 1;
      document.getElementById("contrasena_lab").value="";  
      if(password>2){
        document.getElementById("error").innerHTML=`Numero de intentos excedidos, regrese en 6 horas <i class="fas fa-exclamation-circle"></i>`;
        document.getElementById("contrasena_lab").disabled = true;
        document.getElementById("ingreso").disabled = true;
      }}}}
 );

const msjCodificar = document.getElementById("btnCodificar");
msjCodificar.addEventListener("click", () => {
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").value = cipher.encode(offset,msj);
  document.getElementById("mensajeFinal").innerHTML=`Proceso terminado, ahora utiliza el codigo para verificar la movilidad enviada <i class="fas fa-paw"></i>`;
});  
const msjDecodificar = document.getElementById("btnDecodificar");
msjDecodificar.addEventListener("click",()=>{
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").value = cipher.decode(offset,msj);
  document.getElementById("mensajeFinal").innerHTML=`Proceso terminado, ahora utiliza el codigo para verificar la movilidad enviada <i class="fas fa-paw"></i>`;
});  

/*Para borrar todo*/
let borrar = document.getElementById("borrar");
borrar.addEventListener("click",()=>{
  document.getElementById("mensaje_pet").value="";
  document.getElementById("offset_pet").value="";
  document.getElementById("mensajeCheck").value="";
  document.getElementById("mensajeFinal").innerHTML="";
}); 
/*Para volver a pantalla inicial */
let volver = document.getElementById("volver");
volver.addEventListener("click",()=>{
  document.getElementById("pantalla1").classList.remove("hide");
  document.getElementById("pantalla2").classList.add("hide");
  document.getElementById("contrasena_lab").value="";
  document.getElementById("error").innerHTML="";
});