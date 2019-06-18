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
      document.getElementById("error1").classList.remove("hide");
      password=password + 1;
      document.getElementById("contrasena_lab").value="";  
      if(password>2){
        document.getElementById("error1").classList.add("hide");
        document.getElementById("error2").classList.remove("hide");
        document.getElementById("contrasena_lab").disabled = true;
        document.getElementById("ingreso").disabled = true;
      }}}}
 );

const msjCodificar = document.getElementById("btnCodificar");
msjCodificar.addEventListener("click", () => {
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").value = cipher.encode(offset,msj);
  document.getElementById("mensajeFinal").classList.remove("hide");
});  
const msjDecodificar = document.getElementById("btnDecodificar");
msjDecodificar.addEventListener("click",()=>{
  const msj = document.getElementById("mensaje_pet").value;
  const offset= document.getElementById("offset_pet").value;
  document.getElementById("mensajeCheck").value = cipher.decode(offset,msj);
  document.getElementById("mensajeFinal").classList.remove("hide");
});  

/*Para borrar todo*/
let borrar = document.getElementById("borrar");
borrar.addEventListener("click",()=>{
  document.getElementById("mensaje_pet").value="";
  document.getElementById("offset_pet").value="";
  document.getElementById("mensajeCheck").value="";
  document.getElementById("mensajeFinal").classList.add("hide");  
}); 
/*Para volver a pantalla inicial */
let volver = document.getElementById("volver");
volver.addEventListener("click",()=>{
  document.getElementById("pantalla1").classList.remove("hide");
  document.getElementById("pantalla2").classList.add("hide");
  document.getElementById("contrasena_lab").value="";
  document.getElementById("error").innerHTML="";
});