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

// При изменении размеров экрана 
function windowSize() {
  if (window.innerWidth > 768) {
    coffeeList2?.classList.remove("list-active");
    btnListNext?.classList.remove("list-hide");
    dessertList2?.classList.remove("list-active");
    btnListNext2?.classList.remove("list-hide");
  } else {
  }
}

window.addEventListener("resize", windowSize);

//открытие и закрытие модалки 

const itemMenu = document.querySelectorAll(".item-menu");
const modalMenu = document.querySelector('.modal-menu-info');
const closeModalBtn =document.querySelector('.modal-close')

itemMenu.forEach(item => {
  item.addEventListener("click", function() {
    modalMenu.classList.add("menu-active");
    document.documentElement.style.overflow = 'hidden';
  });
});


closeModalBtn.addEventListener("click" , () => {
  modalMenu.classList.remove("menu-active");
  document.documentElement.style.overflow = '';
});

    window.addEventListener ("keydown", function(event){
      if (event.keyCode === 27){
        modalMenu?.classList.remove("menu-active")
        document.documentElement.style.overflow = '';
      }
    })
  
    window.addEventListener('click', (event) => {
      if (event.target === modalMenu) {
        modalMenu?.classList.remove('menu-active');
        document.documentElement.style.overflow = ''; 
      }
    });




// подключение json
import products from '../js/products.js'

console.log(products)
console.log(products[0].name)
 
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}

console.log(`${products[0].name}`)


//итемы
const item1 = document?.querySelector(".item-1");
const item2 = document?.querySelector(".item-2");
const item3 = document?.querySelector(".item-3");
const item4 = document?.querySelector(".item-4");
const item5 = document?.querySelector(".item-5");
const item6 = document?.querySelector(".item-6");
const item7 = document?.querySelector(".item-7");
const item8 = document?.querySelector(".item-8");
const item9 = document?.querySelector(".item-9");
const item10 = document?.querySelector(".item-10");
const item11 = document?.querySelector(".item-11");
const item12 = document?.querySelector(".item-12");
const item13 = document?.querySelector(".item-13");
const item14 = document?.querySelector(".item-14");
const item15 = document?.querySelector(".item-15");
const item16 = document?.querySelector(".item-16");
const item17 = document?.querySelector(".item-17");
const item18 = document?.querySelector(".item-18");
const item19 = document?.querySelector(".item-19");
const item20 = document?.querySelector(".item-20");

//изменяймыеблоки 
const modalImg = document?.querySelector(".modal-img");
const descriptionTitle = document?.querySelector(".description-title");
const descriptionAbout = document?.querySelector(".description-about");
const sizePrice = document?.querySelector(".size-price");
const itemBtnSize = document?.querySelector(".item-btn-size");
const additives = document?.querySelector(".additives");

//coffee
item1?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-1.jpg">`;
  descriptionTitle.innerHTML = `${products[0].name}`;
  descriptionAbout.innerHTML = `${products[0].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[0].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[0].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[0].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[0].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[0].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[0].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[0].price}</div>`
});

item2?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-2.jpg">`;
  descriptionTitle.innerHTML = `${products[1].name}`;
  descriptionAbout.innerHTML = `${products[1].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[1].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[1].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[1].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[1].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[1].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[1].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[1].price}</div>`
});

item3?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-3.jpg">`;
  descriptionTitle.innerHTML = `${products[2].name}`;
  descriptionAbout.innerHTML = `${products[2].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[2].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[2].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[2].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[2].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[2].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[2].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[2].price}</div>`
});

item4?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-4.jpg">`;
  descriptionTitle.innerHTML = `${products[3].name}`;
  descriptionAbout.innerHTML = `${products[3].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[3].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[3].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[3].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[3].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[3].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[3].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[3].price}</div>`
});

item5?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-4.jpg">`;
  descriptionTitle.innerHTML = `${products[4].name}`;
  descriptionAbout.innerHTML = `${products[4].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[4].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[4].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[4].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[4].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[4].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[4].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[4].price}</div>`
});

item6?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-6.jpg">`;
  descriptionTitle.innerHTML = `${products[5].name}`;
  descriptionAbout.innerHTML = `${products[5].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[5].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[5].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[5].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[5].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[5].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[5].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[5].price}</div>`
});

item7?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-7.jpg">`;
  descriptionTitle.innerHTML = `${products[6].name}`;
  descriptionAbout.innerHTML = `${products[6].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[6].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[6].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[6].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[6].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[6].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[6].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[6].price}</div>`
});

