
import {productsData} from './data.js';

// const searchButton = document.querySelector(".search_button")
function cardCreater( k){
    
const productCard = document.createElement("div");
productCard.className = "product-card"
productCard.value =`${productsData[k].id}`

const image = document.createElement("img");
image.src =`${productsData[k].imageSrc}`;
image.alt = "casual Sneaker";
productCard.appendChild(image);

const productInfo = document.createElement("div");
productInfo.className = "product-info";
productCard.appendChild(productInfo);
 
const catagory = document.createElement("span")
catagory.className ="catagory";
productInfo.appendChild(catagory);
catagory.innerText = `${productsData[k].category}`

const h3 = document.createElement("h3");
productCard.appendChild(h3);
h3.innerText = `${productsData[k].productName}` 
 

const description = document.createElement("p");
description.className = "desc";
productCard.appendChild(description);
description.innerText=`${productsData[k].description}`

const review = document.createElement("div");
productCard.appendChild(review);
review.textContent = " ";

 for( let i=0; i < 5; i++){
    const star = document.createElement("i");
    if(i<3){
        star.className = "fa-solid fa-star";
    }
    else{
        star.className = "fa-regular fa-star";
    }
    review.appendChild(star);
 }
   
const span = document.createElement("span");
review.appendChild(span); 
span.innerText=`${productsData[k].review}`
 
const price = document.createElement("p");
price.className = "price";
productInfo.appendChild(price);
price.innerText =`${productsData[k].price}`



const buttonGroup = document.createElement("div");
buttonGroup.className="btn-group";
productCard.appendChild(buttonGroup);


const addCartBtn = document.createElement("button");
addCartBtn.className = "btn add-cart" ;
buttonGroup.appendChild(addCartBtn);
addCartBtn.innerText = "Add to Cart"
addCartBtn.addEventListener('click', ()=>{
event.stopPropagation();
addtocart(k);

})



const buyBtn = document.createElement("button");
buyBtn.className = "btn buy-now" ;
buttonGroup.appendChild(buyBtn);
buyBtn.innerText = "Buy Now"
  
const grid = document.querySelector(".product-grid");

grid.appendChild(productCard);






productCard.addEventListener('click' , ()=>{
location.href = `../html/test.html?item=${productCard.value}`;
})














}
// for( k = 0; k<productsData.length; k++){
//     cardCreater();
// }

const searchButton = document.querySelector(".search_button");


const searchBar = document.querySelector(".search_bar input");
// const content = document.querySelector(".product-card");


searchButton.addEventListener("click",redirector )
function redirector (){
    const input =searchBar.value.toLowerCase().trim();
    // const  inputString = String(searchBar.value);
    // console.log('this is ' ,typeof(input));
    
    location.href=`../html/product.html?search=${input}`;
}
const pageUrl = location.href;

const pageSplit = pageUrl.split('=');
// console.log(typeof(pageSplit[1]));
// let p1=pageSplit[1]
let id;
if (pageSplit.length>1){
id= pageSplit[1].toLowerCase();


}
//  let id= idUntrimmed.trim(); 
const notFound = document.querySelector(".notFoundError");
   notFound.style.display = "none";

if(pageSplit.length==1){id=0};
console.log(id)

console.log(id,"ul of page :- ",pageSplit.length);

let itemNotFound=true;
for(let k = 0; k<productsData.length; k++){
  
   const targetName =`${productsData[k].productName}`.toLowerCase().trim();
     const catagory =`${productsData[k].category}`.toLowerCase().trim();
   
 if(targetName.includes(id)){
      cardCreater(k);
       itemNotFound=false;
   }
      else if(catagory.includes(id)){
      cardCreater(k);
       itemNotFound=false;
   }
    else if(id==0){
            cardCreater(k);
                itemNotFound=false;

           
    }
     else if(k==productsData.length-1&&itemNotFound){
          notFound.style.display = "flex";
    break;
    }

}





// localStorage.clear();
function addtocart(k){
  // localStorage.setItem('cart', 'hhh')

  const  productID = productsData[k].id;
  let cart = JSON.parse(localStorage.getItem('cart'))||[];
if(cart.includes(productID)){
  notFound.style.display = "flex";
  notFound.textContent= "Item is already in the cart";
  setTimeout(()=>{  notFound.style.display = "none"; 
} , 2000)
}
else{
  cart.unshift(productID);
  localStorage.setItem('cart' ,JSON.stringify( cart));
  notFound.style.display = "flex";
  notFound.style.background="green";
  notFound.style.position = "fixed"
  notFound.textContent= "Item added successfull!";
setTimeout(()=>{  notFound.style.display = "none"; 
} , 2000)
}


}
const clothBtn = document.querySelector(".cloth-catagory");
clothBtn.addEventListener("click", catagoryDirect);

function catagoryDirect (){
  location.href = `../html/product.html?search=clothes`
}
const shoesBtn = document.querySelector(".shoes-catagory");
shoesBtn.addEventListener("click", catagoryDirectShoes);

function catagoryDirectShoes (){
  location.href = `../html/product.html?search=shoes`
}
const accBtn = document.querySelector(".acc-catagory");
accBtn.addEventListener("click", catagoryDirectacc);

function catagoryDirectacc(){
  location.href = `../html/product.html?search=accessories`
}











