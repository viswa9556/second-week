//node
/* console.log("checking");
console.log(global);

console.log(__dirname);
console.log(__filename); */

setTimeout(()=>{
    console.log("this would print after 6 seconds");
    clearTimeout(interval);
},6000);

let interval = setInterval(()=>{
    console.log("This would print every one second")
},1000);