import{S as u,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(n){const t=document.querySelector(".gallery");if(!t){console.error("Gallery container not found!");return}t.innerHTML="";const r=n.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}">
      </a>
      <div class="info">
        <p>Likes: ${o.likes}</p>
        <p>Views: ${o.views}</p>
        <p>Comments: ${o.comments}</p>
        <p>Downloads: ${o.downloads}</p>
      </div>
    </li>
  `).join("");t.innerHTML=r,d.refresh()}function y(){const n=document.querySelector(".gallery");n&&(n.innerHTML="")}const m="51834340-f9825b8542abb10365afbcb9e",p="https://pixabay.com/api/";async function g(n){const t=`${p}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,r=await fetch(t);if(!r.ok)throw new Error(`Pixabay API error: ${r.status}`);return await r.json()}const c=document.querySelector(".form"),s=document.createElement("p");s.classList.add("loader");s.textContent="Loading images, please wait...";s.style.display="none";c.insertAdjacentElement("afterend",s);c.addEventListener("submit",async n=>{n.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){l.error({title:"Error",message:"Enter a search term!"});return}y(),s.style.display="block";try{const r=await g(t);if(!r.hits||r.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}f(r.hits)}catch(r){l.error({title:"Error",message:"Failed to fetch images. Try later!"}),console.error("API Error:",r)}finally{s.style.display="none"}});
//# sourceMappingURL=index.js.map
