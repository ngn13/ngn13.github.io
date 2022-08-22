const linksdiv = document.getElementById("links-div")

window.addEventListener("resize", ()=>{
	checkWindow()
})

checkWindow()

function checkWindow(){
	let height = window.innerHeight
	let width = window.innerWidth
	if(width<1654){
		linksdiv.style.flexDirection = "column"
		linksdiv.style.paddingLeft = "100px"
		linksdiv.style.paddingRight = "100px"
	}else{
		linksdiv.style.flexDirection = "row"
		linksdiv.style.paddingLeft = "0px"
		linksdiv.style.paddingRight = "0px"
	}
}