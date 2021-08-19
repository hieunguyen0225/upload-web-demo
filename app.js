var menuItems= document.getElementById("menuItems")
menuItems.style.maxHeight="0px"
function menuToggle(){
    if(menuItems.style.maxHeight==="0px"){
        menuItems.style.maxHeight='200px'
    }else{
        menuItems.style.maxHeight='0px'
    }
}
// js for product gallery
var productImg = document.getElementById('product-img')
var smallImg= document.getElementsByClassName('small-img')

smallImg[0].onclick= function(){
    productImg.scr=smallImg[0].src
}
smallImg[1].onclick= function(){
    productImg.scr=smallImg[1].src
}
smallImg[2].onclick= function(){
    productImg.scr=smallImg[2].src
}
smallImg[3].onclick= function(){
    productImg.scr=smallImg[3].src
}
let obj= {name: 'Hieu', surname:"Nguyen"}
let text= ''
for(let t in obj){
    text+= obj[x]+' '
}
console.log(text);