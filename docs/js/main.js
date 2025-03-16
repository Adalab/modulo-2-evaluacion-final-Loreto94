console.log(">> Ready :)");Input.value;const c=document.querySelector(".js_searchBttn"),r=document.querySelector(".js_results"),u=i=>{i.preventDefault();const n=Input.value;if(n!=""){const l=`https://api.jikan.moe/v4/anime?q=${n}`;fetch(l).then(e=>e.json()).then(e=>{console.log(e);const o=e.data;let s="";for(let t of o)s+=`
                    <li>
                        <div> <img src="${t.images.jpg.image_url}" alt="${t.title}" /> </div>
                        <h2>${t.title}</h2>
                    </li>`;r.innerHTML=s})}else alert("Aquí puedes introducir tu búsqueda.")};c.addEventListener("click",u);
//# sourceMappingURL=main.js.map
