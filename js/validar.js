

function validar() {
    var nombre, email, telefono, nota;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    nota = document.getElementById("nota").value;

    if (nombre === "" || email === "" || telefono === "" || nota === "") {
        alert("Todos los campos son abligatorios por favor digitelos.");
        return false;
    }
    else if (nombre.length > 80) {
        alert("El nombre es muy largo")
        return false;
    }
    else if (telefono.length > 10) {
        alert("El telefono solo debe tener 10 digitos")
        return false;
    }
    else {
        alert("SE ENVIARON LOS DATOS.")
    }
};

