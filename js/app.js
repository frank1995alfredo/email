//variables 
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');


//funciones
inicioApp = function(){
    //deshabilitar el envio
    btnEnviar.disabled = true;
}

validarLongitud = function(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

validarCampo = function(){
    validarLongitud(this);
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
    }
}

enviarEmail = function(e){
    const spinnerGif = document.querySelector('#spinner');
    const enviado = document.createElement('img');
    spinnerGif.style.display = 'block';
    
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
             enviado.remove();
             formularioEnviar.reset();
        },5000);
    },3000);


    e.preventDefault();
}

//eventlistener
 eventlistener = function(){
    document.addEventListener('DOMContentLoaded',inicioApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo); 
    mensaje.addEventListener('blur', validarCampo);
    formularioEnviar.addEventListener('submit',enviarEmail);
}

eventlistener(); 




