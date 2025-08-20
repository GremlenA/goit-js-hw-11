import{S as u,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();let f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function d(a){const t=document.querySelector(".gallery");if(!t){console.error("Gallery container not found!");return}t.innerHTML="";const r=a.map(o=>`
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
  `).join("");t.innerHTML=r,f.refresh()}function m(){const a=document.querySelector(".gallery");a&&(a.innerHTML="")}const y="51834340-f9825b8542abb10365afbcb9e",p="https://pixabay.com/api/";async function h(a){const t=`${p}?key=${y}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`,r=await fetch(t);if(!r.ok)throw new Error(`Pixabay API error: ${r.status}`);return await r.json()}const c=document.querySelector(".form"),l=document.querySelector(".loader");function g(){l.classList.add("visible")}function L(){l.classList.remove("visible")}c.addEventListener("submit",async a=>{a.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){i.error({title:"Error",message:"Enter a search term!"});return}m(),g();try{const r=await h(t);if(!r.hits||r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(r.hits)}catch(r){i.error({title:"Error",message:"Failed to fetch images. Try later!"}),console.error("API Error:",r)}finally{L()}});
//# sourceMappingURL=index.js.map
