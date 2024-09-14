// Arreglo para almacenar los comentarios
const comentarios = [];

// Función para agregar un comentario
function agregarComentario(texto) {
    // Crear un nuevo comentario con una marca de tiempo
    const nuevoComentario = {
        texto: texto,
        fecha: new Date().toLocaleString()//Convertir fecha y hora actuales desde que se envió el mensaje en formato de cadena 
    };
    
    comentarios.push(nuevoComentario);// Agregar el comentario al arreglo
    
    mostrarComentarios();// Mostrar los comentarios actualizados
}

// Función para mostrar los comentarios en el formulario
function mostrarComentarios() {
    const contenedorComentarios = document.getElementById('comentarios');
    
    contenedorComentarios.innerHTML = ''; //Limpiamos los campos
    
    comentarios.forEach(comentario => {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.className = 'comentario';
        comentarioDiv.innerHTML = `<p><strong>Fecha:</strong> ${comentario.fecha}</p><p>${comentario.texto}</p>`;
        contenedorComentarios.appendChild(comentarioDiv);
    });
}

// Manejamos el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const textoComentario = document.getElementById('textoComentario').value;

    // Agregamos el comentario si no está vacío
    if (textoComentario.trim()) {
        agregarComentario(textoComentario);
        // Limpiamos el textarea después de publicarlo
        document.getElementById('textoComentario').value = '';
    }
});

