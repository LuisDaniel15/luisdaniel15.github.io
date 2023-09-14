
const IDBrequest = indexedDB.open("joyeria", 1);


IDBrequest.addEventListener("success", () => {
    console.log("Todo salio correctamente");
    leer();

})

IDBrequest.addEventListener("error", () => {
    console.log("ha ocurrido un error");
})

// const registro = (objet) => {
//     const bd = IDBrequest.result;
//     const trans = db.transaction("registro", "readwrite");
//     const object = trans.objectStore("registro");
//     object.add(objet);
//     trans.addEventListener("complete", () => {
//         console.log("Agregado correctamente.")
//     })
// }
const agregar = objeto => {
    const db = IDBrequest.result;
    const trans = db.transaction("registro", "readwrite");
    const object = trans.objectStore("registro");
    object.add(objeto);
    trans.addEventListener("complete", () => {
        alert("Registrado correctamente");
        console.log("Agregado correctamente.")
    })
}

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let btn = document.getElementById("boton");

btn.addEventListener("click", () => {
    let usuario = [inp1.value, inp2.value, inp3.value];
    // alert(usuario)
    if (inp1.value.length > 0 && inp2.value.length > 0 && inp3.value.length > 0) {
        agregar({ usuar: usuario[0], email: usuario[1], passw: usuario[2] });
        
    }else alert("Complete todos los campos");
})



const leer = () => {
    const db = IDBrequest.result;
    const trans = db.transaction("registro", "readonly");
    const object = trans.objectStore("registro");
    const cursor = object.openCursor();

    cursor.addEventListener("success", () => {
        if (cursor.result) {
            console.log(cursor.result.value.usuar)
            cursor.result.continue();

        } else console.log("Todos los valores leidos")
    })
}