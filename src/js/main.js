'use strict';

console.log('>> Ready :)');

const Input = document.querySelector(".js_input");
//const inputText = Input.value;
const searchButton = document.querySelector(".js_searchBttn");
const results = document.querySelector(".js_results");

const fetchSeries = (event) => {
    event.preventDefault();
    const url = "https://api.jikan.moe/v4/anime?q=naruto";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const seriesAnime = data.data;
            if (inputText != "") {
                for (serie of seriesAnime) {
                    const inputText = Input.value;
                    let content = "";
                    content = `
                    <li>
                        <div> <img src="${serie.images.jpg.image_url}" alt="${serie.title}" </div>
                        <h2>${serie.title}</h2>
                    </li>`
                    
                }
                results += content;
            } else {
                alert ("Aquí puedes introducir tu búsqueda.");
            }
            
        })
searchButton.addEventListener("click", fetchSeries);
console.log("Ha hecho click");

}

     