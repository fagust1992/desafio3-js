console.log("conetado")

const ele = document.querySelector("#ele1")
fondo="green"
function pintar(color=fondo){
    ele.style.backgroundColor = color
    }

        ele.addEventListener("click",function (){
            pintar("yellow");
        });