document.querySelector(".box").innerHTML  // It will give you the inner html content.

document.querySelector(".box").innerText  // It will give you the inner text of a HTML element.

document.querySelector(".container").outerHTML  //  It will give you the outside + inside content of an HTML element.

document.querySelector(".box").innerHTML = "This is a box."  // You can change the text of an element.

document.querySelector(".box")  // It will select the first element of that class name.

document.querySelector(".box").hasAttribute("style");  // It will show it that attribute is there in the element or not.

document.designMode = "on"  // It will give you access to make changes on any website.

document.querySelector(".box").classList  // It will show all the classes of an element.

document.querySelector(".box").className  // It will show value of class attribute of an element.

document.querySelector(".box").classList.add("tony");  // It will add new class in an element.

document.querySelector(".box").classList.remove("tony");  // It will remove class from an element.

document.querySelector(".box").classList.toggle("tony");  // If present then remove, if remove then add.




// INSERTING HTML/ TEXT/ ELEMENT.
 
let cont = document.querySelector(".container");

cont.insertAdjacentHTML("beforebegin", "<b> I am under the water, Hey !</b>");




