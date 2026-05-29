const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");
let count = 0;

export function countLikes(){
    likeBtn.addEventListener("click", () => {
        count++;
        likeCounter.textContent = count; // similar a innerText

        if(count >= 10){// tarea: cuando pase de 10 likes 

            topProduct.style.display = "block";

            topProduct.innerHTML = `
                <button id="infoBtn" type="button" class="btn btn-info flex-shrink-0">
                    ¡Producto destacado!
                </button>
            `;

            const infoBtn = document.getElementById("infoBtn");

            infoBtn.style.backgroundColor = "var(--color-info-bg)";
            infoBtn.style.color = "var(--color-info)";
            infoBtn.style.border = "1px solid var(--color-info-border)";
        }
    });
} // countLikes