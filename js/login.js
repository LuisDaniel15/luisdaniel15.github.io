const IDBrequest = indexedDB.open("joyeria", 1);


IDBrequest.addEventListener("success", () => {
    console.log("Todo salio correctamente");
    // leer();
})

IDBrequest.addEventListener("error", () => {
    console.log("ha ocurrido un error");
})


let usuarios, clave, boton;
usuarios = document.getElementById("user");
clave = document.getElementById("password");
boton = document.getElementById("btn");


boton.addEventListener("click", () => { leer(); });

const leer = () => {
    const db = IDBrequest.result;
    const trans = db.transaction("registro", "readonly");
    const object = trans.objectStore("registro");
    const cursor = object.openCursor();

    cursor.addEventListener("success", () => {
        if (cursor.result) {
            // console.log(cursor.result);
            if (cursor.result.value.usuar == usuarios.value && cursor.result.value.passw == clave.value) {
                alert("Ingreso exitoso sera dirigido a nuestro sitio Web.");
                enlaceHtml();
                return false;
            } else cursor.result.continue();

        } else {
            alert("USUARIO INCORRECTO");
            clearInp();
            console.log("Todos los valores leidos");
        }
    })
}

const clearInp = () => {
    usuarios.value = "";
    clave.value = "";
    usuarios.focus();
}

const enlaceHtml = () => {
    let div = document.getElementById("enlace");
    let enl = document.createElement("a");
    let aviso = document.getElementById("aviso");

    enl.setAttribute("href", "../index.html");
    enl.classList.add("ingreso");

    enl.textContent = "Siguiente";
    aviso.textContent ="Ingreso exitoso presione en sigiente";

    div.appendChild(enl);
    div.appendChild(aviso);

    boton.style.display = "none";
}


// let aviso = document.getElementById("aviso");
// aviso.classList.replace("aviso", "error");
// aviso.textContent ="Usuario incorrecto";
