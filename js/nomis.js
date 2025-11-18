

const search = document.querySelector(".search");
const searchInput = document.querySelector(".searchInput");

search.addEventListener("click", redirector);

console.log("ggghgh" ,search.value);
 function redirector(){
 let searchValue = searchInput.value.toLowerCase();
 location.href = `../html/product.html?search=${searchValue}`;
 }
 const url = location.href;
 let urlSplit = url.split("=");
 let name = urlSplit[1];






const clothBtn = document.querySelector(".cloth-catagory");
clothBtn.addEventListener("click", catagoryDirect);
console.log("clicked", clothBtn)
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



