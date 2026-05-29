

    const cartBtn = document.getElementById("cartBtn");
    const statusBadge = document.getElementById("statusBadge");
    const statusTxt = document.getElementById("statusTxt");

    let reserved = false;

    export function reserveProduct() {
    cartBtn.addEventListener("click", () => {

        reserved = !reserved;

        if (reserved) {

            cartBtn.textContent = "Eliminar del carrito";

            cartBtn.style.backgroundColor = "var(--color-cart-active)";
            cartBtn.style.borderColor = "var(--color-cart-active)";
            cartBtn.style.color = "white";

            statusBadge.textContent = "Apartado";

            statusBadge.style.backgroundColor = "var(--color-warning-bg)";
            statusBadge.style.color = "var(--color-warning)";
            statusBadge.style.border = "1px solid var(--color-warning-border)";

            statusTxt.textContent = "Apartado";
            statusTxt.style.color = "var(--color-warning)";

        } else {

            cartBtn.textContent = "Agregar al carrito";

            cartBtn.style.backgroundColor = "var(--color-primary)";
            cartBtn.style.borderColor = "var(--color-primary)";
            cartBtn.style.color = "white";

            statusBadge.textContent = "Disponible";

            statusBadge.style.backgroundColor = "var(--color-success-bg)";
            statusBadge.style.color = "var(--color-success)";
            statusBadge.style.border = "1px solid var(--color-primary-light)";


            statusTxt.textContent = "Disponible";
            statusTxt.style.color = "var(--color-success)";
        }

    });

}