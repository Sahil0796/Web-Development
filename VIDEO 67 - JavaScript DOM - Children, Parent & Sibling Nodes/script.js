console.log("Hello world !");

document.body.childNodes[1].childNodes    // It will show all the elements.

document.body.childNodes[1].firstElementChild    // It will give you first childnode which is an element. Textnode is not an element.

let cont = document.body.childNodes[1].childNodes

cont.firstElementChild.style.backgroundcolor = "red";

cont.firstElementChild.parentElement  // It will give the parent element of the element.

document.body.firstElementChild.children  // It will give you only the elementnodes from the firstElementChild.

document.body.firstElementChild.children[3].nextElementSibling  // It will give you the next element in the line. 
                                                                // If the parent is same of the elements, the elements are called siblings.

document.body.firstElementChild.children[3].previousElementSibling  // It will give you the previous element in the line.   





