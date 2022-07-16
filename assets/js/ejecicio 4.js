document.addEventListener("keydown",(e)=>{

const valor_teclado=(e.key.toLowerCase());

switch (valor_teclado) {
    case "a":
    var a=document.querySelector(".a")
    valora= a.style.display = "block";
   color= a.style.background = "red";
   var a=document.querySelector(".s").style.display="none"
   var a=document.querySelector(".d").style.display="none"
        break;

        case "s":
            var s=document.querySelector(".s")
            valors= s.style.display = "block";
            color= s.style.background = "green";
            var a=document.querySelector(".a").style.display="none"
            var a=document.querySelector(".d").style.display="none"
    
                break;
                case "d":
                    var d=document.querySelector(".d")
                    valord= d.style.display = "block";
                    color= d.style.background = "blue";
                    var a=document.querySelector(".a").style.display="none"
                    var a=document.querySelector(".s").style.display="none"
                        break;
    default:
        break;
}

});
var color
const todosLosDivs=document.querySelectorAll("#contenedor-div div") // array de div
if (color!=="") {
    todosLosDivs.forEach(element => {
        element.addEventListener("click",()=>{
       element.style.background=color
        })
       });
}

