const packTitle = document.getElementById("pack-name")
const packTitleText = document.getElementsByTagName("ptitle")

function typeEffect(char){
	let curr = packTitle.innerText
	curr = curr.slice(0, -1)
	packTitle.innerText = curr+char+"|"
}

function blink(){
	let cursor = true
	setInterval(()=>{
		let curr = packTitle.innerText
		if(cursor){
			curr = curr.slice(0, -1)
			packTitle.innerText = curr
		}else{
			packTitle.innerText = curr+"|"
		}
	cursor = !cursor
	},800)
}


let title = packTitleText[0].innerText
let delay = 100
for(let i = 0;i<title.length;i++){
	setTimeout(()=>{
		typeEffect(title[i])
		if(i==title.length-1){
			blink()
		}
	},delay)
	delay += 100
}

