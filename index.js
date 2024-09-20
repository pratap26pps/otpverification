let input=[...document.querySelectorAll('input')];
console.log(input)

input.forEach(element => {
    element.addEventListener('keyup', ()=>{
   if (input.indexOf(element)+1 !=input.length)
    input[input.indexOf(element)+1].focus()

     })
});

const showModal=document.querySelector('.modal');
const openResult=document.querySelector('.button');


openResult.addEventListener('click',() =>{
 
   showModal.classList.toggle("active");
});

console.log("fetch is done");
