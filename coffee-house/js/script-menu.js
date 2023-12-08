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



  // Переключение блоков 
  const btnMenuCoffee = document.querySelector(".menu-item-1");
  const btnMenuTea = document.querySelector(".menu-item-2");
  const btnMenuDesset = document.querySelector(".menu-item-3");
  
  const menuCoffee = document.querySelector(".menu-coffee");
  const menuTea = document.querySelector(".menu-tea");
  const menuDessert = document.querySelector(".menu-dessert");

  const btnListNext = document.querySelector(".btn-next-list");
  const btnListNext2 = document.querySelector(".btn-next-list-2");
  const coffeeList2 = document.querySelector(".coffee-list-2");
  const dessertList2 = document.querySelector(".list-dessert-2")
  
  btnMenuCoffee?.addEventListener("click" , () => {
    btnMenuCoffee?.classList.add("btn-menu-active");
    btnMenuTea?.classList.remove("btn-menu-active");
    btnMenuDesset?.classList.remove("btn-menu-active");
    menuCoffee.classList.add("menu--active");
    menuTea.classList.remove("menu--active");
    menuDessert.classList.remove("menu--active");
    menuCoffee.classList.remove("menu-hide")
    dessertList2?.classList.remove("list-active");
    btnListNext?.classList.remove("list-hide");
    menuTea.classList.add("menu-hide");
    menuDessert.classList.add("menu-hide");
    dessertList2?.classList.remove("list-active");
    btnListNext2?.classList.remove("list-hide");
 });

 btnMenuTea?.addEventListener("click" , () => {
  btnMenuTea?.classList.add("btn-menu-active");
  btnMenuCoffee?.classList.remove("btn-menu-active");
  btnMenuDesset?.classList.remove("btn-menu-active");
  menuTea.classList.add("menu--active");
  menuCoffee.classList.remove("menu--active");
  menuDessert.classList.remove("menu--active");
  menuCoffee.classList.add("menu-hide")
  menuTea.classList.remove("menu-hide");
  menuDessert.classList.add("menu-hide");
  coffeeList2?.classList.remove("list-active");
  dessertList2?.classList.remove("list-active");
  btnListNext?.classList.remove("list-hide");
  dessertList2?.classList.remove("list-active");
  btnListNext2?.classList.remove("list-hide");
});

btnMenuDesset?.addEventListener("click" , () => {
  btnMenuDesset?.classList.add("btn-menu-active");
  btnMenuTea?.classList.remove("btn-menu-active");
  btnMenuCoffee?.classList.remove("btn-menu-active");
  menuDessert.classList.add("menu--active");
  menuCoffee.classList.remove("menu--active");
  menuTea.classList.remove("menu--active");
  menuCoffee.classList.add("menu-hide")
  menuTea.classList.add("menu-hide");
  menuDessert.classList.remove("menu-hide");
  coffeeList2?.classList.remove("list-active");
  btnListNext?.classList.remove("list-hide");
});

 // кнопка показать еще 

 btnListNext?.addEventListener("click" , () => {
  coffeeList2?.classList.add("list-active")
  btnListNext?.classList.add("list-hide")
});

btnListNext2?.addEventListener("click" , () => {
  dessertList2?.classList.add("list-active")
  btnListNext2?.classList.add("list-hide")
});