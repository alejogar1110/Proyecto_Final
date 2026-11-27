const formulario = document.getElementById("form-pedido");

// CARGAR DATOS GUARDADOS
window.addEventListener("DOMContentLoaded", () => {

    const datos = JSON.parse(
        localStorage.getItem("datosUsuario")
    );

    if (datos) {
        document.getElementById("nombre").value = datos.nombre;
        document.getElementById("telefono").value = datos.telefono;
        document.getElementById("correo").value = datos.correo;
        document.getElementById("direccion").value = datos.direccion;
    }
});

// GUARDAR DATOS
formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value
    };

    localStorage.setItem("datosUsuario", JSON.stringify(datos));

    console.log("Datos guardados correctamente");
    alert("Se ha enviado la solicitud");
});