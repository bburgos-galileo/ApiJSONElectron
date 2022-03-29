let tipo = document.getElementById('cmbTypeImage');
let filtro = document.getElementById('cmbTypeCat');
let imagen = document.getElementById('imgResult');
let respuesta = document.getElementById('txtRespuesta');

let boton = document.getElementById('btnBuscar');

boton.addEventListener('click', clickBoton);

function clickBoton() {
    let iTipo = tipo.value;
    let iFiltro = filtro.value;
    if (iTipo == '' && iFiltro == '') {
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(dato => {
                console.log(dato);
                imagen.setAttribute('src', `https://cataas.com/${dato.url}`);
                respuesta.value = "id: " + dato.id + "\nurl: " + dato.url + "\ncreado el: " + dato.created_at;
            });
    } else if (iTipo != '' && iFiltro == '') {
        fetch(`https://cataas.com/cat?type=${iTipo}&json=true`)
            .then(response => response.json())
            .then(dato => {
                imagen.setAttribute('src', `https://cataas.com/${dato.url}`);
                respuesta.value = "id: " + dato.id + "\nurl: " + dato.url + "\ncreado el: " + dato.created_at;
            });
    } else if (iTipo == '' && iFiltro != '') {
        fetch(`https://cataas.com/cat?type=${iFiltro}&json=true`)
            .then(response => response.json())
            .then(dato => {
                imagen.setAttribute('src', `https://cataas.com/${dato.url}`);
                respuesta.value = "id: " + dato.id + "\nurl: " + dato.url + "\ncreado el: " + dato.created_at;
            });
    }
}
