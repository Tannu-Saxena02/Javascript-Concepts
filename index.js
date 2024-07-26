  //console API
//   console.log("hello world")
//   console.warn("this is warning")
//   console.error("this is error");
//   document.write("document")
  // console.clear()
  // console.assert(2==4);

  var array=[1,3,4,5,6];
  console.log(array);
//   for(var j=0;j<array.length;j++)
//     {
//         console.log(array[j]);
//     }
//     array.forEach(function(element){
//         console.log("element"+element);
//     })
//     let i=0;
//     while(i<array.length)
//      {
//         console.log(array[i]);
//         i++;
//      }  
//       i=10;
//      do{
//         console.log("element is",array[i]);
//         i++;
//      } while(i<array.length)
//     for(var j=0;j<array.length;j++)
//     {
//         if(i==1)
//             break;
//         console.log(array[j]);
//     }
//     for(var j=0;j<array.length;j++)
//         {
//             if(i==0)
//                 continue;
//             console.log(array[j]);
//         }
//array methods:
// console.log(array.length);
// array.pop();
// console.log(array);
// array.push("helllo");
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(true);
// console.log(array);
// array.sort();
// console.log(array);
// array.toString();
// console.log(array.toString());
// console.log(array+typeof(array));

// String methods
// let mylovelyString="harry is a good good boy";
// console.log(mylovelyString.length);
// var i=0;
// // console.log(mylovelyString.charAt(i));
// console.log(mylovelyString.indexOf("good"));
// console.log(mylovelyString.lastIndexOf("good"));
// console.log(mylovelyString.slice(1,11));
// console.log(mylovelyString.split(" "));
// let arr1=mylovelyString.split(" ");
// for(let j=0;j<arr1.length;j++)
//     {
//         console.log(arr1[j]);
//     }
//     mylovelyString.replace("good","bad");
//     console.log(mylovelyString);
// let date=new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

//Dom Manipualation
// let element=document.getElementById("btn");
// console.log(element);
// element.classList.add("bg-primary");
// element.classList.add("text-success");
// element.classList.remove("text-success");



// let element1=document.getElementsByClassName("container");
// console.log(element1);
// element1[0].style.backgroundColor="pink";
// console.log(element.innerHTML);
// console.log(element.innerText);
// console.log(element1[0].innerHTML);
// console.log(element1[0].innerText);
// let ele=document.getElementsByTagName("div");
// console.log(ele);
// createdElement=document.createElement('p');
// createdElement.innerText="this is created Text";
// ele[0].appendChild(createdElement);
// createdElement1=document.createElement('b');
// createdElement1.innerText="this is created bold text";
// ele[0].replaceChild(createdElement1,createdElement);
// console.log(document.location);
// console.log(document.URL);
// console.log(document.images);
// console.log(document.domain);

// elementQuery=document.querySelector(".container");
// let elementQuery1=document.querySelector('.container');
// console.log(elementQuery);
// console.log(elementQuery1);
// let elementQu1=document.querySelectorAll('.container');
// console.log(elementQuery);
// console.log(elementQu1);

// function clicked(){
//   console.log("the button was clicked");
// }
// window.onload=function(){
//   console.log("window is loaded");
// }

// firstContainer.addEventListener('click',function(){
//   console.log("clicked on conatiner");
// })
// firstContainer.addEventListener('mouseover',function(){
//   console.log("mouseover on conatiner");
// })
// firstContainer.addEventListener('mouseout',function(){
//   console.log("mouseout on conatiner");
// })
// let prevhtml= document.querySelectorAll(".container")[1].innerHTML;
// console.log(prevhtml);
// firstContainer.addEventListener('mouseup',function(){
//   console.log("mouseup on conatiner");
//   document.querySelectorAll(".container")[1].innerHTML=prevhtml;
// })

// firstContainer.addEventListener('mousedown',function(){
//   document.querySelectorAll(".container")[1].innerHTML="<b>this is my container in mouseup</b>";
//   console.log("mousedown on conatiner");
// })

// function and arrow function

// function sum(a,b)
// {
//   return a+b;
// }
// console.log(sum(12,45));

// sum=(a,b)=>{
// return a+b;
// }
// console.log(sum(1,2));
// timeDelay=()=>{
//   console.log("setinterval fired");
// }
//settimeout and setInterval
// setTimeout(timeDelay(),2000)

// clr=setInterval(timeDelay,2000)
// console.log(clr);

// use setInterval(id)/setTimeout(id) to cancel setInterval() ,setTimeout();
//Local storage
// localStorage.setItem("class","sixth");
// console.log(localStorage.getItem("class"));
// console.log(localStorage);
// localStorage.removeItem("class");
// console.log(localStorage);
// localStorage.clear();
//JSON


        