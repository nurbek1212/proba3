let sideBars= document.querySelector('.side-bar')
let barsIcon= document.querySelector('.icon-b')
let xIcon= document.querySelector('.icon-x')

barsIcon.addEventListener('click', () => {
    sideBars.style.display = 'block'
    sideBars.style.transform = 'translateX(0px)'
});
xIcon.addEventListener('click', () => {
    sideBars.style.display = 'none'
})
