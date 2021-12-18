const glitchText = document.getElementById('title')
const flexDiv = document.getElementsByClassName('tFB')

setInterval(()=>{
    glitchText.style.animationName = "glitch"
    glitchText.style.animationDuration = "0.2s"
    glitchText.style.animationIterationCount = "infinite"
}, 4000)

setInterval(()=>{
    glitchText.style.animationName = "none"
    glitchText.style.animationDuration = "none"
    glitchText.style.animationIterationCount = "none"
}, 4100)

setTimeout(()=>{
    location.href = "/panic.html"
}, 40000)

function rotateDivs(){
    if(window.innerWidth<1408){
        for(let i=0;i<flexDiv.length;i++){
            flexDiv[i].style.flexDirection = "column"
            flexDiv[i].style.gap = "0"
        }
    }else{
        for(let i=0;i<flexDiv.length;i++){
            flexDiv[i].style.flexDirection = "row"
            flexDiv[i].style.gap = "50px"
        }
    }
}

window.addEventListener('load', ()=>{
    rotateDivs()
})

window.addEventListener('resize', ()=>{
    rotateDivs()
})
