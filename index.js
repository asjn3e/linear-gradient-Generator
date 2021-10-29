const addColorBtn=document.querySelector("#addColorBtn");
let inputsLength=2;

// document.documentElement.style.setProperty('--gradient',"#ffffff")

let direction="to right"
let colors=''

function addColor(){
    const inputsPlace=document.querySelector("#inputsPlace");
    const inputs=inputsPlace.querySelectorAll("input")
    if(inputs.length >= 6){
        inputsPlace.removeChild(addColorBtn);
        return;
    }
    inputsLength++;
    const input=document.createElement("input")
    input.classList.add("block__inputs__color")
    input.type="color";
    input.id=`color${inputsLength}`
    input.setAttribute("value","#ffffff")
    inputsPlace.removeChild(addColorBtn);
    inputsPlace.appendChild(input);
    inputsPlace.appendChild(addColorBtn);
    changeColors();
}

function changeColors(){
    const inputsPlace = document.querySelector("#inputsPlace");
    const inputs = inputsPlace.querySelectorAll("input")
    for(let j = 0;j < inputsLength; j++){
        inputs[j].addEventListener("input",()=>{
            colors=[]
            inputs.forEach(element => {
                colors+=(`,${element.value}`)
            });
            console.log(colors)
            document.documentElement.style.setProperty('--gradient',`linear-gradient(${direction}${colors})`)
        })
    }
}

// function changeDirection(){
//     document.querySelector('select').addEventListener("input",()=>{
        
//     })
// }

addColorBtn.addEventListener("click",addColor);

changeColors();