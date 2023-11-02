console.log("working");

let paraElement =document.createElement("p");
//adding attributes
paraElement.setAttribute("class","my-paragraph nthng-in");


console.log(paraElement);

let anchorElement = document.createElement("a");
anchorElement.setAttribute("href","www.ggogle.com" )

console.group(anchorElement)

const query=document.querySelector("#id-nme");

// style can be applied using queryselector

query.style.color ="red";

let queryAll= document.querySelectorAll("div");

console.log(queryAll);

const color =["brown","red","black","green"];

for (let i = 0; i < queryAll.length; i++) {
    queryAll[i].style.backgroundColor=color[i];
    
}

// to add only text using innerText
query.innerText += ` Adding      Text`;

// can add text and HTML content using innerHTML method



query.innerHTML+= `<p> Creating Para Tag using innerHTML method</p>`

console.log(query);

// textContent will give actual content in the html

console.log(query.textContent);

// innerText will give altered content in HTML tag

console.log(query.innerText);

// append the content - to add the content to body
// multiple elements can be append and also text also can be added using append
// it is ECMA6
document.body.append(query);



