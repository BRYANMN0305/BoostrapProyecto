const enviarform = () => {


    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let documento = document.getElementById("usuario");
    let telefono = document.getElementById("contraseña");
    let placa = document.getElementById("documento");
    let rol = document.getElementById("rol");

    if (
        nombre.value.trim() === "" ||
        apellido.value.trim() === "" ||
        usuario.value.trim() === "" ||
        contraseña.value.trim() === "" ||
        documento.value.trim() === "" ||
        rol.value.trim() === "" 
    ) {
        Swal.fire({
            icon: "error",
            title: "¡No se ha enviado el formulario!",
            text: "Por favor, llene todos los campos.",
        });
    }
};
