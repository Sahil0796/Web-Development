
let button = document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click !"
});


button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click !");
});


document.addEventListener("keydown", (e)=>{
    console.log(e)
});

document.addEventListener("click", (e)=>{
    console.log(e.key, e.keycode);
});





