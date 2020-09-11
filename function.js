

// const img=document.getElementById("image");
//     function webpage3(){
//         const image3=
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQtuOcBUlHSttx3Gfn7B1as_IvkJF8bWboyg&usqp=CAU";
//         img.src=image3;
//     }
//     function webpage2(){
//         const image2="https://cdn.pixabay.com/photo/2014/12/14/12/26/evening-567840__340.jpg";
//         img.src=image2;
//     }
//     function webpage1(){
//     const image1=
//     "https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=626&ext=jpg";
//     img.src=image1;  
//     }
// function copytext(){
//     const text=document.getElementsByClassName("input");
//     text[1].value=text[0].value;
    
    
// }
// let list
// [
//     {
//         name:"kavya",
//         age:18,
//         country:"india",
//         hobbies:["painting","football","dance"]
//     },
//     {
//         name:"kimjun",
//         age:28,
//         country:"korea",
//         hobbies:["cooling","actor"]
//     },
//     {
//         name:"kat",
//         age:30,
//         country:"us",
//         hobbies:["music","throwball","dance"]
//     },
//     {
//         name:"kriti",
//         age:28,
//         country:"india",
//         hobbies:["actress","gardening","painting"]
//     },
    
// ];
// printlist()
//  {
//         this.list.forEach(function (list) {
//           console.log(list);
//         });
//     }
// list.printlist();
let list = [
    {
        name:"kavya",
        age:18,
        country:"india",
        hobbies:["painting","football","dance"]
    },
       
    {
        name:"kriti",
        age:28,
        country:"india",
        hobbies:["actress","gardening","painting"]
    
    },
    {
        name:"kimjun",
        age:28,
        country:"korea",
        hobbies:["cooling","actor"]
        
    },
    {
        name:"kat",
        age:30,
        country:"us",
        hobbies:["music","throwball","dance"]
    }
];
// function display(list){
//     console.log(list);
// }
// display(list);
function displayAge(list) {
    console.log("dispaly age")
    list.forEach(element => {
        if(element.age<30) 
        console.log(element);
      });
}
    
function displayCountry(list){
    console.log("dispaly country");
    list.forEach(element => {
        if(element.country=="india")  
        console.log(element);
      });

}
displayAge(list);
displayCountry(list);

