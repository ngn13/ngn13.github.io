const glitchText = document.getElementById('title')

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
