const slideshowElements=document.querySelectorAll(".slideshow-element");
 
// akta smay por por change hyar jnno 

let countElement=1;

 setInterval(() => {
    countElement ++;
   let currentElement = document.querySelector(".current"); 

   currentElement.classList.remove("current");

   if(countElement > slideshowElements.length)
   {
    slideshowElements[0].classList.add("current");
   }
   else
   {
    currentElement.nextElementSibling.classList.add("current");
   }

   
 }, 2000);