
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.fontFamily = "papyrus"
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
let dogDescription = document.querySelectorAll('.dog-description')

let footer = document.querySelector('.footer')
footer.style.fontFamily = "papyrus"
footer.style.backgroundColor = "Purple"
footer.style.color = "yellow"