item8?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/coffee-8.jpg">`;
  descriptionTitle.innerHTML = `${products[7].name}`;
  descriptionAbout.innerHTML = `${products[7].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[7].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[7].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[7].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[7].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[7].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[7].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[7].price}</div>`
});
//tea
item9?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/tea-1.png">`;
  descriptionTitle.innerHTML = `${products[8].name}`;
  descriptionAbout.innerHTML = `${products[8].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[8].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[8].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[8].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[8].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[8].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[8].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[8].price}</div>`
});

item10?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/tea-2.png">`;
  descriptionTitle.innerHTML = `${products[9].name}`;
  descriptionAbout.innerHTML = `${products[9].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[9].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[9].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[9].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[9].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[9].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[9].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[9].price}</div>`
});

item11?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/tea-3.png">`;
  descriptionTitle.innerHTML = `${products[10].name}`;
  descriptionAbout.innerHTML = `${products[10].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[10].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[10].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[10].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[10].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[10].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[10].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[10].price}</div>`
});

item12?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/tea-4.png">`;
  descriptionTitle.innerHTML = `${products[11].name}`;
  descriptionAbout.innerHTML = `${products[11].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[11].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[11].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[11].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[11].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[11].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[11].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[11].price}</div>`
});
//dessert
item13?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-1.png">`;
  descriptionTitle.innerHTML = `${products[12].name}`;
  descriptionAbout.innerHTML = `${products[12].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[12].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[12].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[12].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[12].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[12].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[12].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[12].price}</div>`
});

item14?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-2.png">`;
  descriptionTitle.innerHTML = `${products[13].name}`;
  descriptionAbout.innerHTML = `${products[13].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[13].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[13].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[13].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[13].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[13].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[13].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[13].price}</div>`
});

item15?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-3.png">`;
  descriptionTitle.innerHTML = `${products[14].name}`;
  descriptionAbout.innerHTML = `${products[14].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[14].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[14].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[14].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[14].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[14].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[14].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[14].price}</div>`
});

item16?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-4.png">`;
  descriptionTitle.innerHTML = `${products[15].name}`;
  descriptionAbout.innerHTML = `${products[15].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[15].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[15].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[15].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[15].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[15].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[15].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[15].price}</div>`
});

item17?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-5.png">`;
  descriptionTitle.innerHTML = `${products[16].name}`;
  descriptionAbout.innerHTML = `${products[16].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[16].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[16].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[16].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[16].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[16].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[16].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[16].price}</div>`
});

item18?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-6.png">`;
  descriptionTitle.innerHTML = `${products[17].name}`;
  descriptionAbout.innerHTML = `${products[17].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[17].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[17].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[17].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[17].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[17].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[17].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[17].price}</div>`
});

item19?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-7.png">`;
  descriptionTitle.innerHTML = `${products[18].name}`;
  descriptionAbout.innerHTML = `${products[18].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[18].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[18].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[18].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[18].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[18].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[18].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[18].price}</div>`
});

item20?.addEventListener("click" , () => {
  modalImg.innerHTML = `<img class="modal-img-item" src="../coffee-house/img/dessert-8.png">`;
  descriptionTitle.innerHTML = `${products[19].name}`;
  descriptionAbout.innerHTML = `${products[19].description}`;
  itemBtnSize.innerHTML = `<div class="btn-item-size btn-item-active">
              <div class="btn-back-size">
                  <p class="size-item">S</p>
              </div>
              <span class="btn-text">${products[19].sizes.s.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">M</p>
              </div>
              <span class="btn-text">${products[19].sizes.m.size}</span>
          </div>
          <div class="btn-item-size ">
              <div class="btn-back-size">
                  <p class="size-item">L</p>
              </div>
              <span class="btn-text">${products[19].sizes.l.size}</span>
          </div>`
  additives.innerHTML = `<div class="btn-item-size >
          <div class="btn-back-size">
              <p class="size-item">1</p>
          </div>
          <span class="btn-text">${products[19].additives[0].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">2</p>
          </div>
          <span class="btn-text">${products[19].additives[1].name}</span>
      </div>
      <div class="btn-item-size ">
          <div class="btn-back-size">
              <p class="size-item">3</p>
          </div>
          <span class="btn-text">${products[19].additives[2].name}</span>
      </div>`   
  sizePrice.innerHTML = `
      <div class="price-p">Total:</div>
      <div class="price-p">$${products[19].price}</div>`
});
