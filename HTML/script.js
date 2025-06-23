// const btn = document.getElementById ("btn")
// const formularioregistro = document.querySelector(".formularioregistro")

// btn.addEventListener("click",()=>{
//     formularioregistro.classList.toggle("toggle");
// });
const formularioregistro = document.querySelector(".formularioregistro")
const btnformularioregistro = document.getElementById("btn-formulario-registro")
const btnformulariosesion = document.getElementById("btn-formulario-sesion")

btnformularioregistro.addEventListener("click",()=>{
 formularioregistro.classList.remove("toggle");
});
btnformulariosesion.addEventListener("click",()=>{
 formularioregistro.classList.add("toggle");
});
