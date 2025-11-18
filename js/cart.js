import { productsData } from "./data.js";  

let totalPrice = 0;
function createCartItem(k) {
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.addEventListener('click',()=> {
location.href = "../html/test.html";
})

  // Product Image
  const img = document.createElement("img");
  img.src = `${productsData[k].imageSrc}`;
  img.alt = "title";
  cartItem.appendChild(img);

  // Item Info container
  const itemInfo = document.createElement("div");
  itemInfo.className = "item-info";

  // Product Title
  const h3 = document.createElement("h3");
  h3.textContent = `${productsData[k].productName}`;

  // Product Price
  const price = document.createElement("p");
  price.textContent =`${productsData[k].price}` + " Birr";
  price.value=productsData[k].price;
   totalPrice = totalPrice + price.value ;


  // Quantity section
  const quantityDiv = document.createElement("div");
  quantityDiv.className = "quantity";


  // Add all item info
  itemInfo.appendChild(h3);
  itemInfo.appendChild(price);
  itemInfo.appendChild(quantityDiv);

  cartItem.appendChild(itemInfo);

  // Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
removeBtn.addEventListener('click',  ()=>{
    event.stopPropagation();
    remover(k);
} );


  const icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";

  removeBtn.appendChild(icon);
  cartItem.appendChild(removeBtn);

  // Append to container
  document.querySelector(".cart-items").appendChild(cartItem);
}

let cart = JSON.parse(localStorage.getItem('cart'));
for(let i =0; i<cart.length; i++){

        let k = cart[i]-1;
        createCartItem(k);
}

function remover(k)  {
  let removedError = document.querySelector(".removed-error")
   let cart = JSON.parse(localStorage.getItem("cart"));
   let id = productsData[k].id;
   if(cart.includes(id)){
    let index = cart.indexOf(id);
    cart.splice(index,1);
    localStorage.setItem('cart' , JSON.stringify(cart));
 

    location.href="../html/cart.html";
        removedError .style.display= "flex";
       setTimeout(()=>{ removedError.style.display = "none"} ,2000)

   }
    
}

let subTotal = document.querySelector(".sub-total");
let total = document.querySelector(".total");
let shipping = document.querySelector(".shipping");


let shippingValue = Number(shipping.textContent);


subTotal.textContent = totalPrice;


let subTotalValue = Number(subTotal.textContent);

total.textContent = shippingValue + subTotalValue;

//////
