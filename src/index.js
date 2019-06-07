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
     


