
// Secondo Progetto:
// Creare un webapp che faccia cambiare colore al cubo al click del pulsante.

const bg_color = ["#F2BC1B", "#D9946C", "#735645", "#8C884F", "#731212", "#D93A2B", "#59D9C1", "#3498db"];
const btn_color = document.getElementById("changeColorBtn");
const cube = document.getElementById("myCube");
let count = 0;

btn_color.addEventListener("click", ()=>{
    // console.log(count)
    cube.style.backgroundColor = bg_color[count];
    if (count <= bg_color.length - 1) {
        count++;
    } else{
        count = 0;
   }
})