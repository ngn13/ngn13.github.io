# created by ngn13 - see LICENSE.txt
# really basic python script to create
# blog posts and to make my life easier

import json
from datetime import date

jsonfile_read = open("blog/posts.json", "r")
jsondata = json.loads(jsonfile_read.read())
jsonfile_read.close()

try:
	title = input("Post title: ")
	desc = input("Post desc: ")
	file = input("Post file name: ")
	author = input("Post author: ")
	background = input("Background URI: ")
except:
	exit()

postjson = {
	"title": title,
	"desc": desc,
	"file": file,
	"author": author,
	"date": date.today().strftime("%d/%m/%y"),
	"background": background
}
jsondata["posts"].append(postjson)
jsonfile_write = open("blog/posts.json", "w")
jsonfile_write.write(json.dumps(jsondata))
jsonfile_write.close()
print("Success!")