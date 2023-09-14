
const IDBrequest = indexedDB.open("joyeria", 1);

IDBrequest.addEventListener("upgradeneeded", () => {

    const db = IDBrequest.result;
    db.createObjectStore("carro", {
        autoIncrement: true
    });

})

IDBrequest.addEventListener("success", () => {
    console.log("Todo salio correctamente");
    leer();
})

IDBrequest.addEventListener("error", () => {
    console.log("ha ocurrido un error");
})


const leer = () => {
    const db = IDBrequest.result;
    const trans = db.transaction("carro", "readonly");
    const object = trans.objectStore("carro");
    const cursor = object.openCursor();

    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let fun = html(cursor.result.key, cursor.result.value);

            let div = document.querySelector(".list");
            div.appendChild(fun);

            cursor.result.continue();
            // console.log(cursor.result.value);        
        } else {
            console.log("Todos los valores leidos");
        }
    })
}

const eliminar = (key) => {
    const db = IDBrequest.result;
    const tras = db.transaction("carro", "readwrite");
    const objet = tras.objectStore("carro");
    objet.delete(key);

    tras.addEventListener("complete", () => {
        console.log("Eliminado correctamente correctamente.")
    })
}


const html = (key, objeto) => {

    let form = document.createElement("form");
    let inp = document.createElement("input");
    let boton = document.createElement("button");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let container = document.createElement("div");
    div.appendChild(img);

    boton.textContent = "comprar";

    inp.setAttribute("value", objeto.valor + " Cop$");
    img.setAttribute("src", objeto.direc);

    // inp.setAttribute("disabled","true");

    boton.setAttribute("type", "button");

    form.appendChild(inp);
    form.appendChild(boton);
    form.appendChild(div);
    container.appendChild(form);

    boton.addEventListener("click", () => {
        eliminar(key);
        alert(`Desea hacer la compra con valor de ` + inp.value);
        form.innerHTML = "";
        console.log("COMPRA EXITOSA");
    })

    console.log(key);
    return container;
}

