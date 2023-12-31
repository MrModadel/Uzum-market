import { useHttp } from "../../modules/HTTP.request";
let form = document.forms.registrationForm;
let { request } = useHttp();
form.onsubmit = (e) => {
   e.preventDefault();
   let user = {};
   let fm = new FormData(e.target);
   fm.forEach((value, key) => {
      user[key] = value;
      if (!valid_test[key].test(value)){
         alert('Заполните поля правильно)!')
         return
      }
   });
   if (user.email.ma)
      if (user.firstname && user.lastname && user.email && user.password) {
         request('/users?email=' + user.email, "get")
            .then(res => {
               if (!res.length)
                  request('/users', 'post', user)
                     .then(async res => {
                        if (res) {
                           await request('/karzina', 'post', { arr: [] })
                           await request('/likes', 'post', { arr: [] })
                           location.assign("/pages/login/");
                        }
                     })
               else
                  alert('Это почта уже используется!')
            })
      } else {
         alert("Заполните все поля");
      }
};
let valid_test = {
   email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
   firstname: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/,
   password: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/,
   lastname: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/,
}