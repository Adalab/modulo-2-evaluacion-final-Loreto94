console.log(">> Ready :)");const o=document.querySelector(".js_input");o.value;const r=document.querySelector(".js_searchBttn"),u=document.querySelector(".js_results"),a=c=>{c.preventDefault();const n=o.value;if(n!=""){const i=`https://api.jikan.moe/v4/anime?q=${n}`;fetch(i).then(e=>e.json()).then(e=>{console.log(e);const l=e.data;let s="";for(let t of l)s+=`
                    <li>
                        <div> <img src="${t.images.jpg.image_url}" alt="${t.title}" /> </div>
                        <h2>${t.title}</h2>
                    </li>`;u.innerHTML=s})}else alert("Aquí puedes introducir tu búsqueda.")};r.addEventListener("click",a);
//# sourceMappingURL=main.js.map
