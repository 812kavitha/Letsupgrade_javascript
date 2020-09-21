let targets=[{
    name:'keerthi',
    age :24,
    city : 'delhi',
    salary : 18000,
   },
   {
    name: 'ravi',
    age : 25,
    city : 'Mumbai',
    salary : 20000,
   },
   {
    name: 'vijaya',
    age : 25,
    city : 'chennai',
    salary : 15000,
   },
   {
    name: 'ragu',
    age : 28,
    city : 'kerala',
    salary : 50000,
   }
   {
    name : 'kavitha',
    age: 23,
    city: 'hyderabad'
    salary: 25000,
   }
}
   
  

function display(targets){
    let data='';
    
   
    targets.forEach(function(element,index){
    let currentrow=`<tr>
    <td>${index + 1}</td>
    <td>${element.name}</td>
    <td>${element.age}</td>
    <td>${element.city}</td>
    <td>${element.salary}</td>
    <td><button onclick="delete_ele(${index})" class="del_btn">delete</button></td>`;
   
    data+=currentrow;
    
    });
    document.getElementById('tablerows').innerHTML = data;
   };
   function insert(event){
    event.preventDefault()
    let targetitem={};
    let ins_name=document.getElementById("ins-name").value;
    let ins_age = document.getElementById("ins-age").value;
    let ins_city = document.getElementById("ins-city").value;
    let ins_salary= document.getElementById("ins-salary").value;
    targetitem.name=ins_name;
    targetitem.age = Number(ins_age);
    targetitem.city = ins_city;
    targetitem.salary =Number(ins_salary);
    console.log(ins_salary);
   
    targets.push(targetitem);
    display(targets);
   return false;
   }
   display(targets);
   function search()
   {
    let ser_ele= document.getElementById("searching").value;
   let ser_res_arr=targets.filter(function(targets){
    if (targets.name.indexOf(ser_ele) != -1)
    {
    return targets.name.indexOf(ser_ele) != -1;
    }
    else if (targets.city.indexOf(ser_ele) != -1){
    return targets.city.indexOf(ser_ele) != -1;
   
    }
    ;
   })
   display(ser_res_arr);
   }
   function delete_ele(index){
    console.log(index);
    targets.splice(index,1);
    display(targets);
   
   }