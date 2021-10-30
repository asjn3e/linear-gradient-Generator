const addColorBtn=document.querySelector("#addColorBtn");
let inputsLength=2;

// document.documentElement.style.setProperty('--gradient',"#ffffff")

let direction="to right"
let colors=', #c21500,#ffc500'

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
    changeDirection();
}

function generateCode(){
    document.documentElement.style.setProperty('--gradient',`linear-gradient(${direction}${colors})`)
    document.querySelector('#linearCode').innerHTML=`linear-gradient(${direction}${colors})`;
    document.querySelector('#HEXCode').innerHTML=colors
}


function changeColors(){
    const inputsPlace = document.querySelector("#inputsPlace");
    const inputs = inputsPlace.querySelectorAll("input")
    for(let j = 0;j < inputsLength; j++){
        inputs[j].addEventListener("input",()=>{
            colors=''
            inputs.forEach(element => {
                colors+=(`,${element.value}`)
            });
            console.log(colors)
            generateCode();
        })
    }
}

function changeDirection(){
    const selectDirection = document.querySelector('#selectDirection')
    selectDirection.addEventListener("input",()=>{
        direction=selectDirection.value;
        generateCode();
    })
    const typeDirection=document.querySelector('#typeDirection')
    typeDirection.addEventListener("change",()=>{
        direction=typeDirection.value;
        generateCode();
    })
}


addColorBtn.addEventListener("click",addColor);

changeColors();
changeDirection();