function searchFunction() {
    let input, filter, cards, cardContainer, title, content, i, j;
    input = document.getElementsByName("search")[0];
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("seccionDestino");
    cards = cardContainer.getElementsByClassName("cardTexto");
    let encontrado = false;

    // Guarda el orden original de las cartas si no se ha guardado aún
    if (!cardContainer.originalOrder) {
        cardContainer.originalOrder = [];
        for (i = 0; i < cards.length; i++) {
            cardContainer.originalOrder.push(cards[i]);
        }
    }

    if (filter === "") { // Si no hay término de búsqueda, restablece el estilo y el orden de las cartas
        for (i = 0; i < cards.length; i++) {
            cards[i].style.display = "";
            cards[i].style.border = "";
            cardContainer.appendChild(cardContainer.originalOrder[i]);
        }
    } else {
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector(".cardTexto h4");
            content = cards[i].querySelectorAll(".cardTexto h4, .cardTexto p");
            let found = false;
            for (j = 0; j < content.length; j++) {
                if (content[j].innerText.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
            if (found) {
                cards[i].style.display = "";
                cards[i].style.border = "2px solid red";
                cardContainer.insertBefore(cards[i], cardContainer.firstChild);
                encontrado = true;
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    if (!encontrado && filter !== "") {
        let noResults = document.createElement("p");
        noResults.innerText = "No se encontró ningún resultado para su búsqueda.";
        noResults.setAttribute("id", "resultado");
        // verificar si el mensaje ya está presente
        if (!cardContainer.querySelector("#resultado")) {
            cardContainer.appendChild(noResults);
        }
    } else {

        let noResults = cardContainer.querySelector("#resultado");
        if (noResults && cardContainer.contains(noResults)) {
            cardContainer.removeChild(noResults);

        }
        if (filter === "") { // Si no hay término de búsqueda, restablece el estilo y el orden de las cartas
            for (i = 0; i < cards.length; i++) {
                cards[i].style.display = "";
                cards[i].style.border = "";
                cardContainer.appendChild(cardContainer.originalOrder[i]);
            }
        }

    }
}
