'use strict';

console.log('>> Ready :)');

const inputText = Input.value;
const searchButton = document.querySelector(".js_searchBttn");
const results = document.querySelector(".js_results");

const fetchSeries = (event) => {
    event.preventDefault();
    const inputText = Input.value; 
    if (inputText != "") {
        const url = `https://api.jikan.moe/v4/anime?q=${inputText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const seriesAnime = data.data;
                let content = ""; 
                for (let serie of seriesAnime) {
                    content += `
                    <li>
                        <div> <img src="${serie.images.jpg.image_url}" alt="${serie.title}" /> </div>
                        <h2>${serie.title}</h2>
                    </li>`;
                }
                results.innerHTML = content; 
            })
            
    } else {
        alert("Aquí puedes introducir tu búsqueda.");
    }
}

searchButton.addEventListener("click", fetchSeries);
































