let header = document.querySelector('.comp') 
header.innerHTML = "Inspector Clouseau"

let header1 = document.querySelector('.header2') 
header1.innerHTML = "hello this is Inspector Clouseau"


function reDisplay() {
let windowSizes =  `this page is ${window.innerWidth} 
by ${window.innerHeight}`
let offset = `window offset is 
${window.screenX} by ${window.screenY}`
let myOffset = document.querySelector('#myOffset')
let myWindow = document.querySelector('#myWindow')
myWindow.innerHTML = windowSizes
myOffset.innerHTML = offset

let modb = document.lastModified
let mod = document.querySelector('#mod')
mod.innerHTML = `the date the document was last modified was ${modb}`

}

reDisplay()