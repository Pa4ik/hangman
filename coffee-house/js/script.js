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

  // При изменении размеров экрана для бугрега 
function burgerSize() {
  if (window.innerWidth > 768) {
    burger?.classList.remove("burger--active");
      nav?.classList.remove("navigation-visibl"); 
      document.body.classList.remove("hidden-overflow")  
  } else {
  }
}

window.addEventListener("resize", burgerSize);

  // SLIDER
 const btnLeftSwiper = document.querySelector(".slider-left")
 const btnRightSwiper = document.querySelector(".slider-right")
 const sliderImg = document.querySelector(".slider-img")
 const peg1 = document.querySelector(".peg1")
 const peg2 = document.querySelector(".peg2")
 const peg3 = document.querySelector(".peg3")

  // пегинация
  const progressPeg = document.querySelector('.progress-peg');
  const progressPeg2 = document.querySelector('.progress-peg2');
  const progressPeg3 = document.querySelector('.progress-peg3');

 // кнопки и переключение я слайдера 
 sliderImg.style.right = '0%';

 function btnRightClick() {
  if (sliderImg.style.right === '0%') {
      sliderImg.style.right = '100%';
      peg2.classList.add("active-peg");
      peg1.classList.remove("active-peg");
      peg3.classList.remove("active-peg");
      progressPeg.classList.remove("progress-active");
      progressPeg2.classList.add("progress-active");
      progressPeg3.classList.remove("progress-active");
      upProgress2()
  } else if (sliderImg.style.right === '100%') {
      sliderImg.style.right = '200%';
      peg3.classList.add("active-peg");
      peg1.classList.remove("active-peg");
      peg2.classList.remove("active-peg");
      progressPeg.classList.remove("progress-active");
      progressPeg2.classList.remove("progress-active");
      progressPeg3.classList.add("progress-active");
      upProgress3()
  } else {
      sliderImg.style.right = '0%';
      peg1.classList.add("active-peg");
      peg2.classList.remove("active-peg");
      peg3.classList.remove("active-peg");
      progressPeg.classList.add("progress-active");
      progressPeg2.classList.remove("progress-active");
      progressPeg3.classList.remove("progress-active");
      upProgress()
  }
}
btnRightSwiper.addEventListener('click', btnRightClick);


btnLeftSwiper.addEventListener('click', () => { 
   if (sliderImg.style.right === '0%') { 
     sliderImg.style.right = '200%';
     peg3.classList.add("active-peg"); 
     peg1.classList.remove("active-peg");
     peg2.classList.remove("active-peg");
     progressPeg.classList.remove("progress-active");
      progressPeg2.classList.remove("progress-active");
      progressPeg3.classList.add("progress-active");
      upProgress3()
   } else if (sliderImg.style.right === '200%') { 
     sliderImg.style.right = '100%';
     peg2.classList.add("active-peg"); 
     peg1.classList.remove("active-peg"); 
     peg3.classList.remove("active-peg");
     progressPeg.classList.remove("progress-active");
      progressPeg2.classList.add("progress-active");
      progressPeg3.classList.remove("progress-active");
      upProgress2()
   } else { 
     sliderImg.style.right = '0%'; 
     peg1.classList.add("active-peg"); 
     peg2.classList.remove("active-peg"); 
     peg3.classList.remove("active-peg");
     progressPeg.classList.add("progress-active");
      progressPeg2.classList.remove("progress-active");
      progressPeg3.classList.remove("progress-active");
      upProgress()
   } 
 });
 
 //заполнение пегинации и автопереключение 
 let interval = null;
 let width = 0;

 function upProgress() {
  if (interval !== null) {
    clearInterval(interval);
    width = 0;
  }
  if (!progressPeg.classList.contains('progress-active')) {
    progressPeg.style.width = '0px';
    return;
  }
  const lastWidth = 40;
  const time = 6000;
  const fill = lastWidth / (time / 100);

  interval = setInterval(() => {
    width += fill;
    progressPeg.style.width = `${width}px`;
    if (width >= lastWidth) {
      clearInterval(interval);
      btnRightClick();
    }
  } , 100 );
}
function upProgress2() {
  if (interval !== null) {
    clearInterval(interval);
    width = 0;
  }
  if (!progressPeg2.classList.contains('progress-active')) {
    progressPeg2.style.width = '0px';
    return;
  }
  const lastWidth = 40;
  const time = 6000;
  const fill = lastWidth / (time / 100);

  interval = setInterval(() => {
    width += fill;
    progressPeg2.style.width = `${width}px`;
    if (width >= lastWidth) {
      clearInterval(interval);
      btnRightClick();
    }
  }, 100);
}
function upProgress3() {
  if (interval !== null) {
    clearInterval(interval);
    width = 0;
  }
  if (!progressPeg3.classList.contains('progress-active')) {
    progressPeg3.style.width = '0px';
    return;
  }
  const lastWidth = 40;
  const time = 6000;
  const fill = lastWidth / (time / 100);

  interval = setInterval(() => {
    width += fill;
    progressPeg3.style.width = `${width}px`;
    if (width >= lastWidth) {
      clearInterval(interval);
      btnRightClick()
    }
  }, 100);
}
//вызово функции при загрузки страниццы 
window.addEventListener('load', () => {
  upProgress()
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


//Кнопки приложение(для красоты)
const btnAppStore = document.querySelector('.app-store');
const btnGooglePlay= document.querySelector('.google-play');


btnAppStore?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });
btnGooglePlay?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });
