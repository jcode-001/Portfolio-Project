"use strict"

let drpdownBtn = document.getElementsByClassName("sidebar-icon")[0]

function dispDropdown(){
    document.getElementById("dropdown").classList.toggle("show")
}
drpdownBtn.addEventListener("click", dispDropdown)

 const random =  [1, 2 , "Funke", 4, 5, "Gauis"]
 console.log(random)