/*Publicidad */


function mostrarPublicidad(){
//modal= document.getElementById("modalPublicidad");
// Obtener una referencia al botón
const miBoton = document.getElementById('miBoton');
// Simular un clic en el botón
miBoton.click();

}
function publicidad(){
    console.log("cargando publicidad");
    setTimeout(mostrarPublicidad,5000);
}
publicidad();


