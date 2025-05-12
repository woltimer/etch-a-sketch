const container = document.querySelector("#container");

let opacity = 0;

function createEtch(s){
    container.innerHTML = "";
    for(let j = 0; j < s; j++){
        const div_row = document.createElement("div");
        div_row.classList.add("div_row");
        container.appendChild(div_row); 
        for(let i = 0; i < s; i++){
            const div_column = document.createElement("div");
            div_column.classList.add("div_col");

            div_column.addEventListener("mouseenter", (e) => {
                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;
                div_column.style.backgroundColor = "rgb("+r+","+g+","+b+")";
                const opacity = parseFloat(getComputedStyle(div_column).opacity);
                const new_opacity = Math.min(opacity + 0.1, 1);
                div_column.style.opacity = new_opacity;
            });
            div_row.appendChild(div_column); 
        }
    }
}

createEtch(16);

const button_cs = document.querySelector(".button-cs");
button_cs.addEventListener("click", () => {
    let size = prompt("Size?");
    if(size <= 100 && size >= 0){
        createEtch(size);
    }
    else alert("Incorrect value!");
});