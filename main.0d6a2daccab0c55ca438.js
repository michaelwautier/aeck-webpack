(()=>{var e={32:(e,t,a)=>{e.exports=a.p+"img/banal-01.webp"},799:(e,t,a)=>{e.exports=a.p+"img/bio.jpeg"},511:(e,t,a)=>{e.exports=a.p+"img/entre0.jpeg"},819:(e,t,a)=>{e.exports=a.p+"img/etoile0.jpeg"},97:(e,t,a)=>{e.exports=a.p+"img/human0.jpeg"},57:(e,t,a)=>{e.exports=a.p+"img/nature-01.webp"},455:(e,t,a)=>{e.exports=a.p+"img/preloader.jpg"},205:(e,t,a)=>{e.exports=a.p+"img/preloader2.jpg"},606:(e,t,a)=>{e.exports=a.p+"img/quotidien-01.webp"},605:(e,t,a)=>{e.exports=a.p+"img/slash0.png"},141:(e,t,a)=>{e.exports=a.p+"img/vavang-01.webp"},678:(e,t,a)=>{e.exports=a.p+"img/work.png"}},t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,a),n.exports}a.p="",(()=>{"use strict";const e=[{id:1,title:"Etoile Sud",category:"Photography",text:"<p>Les alentour de la ville de toulouse mis en image dans le cadre d’un workshop avec Olivier Culmann.</p>",image:"quotidien-01.webp",images:["etoile0.jpeg","vavang0.jpeg"]},{id:2,title:"Table à manger",category:"Photography",text:"",image:"nature-01.webp"},{id:3,title:"Banal Exotisme",category:"Photography",text:"<p>Le Quotidien est commun a tout les Hommes, il nous entour et définit nos mode de vie. C’est un cycle qui n’attend que l’exception pour s’arrêter.</p><p>J’ai voulu mettre en lumière des objets qui sont les outils qui forment nos réalité sans qu’on n’y prête attention.</p><p>Notre quotidiens contiennent des images qui fragmenté n’ont pas l’air cohérente.</p>",image:"banal-01.webp"},{id:4,title:"Entre deux eaux",category:"Photography",text:"",image:"entre0.jpeg"},{id:5,title:"Vavang'",category:"Photography",text:"<p>Mon île est remplie de richesse, chimère du rêve, muse de récit de voyage, utopie de tous et pourtant moi, j’ai l’impression d’y être enfermé, condamné à y faire le tour indéfiniment.</p><p>Tantôt sauvage et bienfaitrice, tantôt prison suffocante.</p><p>La Réunion, monde clos au milieu de l’océan indien, où le béton grignote la nature, et les traditions se confrontent à la course économique.</p><p>J’ai quitté mon caillou depuis peu et il me manque, il reste le point de nostalgie ultime que je fuis sans vraiment savoir pourquoi.</p>",image:"vavang-01.webp"},{id:6,title:"Humans",category:"Photography",text:"Une salade d’images sans lien, hors le faites qu’elles contiennent tous des personnes.",image:"human0.jpeg"},{id:7,title:"Reveria",category:"Mixed",text:"Création graphique autour du groupe musical Réveria, mélangeant Graphisme, motion design et Photographie.",image:"7.jpg"},{id:8,title:"Slash",category:"Graphic Design",text:"<p>L’ascenseur démarra tout seul après que la porte se soit fermée. Il descendait. Il n’arrêtait pas de descendre. Puis, il s’arrêta enfin. La porte s’ouvrit. Et David eut la stupeur de sa vie. Devant lui se déployait un complexe informatique. Une vingtaine de personnes se déplaçaient d’un poste à l’autre regardant au passage les écrans géants muraux situés au fond de la salle machinerie impressionnante.</p><p>Internet n’est pas le seul réseau. Il existe un autre réseau plus performant. Je ne t’apprendrais rien en te disant qu’Internet a été crée par l’armée Américaine dans un but militaire. Internet n’était que le prototype. Un autre réseau a été créé pour les</p>",image:"slash0.png"},{id:9,title:"Mixed Visual",category:"Graphic Design",text:"",image:""}];a(678),a(799),a(32),a(57),a(606),a(141),a(819),a(511),a(97),a(605),a(455),a(205);const t=()=>{document.body.classList.remove("purple-bg"),document.body.classList.add("white-bg"),document.body.style.color="black"};(()=>{const e=document.querySelector(".cube");setTimeout((()=>{e.classList.add("show-right")}),2e3),setTimeout((()=>{const e=document.getElementById("content");document.querySelector(".preload").classList.add("preload-finish"),e.classList.remove("fade")}),4e3)})();const i=document.querySelector("main"),n=document.getElementById("work-button"),s=document.getElementById("contact-button"),o=document.getElementById("collection-nav");n.addEventListener("click",(()=>{t(),n.classList.add("active"),s.classList.remove("active"),i.classList.add("fade"),setTimeout((()=>{i.innerHTML="<img src='./img/work.png' class='work-cover' />",i.classList.remove("fade"),o.classList.remove("fade")}),500)})),s.addEventListener("click",(()=>{t(),n.classList.remove("active"),s.classList.add("active"),o.classList.add("fade"),i.classList.add("fade"),setTimeout((()=>{i.innerHTML='\n  <div class="flex-item">\n    <div class="bio-box">\n      <div class="picture-bio">\n        <img src="./img/bio.jpeg" alt="julien" />\n        <p>Photography: Paul Baudon</p>\n      </div>\n      <div class="text-bio">\n        <p>\n          L’ascenseur démarra tout seul après que la porte se soit fermée. Il descendait. Il n’arrêtait pas de descendre. Puis, il s’arrêta enfin. La porte s’ouvrit. Et David eut la stupeur de sa vie. Devant lui se déployait un complexe informatique. Une vingtaine de personnes se déplaçaient d’un poste à l’autre regardant au passage les écrans géants muraux situés au fond de la salle machinerie impressionnante.\n        </p>\n        <p>\n          Internet n’est pas le seul réseau. Il existe un autre réseau plus performant. Je ne t’apprendrais rien en te disant qu’Internet a été crée par l’armée Américaine dans un but militaire. Internet n’était que le prototype. Un autre réseau a été créé pour les\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class="flex-item">\n    <div class="contact-box flex">\n      <div class="contact-text">\n        <p>julien@aeck.io</p>\n        <p>(+262)693 63 64 36</p>\n        <div class="socials flex">\n          <a href="#">Instagram</a>\n          <a href="#">Facebook</a>\n        </div>\n      </div>\n    </div>\n  </div>\n',i.classList.remove("fade")}),500)}));const r=document.getElementById("collections-list");e.forEach((e=>{const t=document.createElement("li");t.classList.add("list-item"),t.innerHTML=(e=>`<a id="collection-${e.id}" class="collection-link" href="#" data-collection="${e.id}">\n  /${e.title} * <span>${e.category}</span>\n</a>`)(e),r.appendChild(t)}));const l=[...document.querySelectorAll(".list-item")];l[0].classList.add("active"),l.forEach((a=>{a.addEventListener("click",(()=>{i.classList.add("fade"),r.querySelector(".active").classList.remove("active"),a.classList.add("active");const n=a.firstChild.dataset.collection,s=e[n-1];setTimeout((()=>{i.innerHTML=(e=>`\n    <div class="flex justify-content-between align-end full-width">\n      <div class="collection-text">${e.text}</div>\n      <img class="collection-cover" src="./img/${e.image}">\n    </div>\n  `)(s);const e=document.querySelector(".collection-text"),a=document.querySelector(".collection-cover");a.addEventListener("click",(t=>{e.classList.add("fade"),e.classList.add("move-to-left"),a.classList.add("active")})),"Graphic Design"===s.category?(document.body.classList.remove("white-bg"),document.body.classList.add("purple-bg"),document.body.style.color="white"):t(),i.classList.remove("fade")}),500)}))}))})()})();