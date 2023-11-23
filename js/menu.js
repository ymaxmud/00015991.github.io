let menuElem = document.getElementById('dropdown') 
let titleElem = menuElem.querySelector('.title') 

titleElem.onclick = function() 
{
    menuElem.classList.toggle('open') 
}