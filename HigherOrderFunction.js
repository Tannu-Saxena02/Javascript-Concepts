function add(a,b)
{
    return a+b;
}
function power(a,b)
{
    return Math.pow(a,b);
}

function operation(a,b,fun){
   let result= fun(a,b);
   console.log(result);
}
operation(2,4,power);
// console.log(add(12,45));
// console.log(power(2,4));
// //function expression
// let addition=function(a,b)
// {
//     return a+b;
// }
// console.log(addition(1,3));
// addition.name="harry";
// function Employee(name,age,department)
// {
//     this.name=name;
//     this.age=age;
//     this.department=department;
// }
// let emp=[
//     new Employee("aman",12,"cse"),
//     new Employee("tarun",42,"cse"),
//     new Employee("arman",22,"ee"),

// ]
// function filterByAge(emps,age){
//     let result=[];
//     for(let i=0;i<emp.length;i++)
//         {
//             if(emp[i].age==age)
//                 result.push(emps[i]);

//         }
//         return result
// }

// console.log(filterByAge(emp,12));
// function filterByDepartment(emps,department){
//     let result=[];
//     for(let i=0;i<emp.length;i++)
//         {
//             if(emp[i].department==department)
//                 result.push(emps[i]);

//         }
//         return result
// }
// console.log(filterByDepartment(emp,'cse'));

//  function addition(a,b,fun){
//     fun(a,b);
//  }
//  function fun(a,b){
//     console.log("sum of a and b is ",a+b);
//  }
//  addition(2,3,fun);

