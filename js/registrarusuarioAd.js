const enviarformruAd = () => {


    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let documento = document.getElementById("documento");
    let telefono = document.getElementById("telefono");
    let placa = document.getElementById("placa");
    let rol = document.getElementById("rol");
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contrasena");

    if (
        nombre.value.trim() === "" ||
        apellido.value.trim() === "" ||
        documento.value.trim() === "" ||
        telefono.value.trim() === "" ||
        placa.value.trim() === "" ||
        rol.value.trim() === "" ||
        usuario.value.trim() === "" ||
        contraseña.value.trim() === ""
    ) {
        Swal.fire({
            icon: "error",
            title: "¡No se ha enviado el formulario!",
            text: "Por favor, llene todos los campos.",
        });
    }
};
