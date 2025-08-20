import{S as l,a as u,i as n}from"./assets/vendor-CsWjCmIl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();let f=new l(".gallery a",{captionsData:"alt",captionDelay:250});function d(e){const t=document.querySelector(".gallery");if(!t){console.error("Gallery container not found!");return}t.innerHTML="";const a=e.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}">
      </a>
      <div class="info">
        <p>Likes: ${s.likes}</p>
        <p>Views: ${s.views}</p>
        <p>Comments: ${s.comments}</p>
        <p>Downloads: ${s.downloads}</p>
      </div>
    </li>
  `).join("");t.innerHTML=a,f.refresh()}function m(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function y(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("visible")}const g="51834340-f9825b8542abb10365afbcb9e",h="https://pixabay.com/api/";async function b(e){try{return(await u.get(h,{params:{key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Pixabay API error:",t),t}}const c=document.querySelector(".form");c.addEventListener("submit",async e=>{e.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Enter a search term!"});return}m(),y();try{const a=await b(t);if(!a||a.length===0){n.show({message:"Sorry, there are no images matching your search query.<br>Please try again!",position:"topRight",timeout:4e3,close:!0,progressBar:!1,backgroundColor:"#f44336",messageColor:"#fff",layout:2,maxWidth:420,class:"custom-toast",icon:"fa fa-times-circle"});return}d(a)}catch(a){n.error({title:"Error",message:"Failed to fetch images. Try later!"}),console.error("API Error:",a)}finally{p()}});
//# sourceMappingURL=index.js.map
