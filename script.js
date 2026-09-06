//select popup box, popup overlay and button

var overlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addbutton=document.querySelector(".add-btn");
var cancelbtn=document.querySelector("#cancel-popup");

addbutton.addEventListener("click",function () {
    overlay.style.display="block";
    popupbox.style.display="block";
    
});

cancelbtn.addEventListener("click",function(event){
    event.preventDefault(event);
    overlay.style.display="none";
    popupbox.style.display="none";

})

//selecting add-book,container,book-title-input,book-author-input,book-description-input
var addbook= document.querySelector("#add-book");
var container=document.querySelector(".container");
var booktitleinput=document.querySelector("#book-title-input");
var bookauthorinput=document.querySelector("#book-author-input");
var bookdescriptioninput=document.querySelector("#book-description-input");

addbook.addEventListener("click",function(event){
    event.preventDefault(event);
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deleteItem(event)">delete</button>`
    container.append(div)
    overlay.style.display="none";
    popupbox.style.display="none";
})

function deleteItem(event){
    event.target.parentElement.remove()

}