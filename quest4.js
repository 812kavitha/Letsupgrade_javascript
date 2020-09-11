
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

