/* Author: 

*/

const arrList=document.querySelector('.list'),
      arrposition=document.querySelectorAll('.position'),
      buttonprev=document.querySelector('.prev-next-container .previous'),
      buttonnext=document.querySelector('.prev-next-container .next');


window.addEventListener('load', () => {
let a=1;
    buttonnext.addEventListener('click',()=>{
        console.log("in button n")
        if(a<4){
            console.log("in first if")
            a++;
            console.log(a)
        }
       load();
         
    })
    buttonprev.addEventListener('click',()=>{
        if(a>1){
            console.log("in first if prev")
            a--;
            console.log(a)
        }
    })
})


function load(){
    arrposition.forEach((pos, index) => {
        
    })
}


















