console.log(">> Ready :)");const d=document.querySelector(".js_input");d.value;const m=document.querySelector(".js_searchBttn"),r=document.querySelector(".js_results");let c=[],l=[],a=document.querySelector(".js_favorites");const v=o=>{o.preventDefault();const t=d.value;if(t!=""){const s=`https://api.jikan.moe/v4/anime?q=${t}`;fetch(s).then(i=>i.json()).then(i=>{console.log(i),l=i.data;let e="";for(let n of l)e+=`
                    <li class="js_serie" id=${n.mal_id}>
                        <div> <img src="${n.images.jpg.image_url}" alt="${n.title}" /> </div>
                        <h2>${n.title}</h2>
                    </li>`;r.innerHTML=e;const u=document.querySelectorAll(".js_serie");for(const n of u)n.addEventListener("click",g)})}else t===""&&(r.innerHTML="")};m.addEventListener("click",v);function g(o){console.log("Ha hecho click en una serie favorita"),console.log(o.currentTarget.id);const t=o.currentTarget.id;console.log(l);const s=l.find(e=>(console.log(e.mal_id),console.log(e),console.log(t),e.mal_id===parseInt(t)));console.log(s),c.push(s);function i(){a.innerHTML="";for(serie of c){let e=`
                    <li class="js_serie" id=${serie.mal_id}>
                        <div> <img src="${serie.images.jpg.image_url}" alt="${serie.title}" /> </div>
                        <h2>${serie.title}</h2>
                    </li>`;a.innerHTML+=e}}serieAnimeFav.addEventListener("clik",i)}
//# sourceMappingURL=main.js.map
