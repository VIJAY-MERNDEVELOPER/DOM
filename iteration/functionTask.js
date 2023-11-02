const log = param => console.log(param);

log("-----------------------------------X PRINT ODD NUMBERS IN ARRAY X----------------------------------------");

const arr =[1,2,3,4,5,6,7,8,9,10,11];

(function(){
    const oddNum=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
           oddNum.push(arr[i]);
        }
    }
    log(oddNum);
})();


 log("-----------------------------------X All the strings to title caps X----------------------------------------");

// const stringArray = ["hello world" , "good morning"];

// (function(){
//     for(let i=0;i<stringArray.length;i++){
//         const words = stringArray[i].split(" ");
//         const upper=words[i].charAt(0).toUpperCase();
//         log(upper);

//     }
// })();


log("-----------------------------------X sum of all numbers in an array X----------------------------------------");

const num = [12,33,55,15,78];
(function(){
    let sum =0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    log(sum);
})();

log("-----------------------------------X Return palindromes in an array X----------------------------------------");

const stringArray =["mom", "dad", "cat"];


const palindrome =function(arr){
    const reverseStringArray =[];
    
    for(let i=0;i<arr.length;i++){
        const reverseString= arr[i].split("").reverse().join("");
         reverseStringArray.push(reverseString);
            }
            const common= (arr.filter(string => reverseStringArray.indexOf(string) != -1));
          return common;               
}(stringArray);
log(palindrome);


log("-----------------------------------X Return median of two sorted in an array X----------------------------------------");


let arr1 =[5,6,8,35];
let arr2=[24,5 ,4,2,35];

const median = function(){
    const mergedArray = arr1.concat(arr2).sort((a,b) => a-b);
    log(mergedArray);
if(mergedArray.length % 2 ==0){
   const num1 = mergedArray.length /2 ;
   const num2 = num1 -1 ;
   const medianValue = (mergedArray[num1] + mergedArray[num2])/2
   return `median of array is ${medianValue}`

}
else{
    const num =Math.round((mergedArray.length /2)-1);
    

    return  `median of array is ${mergedArray[num]}`;
}
}();
log(median);


log("-----------------------------------X Return prime number in an array X----------------------------------------");

const arr3 =[2,3,4,5,7,8,9,10,11];


(function(){
const primeNum =[];
const dummy =[];

for(let i=0;i<arr3.length;i++){
     log(arr3[i]);
      
      if(arr3[i]>1){
         for(let j=2; j<=arr3[i];j++){
            if(arr3[i]%j ==0){
                dummy.push(j);
                if(dummy.length>2){
                    return false;
                }else{
                    primeNum.push(arr3[i]);
                }
            }
         }
         

      }else if (arr3[i]==1){
        return false;
      }
      
}
log("primeNumber : ", primeNum);


})();   

