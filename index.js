/*  1))program to search a particular character in a string*/
let str="prasad";
let find=str.search('a');
console.log(find);


/*  2))program to convert minutes to seconds*/
let num =10;
let sec=num*60;
console.log(sec);


/*  3))program to search  for a element in a array of strings */
let names =["keerthi","likki","yamumna","nirosha","sreeja"];
for(let i=0;i<=names.length;i++){
    let find=names.includes("kavi");
    console.log(find);
}


/*  4))program to display only elements containing 'a' in the form of array*/
let arr = ["abc","cab","def","mno","yza"];
var s;
for(let i=0;i<arr.length;i++)
{
    
    s = arr[i].search('a');
    
    if(arr[i].includes('a'))
    {
        
        console.log(arr[i]);
    }
        
}


/*  5))program to reverse an array*/
let arr=[2,3,6,2,1];
for(let i=arr.length;i>=0;i--){
    
    console.log(arr[i]);
}
let rev=arr.reverse();
console.log(rev);
