let merch = [
    {
      id: 1,
      name: "short dress",
      size: "M",
      color: "gary",
      price: 1200,
      image: "product1.jpg",
      description: "one piece dress",
    },
    {
      id: 2,
      name: "gray Shirt",
      size: "M",
      color: "gray",
      price: 1500,
      image: "product2.jpg",
      description: "foraml shirt",
    },
  
    {
      id: 3,
      name: " female Shirt",
      size: "S",
      color: "yellow and blue",
      price: 900,
      image: "product3.jpg",
      description: "womens nylon shirt ",
    },
  
    {
      id: 4,
      name: "sweatShirt",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull mens sweat shirt",
    },
  
    {
      id: 5,
      name: "sweat Shirt",
      size: "S",
      color: "Blue,red,white",
      price: 1300,
      image: "product5.jp6g",
      description: "womens sweat Shirt",
    },
  
    {
      id: 6,
      name: " mens short",
      size: "M",
      color: "light purple",
      price: 1500,
      image: "product6.jpg",
      description: "casual white shorts",
    },
    {
        id: 7,
        name: "TShirt",
        size: "XS",
        color: "black",
        price: 500,
        image: "product7.jpg",
        description: "womens T Shirt",
      }, 
      {
        id: 8,
        name: "shoes",
        size: "M",
        color: "navy blue",
        price: 1000,
        image: "product8.jpg",
        description: "casual mens shoes",
      },
      {
        id: 9,
        name: "braclets",
        size: "NA",
        color: "black,gold,silver",
        price: 1200,
        image: "product9.jpg",
        description: "set of womens braclets",
      },
      {
        id: 10,
        name: "hand bag",
        size: "M",
        color: "black and brown",
        price: 700,
        image: "product10.jpg",
        description: "beautiful brown hand bag",
      },
      {
        id: 11,
        name: "backpack",
        size: "M",
        color: "light pink",
        price: 1800,
        image: "product11.jpg",
        description: "cute little backpack",
      },
      {
        id: 12,
        name: "jeans",
        size: "L",
        color: "white",
        price: 2000,
        image: "product12.jpg",
        description: "white denim jeans",
      },
            
  ];
  let cart=[];
  let count=0;
 function displaymerch(merchd, type="main", place="card") {
     console.log(merchd);
     let strmerch = "";
     let arrmerch="";
     merchd.forEach(function (ele, index) {
         if(type=="main"){
             strmerch = ` <div class="productcardbg">
         <div class="image">
           <img src="${ele.image}" width="100%" />
         </div>
         <div>
         <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
         <p>Size : ${ele.size}</p>
         <p>Color : ${ele.color}</p>
         <p>price : ${ele.price}</p>
         <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
         <p style="padding-top: 5px">
           <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
         </p>
       </div>
       </div>`;
       arrmerch+=strmerch;
         }
         
     if(type=="cartd"){
                 strmerch = ` <div class="productcardbg">
         <div class="image">
           <img src="/images/${ele.image}" width="100%" />
         </div>
         <div>
         <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
         <p>Size : ${ele.size}</p>
         <p>Color : ${ele.color}</p>
         <p>price : ${ele.price}</p>
         <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
         <p style="padding-top: 5px">
           <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
         </p>
       </div>
       </div>`;
             
         arrmerch += strmerch;    
 
         }
     });
     
 document.getElementById(place).innerHTML = arrmerch;
     
 }
 
 
 function getProductByID(mercha, id) {
   return mercha.find(function (ele) {
     return ele.id == id;
   });
 }
 let flag=false;
 function addToCart(id) {
 flag=false;
   let item = getProductByID(merch, id);
 
   cart.forEach(function(element){
       if(element.id==item.id){
           flag=true;
           
       }
       
 
   })
   if (flag) {
       alert("Manners Maketh Man!\ndont add the same product twice");
     return 0;
   }
   cart.push(item);
   count+=1;
   document.getElementById("numb").innerText=count;
   let type="cartd";
   let place="cartcard";
   displaymerch(cart, type, place);
 
 }
 
 
 function search(){
     console.log("calling");
 }
 function deletemerch(id){
   let item = getProductByID(merch, id);
   let index = cart.findIndex(function (item1) {
     return item1.id == id;
   });
   cart.splice(index, 1);
   count-=1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displaymerch(cart, type, place);
 }
 
 function filter(){
     let minv=document.getElementById("minp").value;
     let maxv = document.getElementById("maxp").value;
     let items= merch.filter(function(itemsl){
         return itemsl.price>=minv && itemsl.price<=maxv;
     })
      displaymerch(items);
     document.getElementById("minp").value="";
       document.getElementById("maxp").value="";
 }
 
 function search(){
     let str= document.getElementById("serstr").value;
     console.log(str);
     let items = merch.filter(function(ele) {
       return ele.name.indexOf(str)!=-1;
     });
     displaymerch(items);
    }
    displaymerch(merch); 
  
