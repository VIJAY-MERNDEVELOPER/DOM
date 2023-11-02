console.log("I'm Ok");

var jsonString ='{"name": "Vijay", "age": 27,"role": "Developer" }';
var jsonString1 ='{"role": "Developer","name": "Vijay","age": 27}'

var jsonObj =JSON.parse(jsonString);
var jsonObj1 =JSON.parse(jsonString1);

console.log(jsonObj);
console.log(jsonObj1);

// const jsonString1 = JSON.stringify(jsonObj);
// console.log(jsonString1);

var nameObj = jsonObj.hasOwnProperty('name');  //returns boolean
console.log(nameObj);

var obj = Object.keys(jsonObj);
console.log(obj);

const compareObj=()=>{

if(Object.keys(jsonObj).length === Object.keys(jsonObj1).length){
    // for...of...{} method
for(const element of obj){
    if(jsonObj.hasOwnProperty(element)===jsonObj1.hasOwnProperty(element)){
        console.log(`${true}`);
    }
    else{
        console.log(false);    }
}

}else{
    console.log("not equal");
}

}
compareObj();

//for...in {} method

for(key in jsonObj){
    console.log(jsonObj[key] ===jsonObj1[key]);
}


