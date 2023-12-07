
let boxes = document.getElementsByClassName("box");    // Use of getElementByClassName to target the elements of that class. Elements for class.
console.log(boxes);


boxes[3].style.backgroundColor = "brown";
boxes[3].style.color = "white";


document.getElementById("Newbox").style.backgroundColor = "green"; // Use of getElementById to target the elements of that ID. Element for ID.
document.getElementById("Newbox").style.color = "white";


document.querySelector(".box").style.backgroundColor = "blue";
document.querySelector(".box").style.color = "white";


document.querySelectorAll(".box").forEach(element => {    // It returns NodeList. To make changes to all the elements of NodeList use forEach loop.
    element.style.backgroundColor = "green";
    element.style.color = "white";
});

document.getElementsByTagName("div");    // It will return HTML collection. It will give you all the elements which are of div type.


//  MATCHES, CLOSEST, CONTAINS METHODS !  

//  MATCHES: IT TELLS YOU IF THE CSS SELECTOR MATCHES OR NOT.
//  TO LOOK FOR THE NEAREST ANCESSTOR OF THE GIVEN CSS SELECTOR.
//  RETURNS TRUE IF elementB is inside of elementA(a descendant od elementA ) or when elementA == elementB.





