let texto = document.getElementById('texto');
let encriptar = document.getElementById('encriptar'); 
let desencriptar = document.getElementById('desencriptar'); 
let mensajeFinal = document.getElementById('mensajeFinal');
let muhenco = document.getElementById('muhenco');
let derechaInformacion = document.getElementById('derechaInformacion');
let copiar = document.getElementById('copiar');


// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

let reemplazar = [
    ['e', 'enter'],
    ['o', 'ober'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
]

function resetear (){
    mensajeFinal.innerHTML = '';
    muhenco.classList.remove('oculto');
    derechaInformacion.style.display = 'block';
    copiar.style.display = 'none';
    derecha.classList.remove('ajustar');
    mensajeFinal.classList.remove('ajustar');
    texto.focus();

}

// Traer el texto
//toLowerCase convierte el texto en minuscula
encriptar.addEventListener("click", () =>{
    let vieneTexto = texto.value.toLowerCase();
    function encriptar (nuevoTexto){
        for (let i = 0; i < reemplazar.length; i++){
            if (nuevoTexto.includes(reemplazar[i][0])){
                nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0], reemplazar[i][1])
            };
        };
        return nuevoTexto;
    }
    let textoEncriptado = encriptar(vieneTexto);
    mensajeFinal.innerHTML = textoEncriptado;
    muhenco.classList.add('oculto');
    derechaInformacion.style.display = 'none';
    copiar.style.display = 'block';
    derecha.classList.add('ajustar');
    mensajeFinal.classList.add('ajustar');
    texto.value = '';
   
})

desencriptar.addEventListener("click", () =>{
    let vieneTexto = texto.value.toLowerCase();
    function desencriptar (nuevoTexto){
        for (let i = 0; i < reemplazar.length; i++){
            if (nuevoTexto.includes(reemplazar[i][1])){
                nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1], reemplazar[i][0])
            };
        };
        return nuevoTexto;
    }
    let textoDesencriptado = desencriptar(vieneTexto);
    mensajeFinal.innerHTML = textoDesencriptado;
    muhenco.classList.add('oculto');
    derechaInformacion.style.display = 'none';
    copiar.style.display = 'block';
    derecha.classList.add('ajustar');
    mensajeFinal.classList.add('ajustar');
    texto.value = '';
   
})

copiar.addEventListener('click', () => {
    let textoCopiado = mensajeFinal;
    navigator.clipboard.writeText(textoCopiado.value);  // la funcion no sirve en celulares
  //  textoCopiado.Select();
   // document.execCommand('copy')
   Swal.fire("Texto Copiado...!");   
   //alert('Texto copiado');
    resetear();
    
})