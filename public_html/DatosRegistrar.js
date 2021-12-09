
//Función que guarda los datos desde un cuadro de texto de formulario
function GuardarDatos(){
    const Correo=document.getElementById("correo").values;
    const Nombre=document.getElementById("Nombre").value;
    const pass=document.getElementById("pass").value;
    const passConfirmar=document.getElementById("passConfirmar").value;
    if (pass===passConfirmar) {
         console.log(Correo);
    console.log(Nombre);
    console.log(pass);
    console.log(passConfirmar);
    alert("¡Datos guardados exitosamente!");
    }else{
        alert("Las contraseñas no considen, rectifique."); 
    }
 
}
