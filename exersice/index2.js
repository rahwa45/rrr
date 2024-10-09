/*let userName='bro';
let items=3;
let total=75;
*/
//console.log('hello', userName);
//console.log('you have', items, 'items in your cart');
//console.log('your total is $', total);
//console.log(`hello ${userName}`);
//console.log(`you have ${items} items in your cart`);
//console.log(`your total is $ ${total}`);
//let text=
//`hello ${userName}
//you have ${items} items in your cart
//your total is $ ${total}`;
//console.log(text);
//document.getElementById('myLabel').innerHTML=text;
//let usserName='bro code';

//console.log(...numbers);
//console.log(...usserName);
/*let numbers=[1,2,3,4,5,6,7,8,9];
let maximum=Math.max(...numbers);
console.log(maximum);
*/
/*let class1 = ['a','b','c'];
let class2 = ['e','f','g'];

class1.push(...class2);

console.log(...class1);
*/
/*sayHello();
function sayHello(){
  console.log('hello')
}
  */

 /*const greeting=function(){
  console.log('hello');
 }
 greeting();
 */
let count=0;
document.getElementById('increaseButton').onclick=function(){
  count+=1;
  document.getElementById('myLabel').innerHTML=count;
}
document.getElementById('decreaseButton').onclick=function(){
  count-=1;
  document.getElementById('myLabel').innerHTML=count;
}

/*function increaseCount(){
  count+=1;
  document.getElementById('myLabel').innerHTML=count;

}
function decreaseCount(){
  count-=1;
  document.getElementById('myLabel').innerHTML=count;

}*/

/*const greeting=userName=>
  console.log(`hello ${userName}`)

greeting('bro');
*/
/*const percent=function(x,y){
  return x/y * 100;
}
 console.log(`${percent(80,150)}%`);
 */
 /*const percent=(x,y)=> 
  x/y * 100;
 console.log(`${percent(80,150)}%`);
 */
 /*let grades=[100,50,90,60,80,70];

grades.sort((x,y)=> y-x);

grades.forEach((element)=> console.log(element)
);
*/
/*function add(a,b){
  return a+b;
}
console.log(add(2,3));
*/
/*const add=function(a,b){
  return a+b;
}
console.log(`${add(2,3)}`);
*/




