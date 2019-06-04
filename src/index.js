
const ingreso = document.getElementById("ingreso");
ingreso.addEventListener('click', () => {
    const contrasena = document.getElementById("contrasena_lab").value;
    if (contrasena=="LABORATORIA") {
    document.getElementById("pantalla1").classList.add('hide');
    document.getElementById("pantalla2").classList.remove('hide');
      } else {
        document.getElementById("error").innerHTML="Contraseña incorrecta, intente de nuevo";
        
      }
        
});         
