console.log("hi there");

const btn=document.querySelector(".modalButton")
const container=document.querySelector(".modalContainer")

btn.addEventListener('click', ()=>{
    toggleModal(true)
})

function toggleModal(toggle){
    container.style.display = toggle? "flex":"none"
}
container.addEventListener('click',(e)=>{
    console.log(e.target.className);
    if(e.target.className === "modalContainer")
    toggleModal(false)
} )