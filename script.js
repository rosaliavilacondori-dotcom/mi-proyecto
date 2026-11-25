// 1. MOSTRAR LA DESCRIPCION DE LOS PERSONAJES
function mostrarPersonaje(personaje) {
    let descripcion = "";

    if (personaje === "papa") {
        descripcion = " Nicolás nació alrededor del siglo III IV en Patara (actual Turquía). Al quedar huérfano, repartió su fortuna entre los necesitados y se convirtió en obispo de Mira. Una de las historias más conocidas cuenta que entregó bolsas de oro en secreto para ayudar a tres jóvenes pobres a casarse, lo que inspiró la tradición de regalar a escondidas.";
    } else if (personaje === "reno") {
        descripcion = "El reno es el animal que acompaña a Papá Noel en los relatos navideños y ayuda a transportar los regalos.";
    } else if (personaje === "duende") {
        descripcion = "Los duendes son personajes fantásticos que, en los cuentos navideños, ayudan a preparar los regalos.";
    }

    document.getElementById("descripcion-personaje").textContent = descripcion;
}
function agregarRegalo() {
    let campo = document.getElementById("nuevo-regalo");
    let regalo = campo.value.trim();

    if (regalo === "") {
        alert("Por favor, escribe un regalo.");
        return;
    }

    let lista = document.getElementById("lista-regalos");
    let nuevoElemento = document.createElement("li");

    nuevoElemento.textContent = regalo;
    lista.appendChild(nuevoElemento);

    campo.value = "";
    campo.focus();
}
let total = 0;

function agregarAlCarrito(nombre, precio) {
    let lista = document.getElementById("lista-carrito");
    if (lista.children.length === 1 &&
        lista.children[0].textContent === "No hay productos agregados.") {
        lista.innerHTML = "";
    }

    let producto = document.createElement("li");
    producto.textContent = nombre + " - Bs. " + precio;
    lista.appendChild(producto);

    total = total + precio;
    document.getElementById("total").textContent = total;
}

function vaciarCarrito() {
    total = 0;

    document.getElementById("lista-carrito").innerHTML =
        "<li>No hay productos agregados.</li>";

    document.getElementById("total").textContent = total;
}
