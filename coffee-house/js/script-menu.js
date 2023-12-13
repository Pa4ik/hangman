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
  btn1Size.classList.add("btn-item-active");
  btn2Size.classList.remove("btn-item-active");
  btn3Size.classList.remove("btn-item-active");
  additivesBtn1?.classList.remove("btn-item-active");
  additivesBtn2?.classList.remove("btn-item-active");
  additivesBtn3?.classList.remove("btn-item-active");
});

    window.addEventListener ("keydown", function(event){
      if (event.keyCode === 27){
        modalMenu?.classList.remove("menu-active")
        document.documentElement.style.overflow = '';
        btn1Size.classList.add("btn-item-active");
        btn2Size.classList.remove("btn-item-active");
        btn3Size.classList.remove("btn-item-active");
        additivesBtn1?.classList.remove("btn-item-active");
        additivesBtn2?.classList.remove("btn-item-active");
        additivesBtn3?.classList.remove("btn-item-active");
      }
    })
  
    window.addEventListener('click', (event) => {
      if (event.target === modalMenu) {
        modalMenu?.classList.remove('menu-active');
        document.documentElement.style.overflow = ''; 
        btn1Size.classList.add("btn-item-active");
        btn2Size.classList.remove("btn-item-active");
        btn3Size.classList.remove("btn-item-active");
        additivesBtn1?.classList.remove("btn-item-active");
        additivesBtn2?.classList.remove("btn-item-active");
        additivesBtn3?.classList.remove("btn-item-active");
      }
    });



//json 
    let products;
    fetch('./js/products.json')
        .then(response => {
          return response.json();
        })
        .then(globalProducts => {
          products = globalProducts;
          console.log(products);
        });


//изменяймыеблоки модалки 
const modalImg = document?.querySelector(".modal-img");
const descriptionTitle = document?.querySelector(".description-title");
const descriptionAbout = document?.querySelector(".description-about");
const sizePrice = document?.querySelector(".size-price");
const itemBtnSize = document?.querySelector(".item-btn-size");
const additives = document?.querySelector(".additives");

//кнопки

const btnTextItem1 = document?.querySelector(".btn-text-item1");
const btnTextItem2 = document?.querySelector(".btn-text-item2");
const btnTextItem3 = document?.querySelector(".btn-text-item3");

const additivesText1 = document?.querySelector(".additives-text1");
const additivesText2 = document?.querySelector(".additives-text2");
const additivesText3 = document?.querySelector(".additives-text3");


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

  //кнопки 
  const btn1Size = document?.querySelector(".btn-1-size");
  const btn2Size = document?.querySelector(".btn-2-size");
  const btn3Size = document?.querySelector(".btn-3-size");
  const additivesBtn1 = document?.querySelector(".additives-btn1");
  const additivesBtn2 = document?.querySelector(".additives-btn2");
  const additivesBtn3 = document?.querySelector(".additives-btn3");

// суммы
function totalPrice() {
  let total = 0;
  // размера
  if (btn1Size.classList.contains("btn-item-active")) {
    total += 0;
  }
  if (btn2Size.classList.contains("btn-item-active")) {
    total += 0.50;
  }
  if (btn3Size.classList.contains("btn-item-active")) {
    total += 1.00;
  }
  // добавки 
  if (additivesBtn1.classList.contains("btn-item-active")) {
    total += 0.50;
  }
  if (additivesBtn2.classList.contains("btn-item-active")) {
    total += 0.50;
  }
  if (additivesBtn3.classList.contains("btn-item-active")) {
    total += 0.50;
  }
  if (total === 0) {
    return 0;
  }
  
  return total;
}


let sum = 0;

function updateTotalPrice() {
  const total = sum + totalPrice();
  const item = localStorage.getItem('item');
  
  if (item >= 1 && item <= 20) {
    const lastTotal = total + products[item - 1].price
    sizePrice.innerHTML = `<div class="price-p">Total:</div> <div class="price-p">$${lastTotal.toFixed(2)}</div>`;
  } else {
  }
}



