let person={
    firstname:"john",
    lastname:"doe",
    designation:"software engineer"
}
let person1={
    firstname:"smarth",
    lastname:"doe",
    designation:"software engineer"
}
function getname(city,state,country){
    console.log(this.firstname,city,state,country);
}
getname.call(person1,"delhi","lucknow","INDIA");
getname.apply(person,["delhi","lucknow","INDIA"]);
let c=getname.bind(person,"delhi","lucknow","INDIA");
// console.log(c());
c();
