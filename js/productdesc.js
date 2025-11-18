
  import {productsData} from './data.js';

const image = document.querySelector(".image");
const productTitle = document.querySelector(".Dproduct-title");
const  price = document.querySelector(".Dproduct-price");
const description = document.querySelector(".Dproduct-description");
const add = document.querySelector(".quantity-box-label");
const input = document.querySelector(".quantity-box-input");
const cart = document.querySelector(".btn-cart");
const totalPrice = document.querySelector("#totalPrice")
const buy= document.querySelector(".btn-buy");


const url = location.href
const urlSplit = url.split("=");
const id =Number(urlSplit[1]) -1;

image.src = `${productsData[id].imageSrc}`
productTitle.textContent =`${productsData[id].productName}`
price.textContent = `${productsData[id].price}`
description.textContent = `${productsData[id].description}`

add.addEventListener('click' , ()=>{

let quantityValue = input.value;
let totalPricecal = quantityValue * productsData[id].price;
totalPrice.textContent=totalPricecal;


})
const errorDisplay = document.querySelector(".notFoundError")
const addCartBtn = document.querySelector(".btn-cart");
addCartBtn.addEventListener("click" , () => cartAdder(id));
console.log("clicked",addCartBtn);
function cartAdder(id){
    const productId = productsData[id].id;
    const  Cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(Cart.includes(productId)){
       errorDisplay.textContent =  "item has already there!"
       errorDisplay.style.display= "flex";
       setTimeout(()=>{errorDisplay.style.display = "none"} ,2000)

       
        return;
    }
    else{
        Cart.unshift(productId);
        const  setCart = localStorage.setItem("cart", JSON.stringify(Cart));
          errorDisplay.textContent =  "item is added successfully"
       errorDisplay.style.display= "flex";
       errorDisplay.style.background = "green";
       setTimeout(()=>{errorDisplay.style.display = "none"} ,2000)
        
    }

}




