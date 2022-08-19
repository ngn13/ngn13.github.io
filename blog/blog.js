const posts = document.getElementById("posts")
const postsTitle = document.getElementById("posts-title")
const converter = new showdown.Converter() 
const url = new URLSearchParams(window.location.search)

async function getPostJson(){
	let url = "/blog/posts.json"
	let jsondata = await fetch(url).then(data=>data.json())
	return jsondata
}

async function fetchPost(file){
	let url = "/blog/posts/" + file
	let response = await fetch(url).then(response=>response)
	return response.text()
}

function markdownToHTML(markdown){
	return converter.makeHtml(markdown)
}

async function loadPosts(){
	jsondata = await getPostJson()
	postList = jsondata["posts"].reverse()
	for(let i=0; i<postList.length; i++){
		let title = postList[i]["title"]
		let desc = postList[i]["desc"]
		let author = postList[i]["author"]
		let date = postList[i]["date"]
		let background = postList[i]["background"]
		let postEl = `
		<div style="background: linear-gradient(rgba(3, 3, 3, 0.705), rgba(22, 22, 22, 0.808)), url('${background}');background-size: 800px;" onclick="location.href='/blog?post=${title}'">
			<h1 class="post-title">${title}</h1>
			<p class="post-desc">${desc}</p>
			<p class="post-subtext">${author} - ${date}</p>
		</div>
		`
		posts.innerHTML += postEl
	}
}

async function loadPost(title){
	jsondata = await getPostJson()
	postList = jsondata["posts"]
	for(let i=0; i<postList.length; i++){
		if(postList[i]["title"] === title){
			postsTitle.innerText = postList[i]["title"]
			let html = markdownToHTML(await fetchPost(postList[i]["file"]))
			posts.innerHTML += html
			return
		}
	}

	loadPosts()
}

if(url.get("post")!==null){
	loadPost(url.get("post"))
}else{
	loadPosts()
}