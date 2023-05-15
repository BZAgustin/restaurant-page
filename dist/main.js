(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("section"),n=document.createElement("h1"),d=document.createElement("p");t.classList.add("home"),n.innerHTML="FRESH LOCAL FLAVOR",d.innerHTML="EMBARK ON A GASTRONOMIC JOURNEY UNLIKE ANY OTHER.",t.appendChild(n),t.appendChild(d),e.appendChild(t)}const t=[{imgUrl:"./assets/menu/lobster-risotto.jpg",name:"Lobster Risotto",description:"Creamy risotto cooked with lobster stock, chunks of succulent lobster meat and finished with grated Parmesan cheese, lemon zest, and chopped chives.",price:40,side:"left"},{imgUrl:"./assets/menu/beef-wellington.jpg",name:"Beef Wellington",description:"Beef tenderloin seared and wrapped in puff pastry with a mixture of mushrooms, shallots, and herbs. Served with mashed potatoes and roasted carrots.",price:50,side:"right"},{imgUrl:"./assets/menu/truffle-pasta.jpg",name:"Truffle Pasta",description:"Fresh pasta, heavy cream, Parmesan cheese and truffle oil. The truffle oil gives the dish its distinctive earthy flavor.",price:35,side:"left"},{imgUrl:"./assets/menu/duck-breast.jpg",name:"Pan-seared Duck Breast",description:"Duck breast seared until crispy and finished in the oven, served with cherry sauce and garnished with fresh herbs.",price:45,side:"right"},{imgUrl:"./assets/menu/lamb-chops.jpg",name:"Grilled Lamb Chops",description:"Grilled lamb seasoned with salt, pepper, and fresh rosemary. Served with a side of roasted asparagus and potatoes.",price:50,side:"left"},{imgUrl:"./assets/menu/seared-scallops.jpg",name:"Seared Scallops",description:"Plump sea scallops served with a flavorful lemon-butter sauce and garnished with fresh herbs and a sprinkle of sea salt.",price:35,side:"right"}],n=(e,t,n,d,a)=>{const s=document.createElement("div");s.classList.add("menu-item"),s.classList.add(a);const c=document.createElement("img");c.src=e,c.alt=t;const i=document.createElement("div");i.classList.add("item-desc");const o=document.createElement("h1");o.classList.add("desc-title"),o.innerHTML=t;const l=document.createElement("span");l.classList.add("desc-ingredients"),l.innerHTML=n;const r=document.createElement("div");r.classList.add("underline");const m=document.createElement("h2");return m.classList.add("price"),m.innerHTML=`$${d}`,i.appendChild(o),i.appendChild(l),i.appendChild(r),s.appendChild(c),s.appendChild(i),s.appendChild(m),s},d=e=>{const t=document.getElementById(e);let n=!1;return{element:t,on:()=>{n||(t.style.color="var(--accent)",t.style.backgroundColor="rgba(224, 217, 217, 0.1)",t.style.filter="drop-shadow(2px 2px 5px black)",n=!0)},off:()=>{t.style.color="",t.style.backgroundColor="",t.style.filter="",n=!1}}},a=d("home"),s=d("menu"),c=d("about");function i(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}s.element.addEventListener("click",(()=>{s.on(),a.off(),c.off(),i(),function(){const e=document.getElementById("content"),d=document.createElement("section");d.classList.add("menu-container");for(const e of t)d.appendChild(n(e.imgUrl,e.name,e.description,e.price,e.side));e.appendChild(d)}()})),a.element.addEventListener("click",(()=>{a.on(),s.off(),c.off(),i(),e()})),c.element.addEventListener("click",(()=>{c.on(),a.off(),s.off(),i(),function(){const e=document.getElementById("content"),t=document.createElement("section");t.classList.add("about");const n=document.createElement("div");n.classList.add("about-header");const d=document.createElement("h1");d.innerHTML="ABOUT US";const a=document.createElement("p");a.innerHTML="We're passionate about bringing people together over great food.<br> Our menu is inspired by classic American cuisine with a modern twist.",n.appendChild(d),n.appendChild(a);const s=document.createElement("div");s.classList.add("about-body");const c=document.createElement("div");c.classList.add("underline");const i=document.createElement("div");i.classList.add("underline");const o=document.createElement("div");o.classList.add("b-left");const l=document.createElement("ul"),r=document.createElement("b"),m=document.createTextNode("Address:");r.appendChild(m);const p=document.createElement("b"),u=document.createTextNode("Phone:");p.appendChild(u);const h=document.createElement("li");h.appendChild(r),h.appendChild(document.createTextNode(" 456 Oak Street, New York, NY 10001"));const f=document.createElement("li");f.appendChild(p),f.appendChild(document.createTextNode(" (212) 555-1234"));const C=document.createElement("div");C.classList.add("b-right");const E=document.createElement("ul"),b=document.createElement("b"),g=document.createTextNode("Email:");b.appendChild(g);const L=document.createElement("b"),v=document.createTextNode("Website:");L.appendChild(v);const T=document.createElement("li");T.appendChild(b),T.appendChild(document.createTextNode(" info@therustictable.com"));const y=document.createElement("li");y.appendChild(L),y.appendChild(document.createTextNode(" www.therustictable.com")),l.appendChild(h),l.appendChild(f),E.appendChild(T),E.appendChild(y),o.appendChild(l),C.appendChild(E),s.appendChild(c),s.appendChild(o),s.appendChild(C),s.appendChild(i);const w=document.createElement("div");w.classList.add("about-bottom");const N=document.createElement("div");N.classList.add("button");const k=document.createElement("h3");k.innerHTML="CONTACT US",N.appendChild(k),w.appendChild(N),t.appendChild(n),t.appendChild(s),t.appendChild(w),e.appendChild(t)}()})),a.on(),e()})();