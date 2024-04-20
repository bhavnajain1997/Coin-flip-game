let tossBtn = document.querySelector('.toss-btn');
let tossResult = document.querySelector('.toss-result');
var tossImage = document.querySelector('.toss-image img')
var tail = 0
var head = 1

tossBtn.addEventListener('click',function(){
    tossImage.classList.add('flip')
    setTimeout(()=>{
         const val = Math.round(Math.random()) 
         console.log(val)
         if(val === tail) {
            tossResult.innerHTML = "Result : Tails"
            tossImage.src = "images/tail.png"
         }
         else{
           tossResult.innerHTML = "Result : Heads"
           tossImage.src = "images/head.png"
         }
     tossImage.classList.remove('flip')
    },1000)
})