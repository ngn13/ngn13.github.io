const cl = document.getElementsByClassName("content-learn")
const co = document.getElementsByClassName("content-love")
const cd = document.getElementsByClassName("content-dev")

window.addEventListener("resize", ()=>{
	checkWindow()
})

checkWindow()

function checkWindow(){
	let height = window.innerHeight
	let width = window.innerWidth
	if(width<1654){
		for(let i = 0;i<cl.length;i++){
			cl[i].style.flexDirection = "column"
			cl[i].style.paddingLeft = "100px"
			cl[i].style.paddingRight = "100px"
		}
		co[0].style.flexDirection = "column"
		co[0].style.paddingLeft = "100px"
		co[0].style.paddingRight = "100px"
		cd[0].style.flexDirection = "column"
		cd[0].style.paddingLeft = "100px"
		cd[0].style.paddingRight = "100px"
	}else{
		for(let i = 0;i<cl.length;i++){
			cl[i].style.flexDirection = "row"
			cl[i].style.paddingLeft = "0px"
			cl[i].style.paddingRight = "0px"
		}
		co[0].style.flexDirection = "row"
		co[0].style.paddingLeft = "0px"
		co[0].style.paddingRight = "0px"
		cd[0].style.flexDirection = "row"
		cd[0].style.paddingLeft = "0px"
		cd[0].style.paddingRight = "0px"
	}
}