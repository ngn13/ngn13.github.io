const warp = document.getElementById("content-warp")

window.addEventListener("resize", ()=>{
	checkWindow()
})

checkWindow()

function checkWindow(){
	let height = window.innerHeight
	let width = window.innerWidth
	if(width<1654){
		warp.style.flexDirection = "column"
		warp.style.paddingLeft = "100px"
		warp.style.paddingRight = "100px"
	}else{
		warp.style.flexDirection = "row"
		warp.style.paddingLeft = "0px"
		warp.style.paddingRight = "0px"
	}
}