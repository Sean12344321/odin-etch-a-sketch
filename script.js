let colorMode = 1;
let gridSize = 16;
function changeGridSize(){
    while(1){
        gridSize = prompt("Setting grid size(min size: 1, max size: 100)");
        if(!Number.isInteger(+gridSize)){
            alert("invalid input");
            continue;
        }
        if(gridSize > 100){
            alert("Too large");
            continue;
        }
        if(gridSize < 1){
            alert("Too small");
            continue;
        }
        resetGrid();
        break;
    }
}
function resetGrid(){
    container.innerHTML = "";
    for(let i = 0;i < gridSize;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0;j < gridSize;j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.addEventListener("mouseover", ()=>{
                if(colorMode === 1){
                    grid.style.opacity = 1;
                    grid.style.backgroundColor = "black";
                }
                else if(colorMode === 2){
                    const CHANNEL_NUMBER = 256;
                    let x = Math.floor(Math.random() * CHANNEL_NUMBER);
                    let y = Math.floor(Math.random() * CHANNEL_NUMBER);
                    let z = Math.floor(Math.random() * CHANNEL_NUMBER);
                    grid.style.backgroundColor = `rgb(${x},${y},${z})`;
                    grid.style.opacity = Math.random();
                }
                else if(colorMode === 3){
                    console.log(grid.style.backgroundColor === "");
                    if(grid.style.backgroundColor === "")
                        grid.style.backgroundColor = "black";
                    grid.style.opacity = +grid.style.opacity + 0.2;
                }
            });
            row.appendChild(grid);
        }
        container.appendChild(row);
    } 
}
function changeBtnSelectionUI(){
    binaryBtn.classList.remove("click-btn")
    rainbowBtn.classList.remove("click-btn")
    gradientBtn.classList.remove("click-btn")
    if(colorMode === 1)
        binaryBtn.classList.add("click-btn");
    else if(colorMode === 2)
        rainbowBtn.classList.add("click-btn");
    else if(colorMode === 3)
        gradientBtn.classList.add("click-btn");
}
const container = document.querySelector(".container");
const binaryBtn = document.querySelector(".binary");
const rainbowBtn = document.querySelector(".rainbow");
const gradientBtn = document.querySelector(".gradient");
const clearBtn = document.querySelector(".clear");
const settingBtn = document.querySelector(".setting");
binaryBtn.addEventListener("click", ()=>{
    colorMode = 1;
    changeBtnSelectionUI();
})
rainbowBtn.addEventListener("click", ()=>{
    colorMode = 2;
    changeBtnSelectionUI();
})
gradientBtn.addEventListener("click", ()=>{
    colorMode = 3;
    changeBtnSelectionUI();
})
clearBtn.addEventListener("click", resetGrid);
settingBtn.addEventListener("click", changeGridSize);
changeBtnSelectionUI();
resetGrid();