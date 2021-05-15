
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    telefono: /^\d{7,14}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    direccion: false,
    poblacion: false,
    telefono: false
}
const validarFormulario = (e) =>{
    switch (e.target.name){
        case "Nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').style.color="black";
                campos['nombre'] = true;
            }else{
                document.getElementById('nombre').style.color="red";
                campos['nombre'] = false;
            }
        
        break;
        case "Apellidos":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('Apellidos').style.color="black";
                campos['apellidos'] = true;
            }else{
                document.getElementById('Apellidos').style.color="red";
                campos['napellidos'] = false;
            }
        
        break;
        case "Direccion":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('Direccion').style.color="black";
                campos['direccion'] = true;
            }else{
                document.getElementById('Direccion').style.color="red";
                campos['direccion'] = false;
            }
        
        break;
        case "Poblacion":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('Poblacion').style.color="black";
                campos['poblacion'] = true;
            }else{
                document.getElementById('Poblacion').style.color="red";
                campos['npoblacion'] = false;
            }
        
        break;
        case "Telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('telefono').style.color="black";
                campos['telefono'] = true;
            }else{
                document.getElementById('telefono').style.color="red";
                campos['telefono'] = false;
            }
        
        break;
    }
}

inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

/*formulario.addEventListener('submit', (e) =>{
    e.preventDefault();*/

    if(campos.nombre && campos.apellidos && campos.direccion && campos.poblacion && campos.telefono){
       formulario.reset();
       alert("Formulario enviado");
    }else {alert("Datos no validos");}
});
