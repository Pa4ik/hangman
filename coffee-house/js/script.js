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




//Кнопки приложение(для красоты)
const btnAppStore = document.querySelector('.app-store');
const btnGooglePlay= document.querySelector('.google-play');


btnAppStore?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });

 btnGooglePlay?.addEventListener("click" , () => {
    alert("Sorry .The application is currently unavailable")
 });