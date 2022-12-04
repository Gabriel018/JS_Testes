const user_name = document.getElementById("nome")
const btn = document.getElementById("enviar")


btn.addEventListener("click",function(){
const nome = user_name.value
alert(nome)
})