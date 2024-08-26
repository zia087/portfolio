// counter implementation
const counterEL_1 = document.querySelector('.counter-1')
const counterEL_2 = document.querySelector('.counter-2')
const counterEL_3 = document.querySelector('.counter-3')
const bgEl1 = document.querySelector('.counter-bg-1')
const bgEl2 = document.querySelector('.counter-bg-2')
const bgEl3 = document.querySelector('.counter-bg-3')
const tabBtns = document.querySelectorAll('.tab-btn button')
const content = document.querySelector('.tab-1')
const content2 = document.querySelector('.tab-2')
const design = document.querySelector('.tab-3')
const contWrit = document.querySelector('.tab-4')
const mark = document.querySelector('.tab-5')
const counterCard = document.querySelector('.counter-card')
const progEnd_1 = 90;
const progEnd_2 = 75;
const progEnd_3 = 80;
let initialDeg1 = 110;
let initialDeg2 = 110;
let initialDeg3 = 110;
let progStart1 = 0;
let progStart2 = 0;
let progStart3 = 0;
// 1st counter
const elementOneProg = setInterval(
    ()=>{
        progStart1++;
        initialDeg1++
        counterEL_1.textContent =  progStart1 + '%';
        bgEl1.style.background = `conic-gradient(from 110deg, #FF014F ${initialDeg1}deg, #FDFDFD 0deg)`
    if(progStart1 === progEnd_1){
    clearInterval(elementOneProg)
    }
    }
    ,100
)
// 2d counter
const secondI =  ()=>{
    progStart2++;
    initialDeg2++
    counterEL_2.textContent =  progStart2 + '%';
    bgEl2.style.background =`conic-gradient(from 115deg, #FF014F ${initialDeg2}deg, #FDFDFD 0deg)`
if(progStart2 === progEnd_2){
clearInterval(elementOneProg1)
}
}
// third
const elementOneProg1 = setInterval(secondI  ,100)
const thirdI =  ()=>{
    progStart3++;
    initialDeg3++
    counterEL_3.textContent =  progStart3 + '%';
    bgEl3.style.background =`conic-gradient(from 115deg, #FF014F ${initialDeg3}deg, #FDFDFD 0deg)`
if(progStart3 === progEnd_3){
clearInterval(elementOneProg3)
}
}
const elementOneProg3 = setInterval(thirdI ,100)
// tabs

console.log(tabBtns[0].getAttribute('data-set'))
tabBtns.forEach((element)=>{
    element.addEventListener('click',(e)=>{
if(e.target.getAttribute('data-set') === 'All'){
    content.style.display = 'grid'
    content2.style.display = 'none'
    contWrit.style.display = 'none'
    design.style.display = 'none'
       contWrit.style.display = 'none'
        mark.style.display = 'none'
}else if(e.target.getAttribute('data-set') === 'Branding'){
    content2.style.display = 'grid'
    content.style.display = 'none'
    contWrit.style.display = 'none'
    design.style.display = 'none'
       contWrit.style.display = 'none'
        mark.style.display = 'none'
    
}
 else if(e.target.getAttribute('data-set') === 'Design'){
    design.style.display = 'grid'
    content2.style.display = 'none'
    content.style.display = 'none'
    contWrit.style.display = 'none'
    contWrit.style.display = 'none'
    mark.style.display = 'none'
}
 else if(e.target.getAttribute('data-set') === 'Content'){
    contWrit.style.display = 'grid'
    content.style.display = 'none'
    design.style.display = 'none'
    content2.style.display = 'none'
    mark.style.display = 'none'

}
 else if(e.target.getAttribute('data-set') === 'Marketing'){
    contWrit.style.display = 'none'
    mark.style.display = 'grid'
    content.style.display = 'none'
    content2.style.display = 'none'
    design.style.display = 'none'

}

    })
})
// counteracardAnimation
let initCOunt = 0;
let endCount = 10;
const cout = setInterval(
    ()=>{
initCOunt++;
counterCard.textContent  = initCOunt;
if(initCOunt === endCount){
    clearInterval(cout)
}
    }
    ,100
)
