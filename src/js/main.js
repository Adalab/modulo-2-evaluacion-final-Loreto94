'use strict';

console.log('>> Ready :)');

/*1. Pintar la lista de series con la información del servidor:
     - Seleccionar la lista vacía de mi html.
     - Petición al servidor (fetch):
       > Guardar las series que me envía el servidor.
       > Por cada elemento de mi lista de series, la pinto en mi html. */

//Seleccionar lista vacía de mi html
const List = document.querySelector(".js_list");
const searchButton = document.querySelector(".js_searchButton");
const Input = document.querySelector(".js_input");


//Petición al servidor
fetch("https://api.jikan.moe/v4/anime?q=naruto")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    //Guardar las series
        const series = data.data;
        console.log(series[0]);
    //Pintar las series

    function renderCardSeries(series) {
        for (serie of series){
            let content = ""
            content += `
                <li>
                    <div class="serie-card">
                        <img src="${serie.images.jpg.image_url}" alt="${serie.title}">
                    </div>
                    <h2>${serie.title}</h2>
                </li>`;
            
            List.innerHTML += content;
        }
        renderCardSeries(series);

    }

    })
        
    
        
    






//2. Filtrar series con el buscador
//3. Anadir series como favoritas y guardar en el Local Storage