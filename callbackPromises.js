console.log("good morning");

setTimeout(run,2000);
 function run(){
    console.log("function is running");
 }
 console.log("programs end");

 const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("harry");
    document.head.append(sc);
 }

 const callback=(arg)=>{
    console.log(arg);
 }
 loadScript("https://www.w3schools.com/js/js_object_definition.asp",callback);
 //promise 1
 let promise=new Promise((resolve,reject) => {
    let a=Math.random();
    if(a<0.5)
        {
            reject("No random number is not supporting you");
        }
        else{
   setTimeout(() => {
    console.log("yes I am done");
    resolve("Harry");
   }, 2000);
}
 }
 )
 //promise2
 let promise1=new Promise((resolve,reject) => {
    let a=Math.random();
    if(a<0.8)
        {
            reject("No random number is not supporting you");
        }
        else{
   setTimeout(() => {
    console.log("yes I am done");
    resolve("Harry porter");
   }, 2000);
}
 }
 )
//  let p3=Promise.all([promise,promise1]);
let p3=Promise.any([promise,promise1]);
 p3.then((a) => {
   console.log(a);
 }
 ).catch((err) => {
   console.log(err);
 }
 )