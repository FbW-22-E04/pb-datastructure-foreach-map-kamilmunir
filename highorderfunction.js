/*forEach() and map()
1. Write a function called doubleValues which accepts an array and 
returns a new array with all the values in the array passed to the function doubled
*/
let a=[1,2,3] // [2,4,6]
let b=[5,1,2,3,10,9,12] // [10,2,4,6,20]

function doublevalues(){
console.log(a.map((item)=>item*2));
console.log(b.map((item)=>item*2))
}
doublevalues();

//**************************** */
/*
2. Write a function called onlyEvenValues which accepts an array and returns
 a new array with only the even values in the array passed to the function
Examples:

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
*/


let res3=[];
let retu=[]
function myfun(arr){
    retu=(arr.map((item)=>{return ((item%2)===0? item:0)}))
        return retu.filter(x=>x!==0)

}
 res3=myfun(b)
 console.log(res3)
 /*
 3. Write a function called showFirstAndLast which accepts an array of strings
  and returns a new array with only the first and last character of each string

Examples:
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/

let str=['colt','matt', 'tim', 'udemy'];
let str2=['hi', 'goodbye', 'smile'];
let vlength=0;
let vchar='';
let vchar2='';

function showfirstandlast(strr){
console.log(strr.map((item,ind,arr)=>{
    for(i=0;i<=strr.length;i++){
    let len=arr[ind].length
     vchar=item.toString('')

     vchar2=(vchar.substring(len-1))
    return item[i]+""+vchar2
}
}))
}

showfirstandlast(str2)

/*
4. Write a function called addKeyAndValue which accepts an array of objects,
 a key, and a value and then returns the array passed to the function with the new 
 key and value added for each object

Examples:
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, 
{name: 'Colt'}], 'title', 'instructor') 

// const arrobj=[{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'},
 {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
const arrobj=[{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'},
 {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

 


let maparr=[];

function dis(arr,oname,nname,vtitle){
    maparr = arr.map(object => {
        if (object.name === oname) {
          // 👇️ change value of name property
          return {...object, name: nname,title:vtitle};
        }

        return object;
      });
    
}

console.log(arrobj)
console.log(dis(arrobj,'Colt','Abc','Sportsman'))
console.log(maparr)

