import{u as c}from"./HTTP.request-89c4859f.js";import{h as d,r as l,s as u,c as a,a as p,f as g}from"./ui-960fc6a0.js";let{request:s}=c();d();async function _(e){let i=await s("/likes/"+e.id,"get"),n=await s("/karzina/"+e.id,"get");localStorage.setItem("like_data",JSON.stringify(i.arr)),localStorage.setItem("korzina_data",JSON.stringify(n.arr)),location.reload()}let m=JSON.parse(localStorage.getItem("user")),r=JSON.parse(localStorage.getItem("usuingINfo"))||!1;r||(_(m),r=!0,localStorage.setItem("usuingINfo",JSON.stringify(r)));let S=document.querySelector(".swiper-wrapper"),o=document.querySelector(".popular-section__wrapper"),f=document.querySelector(".popular-section"),k=JSON.parse(localStorage.getItem("korzina_data"))||[],I=JSON.parse(localStorage.getItem("like_data"))||[];l(I,".saveds__count");l(k,".shop__counter");let t;s("/goods","get").then(e=>t=e).then(()=>{u(t),a(t.slice(0,15),!0,o),p(t.slice(20,30),S);let e=document.createElement("button");e.classList.add("btn-reload"),e.innerHTML="Показать все",f.append(e),e.dataset.st=!0,e.onclick=()=>{e.dataset.st!=="false"?(a(t,!0,o),e.dataset.st=!1,e.innerHTML="Скрыть"):(a(t.slice(0,15),!0,o),e.dataset.st=!0,e.innerHTML="Показать все")},g()});
