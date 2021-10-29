const addColorBtn=document.querySelector("#addColor");
const inputsPlace=document.querySelector("#inputsPlace");
const inputs=document.querySelector("input")
addColorBtn.addEventListener("click",()=>{
    const input=document.createElement("input")
    input.type="color";
    input.setAttribute("value","#ffffff")
    input.classList.add("block__inputs__color")
    inputsPlace.removeChild(addColorBtn);
    inputsPlace.appendChild(input);
    inputsPlace.appendChild(addColorBtn);
    console.log(inputsPlace)
})