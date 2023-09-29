/* Author: 

*/

const arrList=document.querySelector('.list'),
      arrList1=document.querySelector('.list1'),
      arrposition=document.querySelectorAll('.position'),
      buttonprev=document.querySelector('.prev-next-container .previous'),
      buttonnext=document.querySelector('.prev-next-container .next');


window.addEventListener('load', () => {
let a=1;
    buttonnext.addEventListener('click',() => {
        if(a<4){
            a++;
        }
       load();  
    })
    buttonprev.addEventListener('click',() => {
        if(a>1){
            a--;
        }
        previousload();
    })

    function load(){
        arrposition.forEach((pos, index) => {
            if(index<a) {
              pos.classList.add('active');
            //   buttonprev.style.background='#f4e8e8';
            } else {
               pos.classList.remove('active');
            }
           
        })
      arrList1.style.width=a*7.2+'%';
    }

    function previousload() {
        arrposition.forEach((pos, index) => {
            if(index>=a) {
              pos.classList.remove('active');
            //   buttonnext.style.background='#f4e8e8';
            }    
        })
      arrList1.style.width=a*7.2-2.4+'%'; 
    }

})






















