import{u as i}from"./HTTP.request-89c4859f.js";let l=document.forms.registrationForm,{request:t}=i();l.onsubmit=r=>{r.preventDefault();let e={};new FormData(r.target).forEach((a,s)=>{e[s]=a}),e.firstname&&e.lastname&&e.email&&e.password?t("/users?email="+e.email,"get").then(a=>{a.length?alert("Это почта уже используется!"):t("/users","post",e).then(async s=>{s&&(await t("/karzina","post",{arr:[]}),await t("/likes","post",{arr:[]}),location.assign("/pages/login/"))})}):alert("Заполните все поля")};
