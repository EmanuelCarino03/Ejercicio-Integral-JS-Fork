const commentIpt = document.getElementById("commentIpt");
const postComment = document.getElementById("postComment");
const commentSection = document.getElementById("commentSection");
const commentsMessage = document.getElementById("commentsMessage");

export function addComments() {

    postComment.addEventListener("click", (event) => {

        event.preventDefault();

        const commentText = commentIpt.value;

        // Evita comentarios vacíos
        if(commentText.trim() === ""){
            return;
        }

        // Oculta mensaje vacío
        commentsMessage.style.display = "none";

        // Crear comentario
        const newComment = document.createElement("div");

        newComment.classList.add(
            "border",
            "rounded",
            "p-3",
            "mb-3",
            "bg-white"
        );

        newComment.innerHTML = `
            <p class="fw-bold mb-1">Usuario</p>
            <p class="mb-0">${commentText}</p>
        `;

        // Insertar comentario
        commentSection.prepend(newComment);

        // Limpiar input
        commentIpt.value = "";

    });

}