function modalContent(index) { 
    descriptionTitle.innerHTML = `${products[index-1].name}`;
    modalImg.innerHTML =`<img class="modal-img-item" src="${products[index-1].img}">`;
    descriptionAbout.innerHTML = `${products[index-1].description}`;
    btnTextItem1.innerHTML =` ${products[index-1].sizes.s.size}`;
    btnTextItem2.innerHTML = `${products[index-1].sizes.m.size}`;
    btnTextItem3.innerHTML = `${products[index-1].sizes.l.size}`;
    additivesText1.innerHTML = `${products[index-1].additives[0].name}`;
    additivesText2.innerHTML =` ${products[index-1].additives[1].name}`;
    additivesText3.innerHTML = `${products[index-1].additives[2].name}`;
    sizePrice.innerHTML = `<div class="price-p">Total:</div> <div class="price-p">$${products[index-1].price.toFixed(2)}</div>`; 
}

//размер
btn1Size.addEventListener("click", () => {
  btn1Size.classList.add("btn-item-active");
  btn2Size.classList.remove("btn-item-active");
  btn3Size.classList.remove("btn-item-active");
  updateTotalPrice();
});

btn2Size.addEventListener("click", () => {
  btn1Size.classList.remove("btn-item-active");
  btn2Size.classList.add("btn-item-active");
  btn3Size.classList.remove("btn-item-active");
  updateTotalPrice();
});

btn3Size.addEventListener("click", () => {
  btn1Size?.classList.remove("btn-item-active");
  btn2Size?.classList.remove("btn-item-active");
  btn3Size?.classList.add("btn-item-active");
  updateTotalPrice();
});

additivesBtn1.addEventListener("click", () => {
  additivesBtn1?.classList.toggle("btn-item-active");
  updateTotalPrice();
});

additivesBtn2.addEventListener("click", () => {
  additivesBtn2?.classList.toggle("btn-item-active");
  updateTotalPrice();
});

additivesBtn3.addEventListener("click", () => {
  additivesBtn3?.classList.toggle("btn-item-active");
  updateTotalPrice();
});


item1?.addEventListener("click", () => {
localStorage.setItem('item', 1); 
modalContent(1);
});
item2?.addEventListener("click", () => {
modalContent(2);
localStorage.setItem('item', 2);  
});
item3?.addEventListener("click", () => {
  localStorage.setItem('item', 3); 
modalContent(3);
});
item4?.addEventListener("click", () => {
  localStorage.setItem('item', 4); 
modalContent(4);
});
item5?.addEventListener("click", () => {
  localStorage.setItem('item', 5); 
modalContent(5);
});
item6?.addEventListener("click", () => {
  localStorage.setItem('item', 6); 
modalContent(6);
});
item7?.addEventListener("click", () => {
  localStorage.setItem('item', 7);  
modalContent(7);
});
item8?.addEventListener("click", () => {
  localStorage.setItem('item', 8); 
modalContent(8);
});
item9?.addEventListener("click", () => {
  localStorage.setItem('item', 9); 
modalContent(9);
});
item10?.addEventListener("click", () => {
  localStorage.setItem('item', 10); 
modalContent(10);
});
item11?.addEventListener("click", () => {
  localStorage.setItem('item', 11); 
modalContent(11);
});
item12?.addEventListener("click", () => {
  localStorage.setItem('item', 12); 
modalContent(12);
});
item13?.addEventListener("click", () => {
  localStorage.setItem('item', 13); 
modalContent(13);
});
item14?.addEventListener("click", () => {
  localStorage.setItem('item', 14); 
modalContent(14);
});
item15?.addEventListener("click", () => {
  localStorage.setItem('item', 15); 
modalContent(15);
});
item16?.addEventListener("click", () => {
  localStorage.setItem('item', 16); 
modalContent(16);
});
item17?.addEventListener("click", () => {
  localStorage.setItem('item', 17); 
modalContent(17);
});
item18?.addEventListener("click", () => {
  localStorage.setItem('item', 18); 
modalContent(18);
});
item19?.addEventListener("click", () => {
  localStorage.setItem('item', 19); 
modalContent(19);
});
item20?.addEventListener("click", () => {
  localStorage.setItem('item', 20); 
modalContent(20);
});








// function totalPrice() {
//   let sum = 0;
//   // размера
//   if (btn1Size.classList.contains("btn-item-active")) {
//     sum += 0;
//   }
//   if (btn2Size.classList.contains("btn-item-active")) {
//     sum += 0.50;
//   }
//   if (btn3Size.classList.contains("btn-item-active")) {
//     sum += 1.00;
//   }
//   // добавки 
//   if (additivesBtn1.classList.contains("btn-item-active")) {
//     sum += 0.50;
//   }
//   if (additivesBtn2.classList.contains("btn-item-active")) {
//     sum += 0.50;
//   }
//   if (additivesBtn3.classList.contains("btn-item-active")) {
//     sum += 0.50;
//   }
//   if (sum === 0) {
//     return 0;
//   }
  
