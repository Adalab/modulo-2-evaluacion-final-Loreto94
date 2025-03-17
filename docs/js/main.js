console.log(">> Ready :)");const l=document.querySelector(".js_input");l.value;const u=document.querySelector(".js_searchBttn"),c=document.querySelector(".js_results");let o=[];const d=i=>{i.preventDefault();const n=l.value;if(n!=""){const s=`https://api.jikan.moe/v4/anime?q=${n}`;fetch(s).then(e=>e.json()).then(e=>{console.log(e),o=e.data;let r="";for(let t of o)r+=`
                    <li class="js_serie" id=${t.mal_id}>
                        <div> <img src="${t.images.jpg.image_url}" alt="${t.title}" /> </div>
                        <h2>${t.title}</h2>
                    </li>`;c.innerHTML=r;const a=document.querySelectorAll(".js_serie");for(const t of a)t.addEventListener("click",m)})}else n===""&&(c.innerHTML="")};u.addEventListener("click",d);function m(i){console.log("Ha hecho click en una serie favorita"),console.log(i.currentTarget.id);const n=i.currentTarget.id,s=o.find(e=>e.mal_id===n);console.log(s)}
//# sourceMappingURL=main.js.map
