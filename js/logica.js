class Cometarios{
    constructor(nombre,mail,comentario){
        this.nombre=nombre;
        this.mail=mail;
        this.comentario=comentario;
    }
}


let nombre;
let mail;
let comentario;
let arrayComentarios = [];

const carga = () => {
  mail = document.getElementById("mailComentario").value;
  nombre = document.getElementById("nombreComentario").value;
  comentario = document.getElementById("textComentario").value;
  if(nombre != "" && mail !=""  && comentario !="" ){
    if(pruebaemail(mail)){
        agregarDatos= new Cometarios(nombre,mail,comentario);
        arrayComentarios.push(agregarDatos);
        document.getElementById("comentarioDatos").innerHTML=``;
    
        for (let index = 0; index < arrayComentarios.length; index++) {
            console.log();
            document.getElementById("comentarioDatos").innerHTML+=`<hr> <li> 
            <div>
            <div class="text-capitalize fw-bold fs-5" >${arrayComentarios[index].nombre}</div>
            <div class="textMail" >de: ${arrayComentarios[index].mail}</div>
            <div class="comentarioText">${arrayComentarios[index].comentario}</div> </li>`
        }
    }
    
  }
  
document.getElementById("mailComentario").value="";
document.getElementById("nombreComentario").value="";
document.getElementById("textComentario").value="";
};

function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
        return false;
	}
	else alert('email valido');  
    return true;
	}




const button = document.getElementById("buton");
button.addEventListener("click", carga);




