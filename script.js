// Mostrar ocultar con animación suave
function mostrarQuienSoy() {
    const seccion = document.getElementById("quien-soy");
    seccion.classList.toggle("oculto");
}


let carrito = [];

function comprar(producto) {
    carrito.push(producto);
    alert("Producto agregado al carrito:\n" + producto);
    console.log("Carrito:", carrito);
}


window.addEventListener("beforeunload", function (e) {
    if (carrito.length > 0) {
        e.preventDefault();
        e.returnValue = "";
    }
});