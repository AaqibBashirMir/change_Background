

let colors = [
    "red", "blue", "green", "yellow", "purple",
    "orange", "pink", "cyan", "magenta", "brown",
    "teal", "lavender", "lime", "indigo", "maroon",
    "turquoise", "olive", "salmon", "navy", "gold",
    "sienna", "aqua", "violet", "fuchsia", "tan",
    "beige", "orchid", "coral", "peru", "slategray",
    "dodgerblue", "tomato", "darkorange", "seagreen", "royalblue",
    "slateblue", "darkslategray", "mediumspringgreen", "crimson", "chocolate"
  ];
 
//   console.log(colors[10]);
let index=0;
let btn=document.getElementById("btn")
btn.addEventListener("click",changeColor);
function changeColor(){

    btn.style.transform="scale(1.2)"
    const timeOut=setTimeout(time,100);
    function time(){
        btn.style.transform="scale(1.1)";
    }
    let body=document.getElementById("body");
    body.style.backgroundColor=colors[index];
    index++;
    if(index==colors.length){
        index=0;
    }
    // console.log(body);
}