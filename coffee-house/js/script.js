// бугрер меню
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navigation = nav?.querySelectorAll("a");
// откртие закрытие на бургер
burger?.addEventListener("click" , () => {
   burger?.classList.toggle("burger--active");
   nav?.classList.toggle("navigation-visibl");
   document.body.classList.toggle("hidden-overflow") 
});

navigation.forEach(el => {
    el.addEventListener("click", () => {
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navigation-visibl");
        document.body.classList.remove("hidden-overflow")     
    })
});
//Закрытие на ecp и вне блока 
window.addEventListener ("keydown", function(event){
    if (event.keyCode === 27){
        burger?.classList.remove("burger--active");
        nav?.classList.remove("navigation-visibl"); 
        document.body.classList.remove("hidden-overflow")    
    }
  })

window.addEventListener("click", function(event){
    if (!event.target.classList.contains("burger--active") && !event.target.closest(".header-navigation")) {
      burger?.classList.remove("burger--active");
      nav?.classList.remove("navigation-visibl");
      document.body.classList.remove("hidden-overflow")      
    } 
  });

  // SLIDER
 const btnLeftSwiper = document.querySelector(".slider-left")
 const btnRightSwiper = document.querySelector(".slider-right")
 const sliderImg = document.querySelector(".slider-img")
 const peg1 = document.querySelector(".peg1")
 const peg2 = document.querySelector(".peg2")
 const peg3 = document.querySelector(".peg3")


 // кнопки 
 sliderImg.style.right = '0%';

 function btnRightClick() {
   if (sliderImg.style.right === '0%')
    { sliderImg.style.right = '100%';
     peg2.classList.add("active-peg");
      peg1.classList.remove("active-peg"); 
      peg3.classList.remove("active-peg"); 
    } else if (sliderImg.style.right === '100%') { 
      sliderImg.style.right = '200%'; 
      peg3.classList.add("active-peg"); 
      peg1.classList.remove("active-peg"); 
      peg2.classList.remove("active-peg"); 
    } else { sliderImg.style.right = '0%'; 
    peg1.classList.add("active-peg"); 
    peg2.classList.remove("active-peg"); 
    peg3.classList.remove("active-peg"); 
  } }
 btnRightSwiper.addEventListener('click', btnRightClick);


btnLeftSwiper.addEventListener('click', () => { 
   if (sliderImg.style.right === '0%') { 
     sliderImg.style.right = '200%';
     peg3.classList.add("active-peg"); 
     peg1.classList.remove("active-peg");
     peg2.classList.remove("active-peg"); 
   } else if (sliderImg.style.right === '200%') { 
     sliderImg.style.right = '100%';
     peg2.classList.add("active-peg"); 
     peg1.classList.remove("active-peg"); 
     peg3.classList.remove("active-peg"); 
   } else { 
     sliderImg.style.right = '0%'; 
     peg1.classList.add("active-peg"); 
     peg2.classList.remove("active-peg"); 
     peg3.classList.remove("active-peg");
   } 
 });
 

 // мышкой 
 let mouseClick = false;
 let startX = null;
 let endX = null;
 
 sliderImg.addEventListener('mousedown', (e) => {
  mouseClick = true;
   startX = e.clientX;
 });
 
 sliderImg.addEventListener('mousemove', (evt) => {
   if (mouseClick) {
     endX = evt.clientX;
   }
 });
 
 sliderImg.addEventListener('mouseup', () => {
  mouseClick = false;
   if (startX && endX) {
     if (endX - startX > 0) {
       btnLeftSwiper.click();
     } else if (endX - startX < 0) {
       btnRightSwiper.click();
     }
     startX = null;
     endX = null;
   }
 });


 // сенсорных устройств
 let x1 = null;
 let x2 = null;

 function touchSwiper() {
  if (x1 && x2) {
    if (x2 - x1 > 0) {
      btnLeftSwiper.click();
    } else if (x2 - x1 < 0) {
      btnRightSwiper.click();
    }
    x1 = null;
    x2 = null;
  }
}
 
 function touchStart(event) {
   x1 = event.touches[0].clientX;
 }
 
 function touchEnd(evet) {
   x2 = evet.changedTouches[0].clientX;
   touchSwiper();
 }
 
 sliderImg.addEventListener('touchstart', touchStart, false);        
 sliderImg.addEventListener('touchend', touchEnd, false);


 //фикс для сафари 
if ('ontouchstart' in window) { 
  sliderImg.addEventListener('touchstart', touchStart, false); 
  sliderImg.addEventListener('touchend', touchEnd, false); 
} else { 
  sliderImg.addEventListener('-webkit-touch-start', touchStart, false); 
  sliderImg.addEventListener('-webkit-touch-end', touchEnd, false); 
}


 // авто переключение слайдов
 setInterval(btnRightClick , 6000)


//Кнопки приложение(для красоты)
const btnAppStore = document.querySelector('.app-store');
const btnGooglePlay= document.querySelector('.google-play');


btnAppStore?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });

 btnGooglePlay?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });


