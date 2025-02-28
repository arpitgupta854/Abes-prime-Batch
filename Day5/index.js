// console.log(document)---window represent Bom
// console.dir(document)----Dom
// console.dir(window) ----document is given by window

//write generic in html
// document.write("hello")

//finding or /searching the element

//1.document.getElementById()
//document.getElementByClassName()
//document.getElementByTagName()
//document.querrySelect()
//document.querySelecterAll()


const ele=document.getElementById("text-1")
console.dir(ele)
ele.style.color="blue"

const ele1=document.getElementsByClassName("text-2")
console.log(ele1);

const ele2=document.getElementsByTagName("p")
console.log(ele2)
