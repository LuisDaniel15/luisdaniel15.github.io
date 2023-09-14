
const IDBrequest = indexedDB.open("joyeria", 1);

IDBrequest.addEventListener("upgradeneeded", () => {

    const db = IDBrequest.result;
    db.createObjectStore("carro", {
        autoIncrement: true
    });

})

IDBrequest.addEventListener("success", () => {
    console.log("Todo salio correctamente");
})

IDBrequest.addEventListener("error", () => {
    console.log("ha ocurrido un error");
})


const agregar = objeto => {
    const db = IDBrequest.result;
    const trans = db.transaction("carro", "readwrite");
    const object = trans.objectStore("carro");
    object.add(objeto);
    trans.addEventListener("complete", () => {
        console.log("Agregado correctamente.")
    })
}

let boton1 = document.querySelector(".boton1");
let boton2 = document.querySelector(".boton2");
let boton3 = document.querySelector(".boton3");
let boton4 = document.querySelector(".boton4");
let boton5 = document.querySelector(".boton5");
let boton6 = document.querySelector(".boton6");
let boton7 = document.querySelector(".boton7");
let boton8 = document.querySelector(".boton8");
let boton9 = document.querySelector(".boton9");



for (let i = 1; i < 10; i++) {

    document.querySelector(`.boton${i}`).addEventListener("click", () => {
        document.querySelector(`.boton${i}`).style.background = "#3a9d1f";

        let inp = document.querySelector(`.valor${i}`).value;
        let url = document.querySelector(`.url${i}`).value;

        if (inp.length > 0) {
            agregar({ valor: inp, direc: url});
            console.log("Agregado correctamente a indexDb")

        } else alert("completa el campo")

    });
}
