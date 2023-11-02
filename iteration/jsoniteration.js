const json ='{"name": "Vijay", "age": 27,"role": "Developer" }';
const jsonObj=JSON.parse(json);

console.log(`----------------------------x for  loop X----------------------------`)


var key=Object.keys(jsonObj);
for (let i=0;i<key.length;i++){
    console.log(`${key[i]} : ${jsonObj[key[i]]}`);
}



console.log(`----------------------------x for in loop X----------------------------`)

for(const key in jsonObj){
    if(jsonObj.hasOwnProperty(key)){
        console.log(`${key} : ${jsonObj[key]}`);
    }
}

console.log(`----------------------------x for of loop X----------------------------`)

const valuesArray = Object.values(jsonObj);
for (const value of valuesArray) {
    console.log(`${key,value} :${value}`);
  }



console.log(`----------------------------x for each loop X----------------------------`)
function forEachObject(obj, callback) {
    for (const key in jsonObj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        callback(key, value);
      }
    }
  }
  
  // Use the custom forEachObject function
  forEachObject(jsonObj, (key, value) => {
    console.log(`${key}: ${value}`);
  });



