'use strict';

console.log('>> Ready :)');

const Input = document.querySelector(".js_input");
const inputText = Input.value;
const searchButton = document.querySelector(".js_searchBttn");
const results = document.querySelector(".js_results");
let favorites = [];
let seriesAnime = [];

const fetchSeries = (event) => {
    event.preventDefault();
    const inputText = Input.value;
    if (inputText != "") {
        const url = `https://api.jikan.moe/v4/anime?q=${inputText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                seriesAnime = data.data;
                let content = "";
                for (let serie of seriesAnime) {
                    content += `
                    <li class="js_serie" id=${serie.mal_id}>
                        <div> <img src="${serie.images.jpg.image_url}" alt="${serie.title}" /> </div>
                        <h2>${serie.title}</h2>
                    </li>`;
                }
                results.innerHTML = content;
                const seriesAnimeFav = document.querySelectorAll(".js_serie");
                for (const serieAnimeFav of seriesAnimeFav) {
                    serieAnimeFav.addEventListener("click", handleAddFavorite);
                }
            })

    } else if (inputText === "") {
        results.innerHTML = "";
    }






}

searchButton.addEventListener("click", fetchSeries);

function handleAddFavorite(event) {
    console.log("Ha hecho click en una serie favorita");
    console.log(event.currentTarget.id);
    const idSerieAnimeFav = event.currentTarget.id;

    const serieAnimeSelected = seriesAnime.find((serie) => {
        return serie.mal_id === idSerieAnimeFav;
    })
    console.log(serieAnimeSelected);
}