//   return sum;
// }

// function updateTotal() {
//   const total = totalPrice();
//   console.log(total);
//   sizePrice.innerHTML = `<div class="price-p">Total:</div> <div class="price-p">$${products[index-1].price + total}</div>`;
//   } 


// function modalContent(index) {
//     descriptionTitle.innerHTML = `${products[index-1].name}`;
//     modalImg.innerHTML =`<img class="modal-img-item" src="${products[index-1].img}">`;
//     descriptionAbout.innerHTML = `${products[index-1].description}`;
//     btnTextItem1.innerHTML =` ${products[index-1].sizes.s.size}`;
//     btnTextItem2.innerHTML = `${products[index-1].sizes.m.size}`;
//     btnTextItem3.innerHTML = `${products[index-1].sizes.l.size}`;
//     additivesText1.innerHTML = `${products[index-1].additives[0].name}`;
//     additivesText2.innerHTML =` ${products[index-1].additives[1].name}`;
//     additivesText3.innerHTML = `${products[index-1].additives[2].name}`;
//     sizePrice.innerHTML = `<div class="price-p">Total:</div> <div class="price-p">$${products[index-1].price + updateTotal()}</div>`;
//   function updateTotal() {
//     const total = totalPrice();
//     console.log(total);
//     sizePrice.innerHTML = `<div class="price-p">Total:</div> <div class="price-p">$${products[index-1].price + total}</div>`;
//     }     
// }

// //размер
// btn1Size.addEventListener("click" , () => {
// btn1Size.classList.add("btn-item-active");
// btn2Size.classList.remove("btn-item-active");
// btn3Size.classList.remove("btn-item-active");
// updateTotal();
// });
// btn2Size.addEventListener("click" , () => {
// btn1Size.classList.remove("btn-item-active");
// btn2Size.classList.toggle("btn-item-active");
// btn3Size.classList.remove("btn-item-active");
// updateTotal();;
// });
// btn3Size.addEventListener("click" , () => {
// btn1Size?.classList.remove("btn-item-active");
// btn2Size?.classList.remove("btn-item-active");
// btn3Size?.classList.add("btn-item-active");
// updateTotal();
// });
// //добавки
// additivesBtn1.addEventListener("click" , () => {
// additivesBtn1?.classList.toggle("btn-item-active");
// updateTotal(); 
// });

// additivesBtn2.addEventListener("click" , () => {
// additivesBtn2?.classList.toggle("btn-item-active");
// updateTotal(); 
// });

// additivesBtn3.addEventListener("click" , () => {
// additivesBtn3?.classList.toggle("btn-item-active");
// updateTotal(); 
// });


// item1?.addEventListener("click", () => {
// modalContent(1);
// });
// item2?.addEventListener("click", () => {
// modalContent(2);
// });
// item3?.addEventListener("click", () => {
// modalContent(3);
// });
// item4?.addEventListener("click", () => {
// modalContent(4);
// });
// item5?.addEventListener("click", () => {
// modalContent(5);
// });
// item6?.addEventListener("click", () => {
// modalContent(6);
// });
// item7?.addEventListener("click", () => {
// modalContent(7);
// });
// item8?.addEventListener("click", () => {
// modalContent(8);
// });
// item9?.addEventListener("click", () => {
// modalContent(9);
// });
// item10?.addEventListener("click", () => {
// modalContent(10);
// });
// item11?.addEventListener("click", () => {
// modalContent(11);
// });
// item12?.addEventListener("click", () => {
// modalContent(12);
// });
// item13?.addEventListener("click", () => {
// modalContent(13);
// });
// item14?.addEventListener("click", () => {
// modalContent(14);
// });
// item15?.addEventListener("click", () => {
// modalContent(15);
// });
// item16?.addEventListener("click", () => {
// modalContent(16);
// });
// item17?.addEventListener("click", () => {
// modalContent(17);
// });
// item18?.addEventListener("click", () => {
// modalContent(18);
// });
// item19?.addEventListener("click", () => {
// modalContent(19);
// });
// item20?.addEventListener("click", () => {
// modalContent(20);
// });