// let food=Number(prompt("enter the food price"))
// let tip=Number(prompt("enter tip percentage"))

// let tipAmount=food * (tip / 100)
// console.log(tipAmount)
// console.log(Math.floor(Math.random() *3 ))




// let conditions=prompt("enter the situation")
// if(conditions=="rain"){
//     console.log("Grap your umbrella")
// }else{
//     console.log("get your sunglasses")
// }


// function myFunction(a, b) {
//     return a * b;
//   }
//  console.log (myFunction(3,4))



// function sayMyName(name){
//     return name
// }
// res=sayMyName("cedrick")
// console.log(`my name is ${res}`)




// let obj={
//     firstN:"cedrick",
//     secondN:"ANUSHINY",
//     fullN:function(){
//         return this.firstN + " " + this.secondN;
//     }
// }
// res=obj.fullN()
// console.log(res)


// function tipA(ammount,tip){
//     let tip_pec=tip /100;
//    let total=ammount * tip_pec
//    return total
// }
// console.log(tipA(100,20))

// const sum =(a,b)=>{
//     return a + b
// }
// const sub =(a,b)=>{
//     return a - b
// }
// const div =(a,b)=>{
//     if(b==0){
//         console.log("denominator cannot be zero")
    
//     }
//     return a / b
// }
// const mul =(a,b)=>{
//     return a * b
// }
// console.log(div(3,4))




// const MyArray=["banana","pie","oranges","apple"]
// MyArray.push("cookies","bluebery")

// // start from zero includind zero up to 2 but not including 2
// console.log(MyArray.slice(1,3))




// const obj={
//     firstName:"cedrick",
//     shirt:"white"

// }
// obj.phone=1937432
// console.log(obj)
//  let nameq=new Object();
//  nameq.







function checkcookies(){
    let text=" ";
    if(navigator.cookieEnabled==true){
        text="cookies enable";
    }else{
        text="Cookiess are not enable";
    }
    document.getElementById("Mycookies").innerHTML=text;
}

function Out(obj){
    obj.innerHTML="Hover over me"

}
function Hover(obj){
    obj.innerHTML="Thank you"

}
function addEvent(){
    alert("hello world");
}
document.getElementById("add").addEventListener("mouseover",addEvent)




// let fruits=["apple","banana","pie","oranges"]
// for(const fruit of fruits){
//     console.log(fruit[0])
// }
// let number=[1,2,3,4,5,6];
// let result=[]; 
// for(const num of number){
//     let out= (num *2);
//     result.push(out)
// }
// console.log(result)



// const double =(numbers)=>{
//     let result=[];
//     for(const number of numbers){
//         let out=number*2;
//         result.push(out);
//     }
//     return result;
// }
// console.log(double([1,2,3,4,5]))
// const square =(numbers)=>{
//     let result=[];
//     for(const number of numbers){
//         let out=number**2;
//         result.push(out);
//     }
//     return result;
// }
// console.log(square ([1,2,3,4,5]))




// const HowManyLetter =()=>{
//     const phrase="how many letter does this phrase has";
//     for(letter in phrase){
//         console.log(Number(letter)+1)
//     }
// }
// HowManyLetter ()


// const CountLetters =(phrase)=>{
//     let frquecy={};
//     console.log(phrase)
//     for(const letter of phrase){
//         if(letter in frquecy){
//             frquecy[letter] +=1;
//         }else{
//             frquecy[letter] =1;
//         }
        
//     }
//     return frquecy
// }
// console.log(CountLetters("haha"))




// let Myarrr=[1,3,4,5]
// let result= Myarrr.map(num=>num *2)
// console.log(result[0])
 
// const Double =(numbers)=>{
//     return numbers.map( number => number * 2 )
// }
// console.log(Double([1,2,3]))





//map method


// const square =(nums)=>{
//     return nums.map(n => n **2);
// }
// console.log(square([4,5,6,9]))

// let n=[1,8,2,3,4];
// let emp=[]
// for (let i=0;i<=n.length;i++){
//     if(n[i]>3){
//         let out=n[i]
//         emp.push(out)
//     }
// }
// console.log(emp)



//filer methode       

// let  great=[]
// const numbers =(number, greater)=>{
//     let out= number.filter(num => num > greater);
//     great.push(out)
//     return great
// }
// console.log(numbers([1,2,4,5],3))


// let actors=[
//     {names:"cedrick",network:20000},
//     {names:"rick",network:100},
//     {names:"ced",network:300}
// ]
// console.log(actors.filter(act => act.network >300))

 


// number=[3,4,5,6,7,8,1,2];
// let out=[];
// console.log(number.filter(num => num >4)
//  for (i of number){
//     if (i<4){
//         // console.log(i);
//         let res=i
//         out.push(res)
//     }
//  } 
//  console.log(out.length)

// let actors=[
//     {names :"cedrick",network:30000},
//     {names :"rick",network:100},
//     {names :"ced",network:300},
// ]
// let res= (actors.filter(net => net.network > 2000));
// let disp = document.getElementById("actors");
// disp.innerHTML=res
  
// let NetTotal= actors.reduce((pre,curr)=> pre + curr.network,0)
// console.log(NetTotal)



// reduce
  
// const nums=[1,2,3,10]
// const result= nums.reduce(function(pre,curr){
//     return pre + curr
// })
// console.log(result)





// const SumFunction =([a,b,c,d])=>{
//     return (a + b + c + d)

// }
// console.log(SumFunction([1,2,3,10])+ " using the Nomal fuction methode")
 


// let arr=[1,2,3,10]
// let result=arr.reduce(function(pre,curr){
//   return pre + curr
// })
// console.log(`${result}  using the reduce methode`)

// let arr1=[1,2,3,10]
// const mul=arr1.reduce(function(a,b){
//     return a *b
// })
// console.log(mul)
 
// const mul=arr1.reduce((a,b)=> a*b)
// console.log(mul)


 
//DOM Manipulations

let title=document.getElementById("actors");
title.innerHTML="Bye my lover! "
title.style.color="red"
title.style.fontSize="50px"

let red=document.getElementById("red");
// let green=document.getElementById("green");
// let yellow=document.getElementById("yellow");
let disp=document.getElementById("dispay")
const ClickMyButtonRed =()=>{
    disp.innerHTML="red button";
    disp.style.color="red"
    
}
const ClickMyButtonGreen =()=>{
    disp.innerHTML="Green button";
    disp.style.color="green"
}
const ClickMyButtonyellow =()=>{
    disp.innerHTML="yellow button";
    disp.style.color="yellow"
    
}



let fruits=[1,2,3,4,5]
for (const fru of fruits){
    console.log(fru[2])
}















































































































