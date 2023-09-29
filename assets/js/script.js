/* Author: 

*/

const arrList=document.querySelector('.list'),
      arrposition=document.querySelectorAll('.position'),
      buttonprev=document.querySelector('.prev-next-container .previous'),
      buttonnext=document.querySelector('.prev-next-container .next');


window.addEventListener('load', () => {
let a=0;
    buttonnext.addEventListener('click',()=>{
        console.log("in button n")
        if(a<4){
            console.log("in first if")
            a++;
        }
         if(a<1){
            console.log("in back")
            buttonnext.style.background="grey";
        }
    })
    buttonprev.addEventListener('click',()=>{
        if(a>=3){
            a--;
        }
    })
})





















