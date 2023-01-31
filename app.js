const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const _ = require("lodash")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

const homeStartingContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."

const aboutContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."
const contactContent =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident quo nesciunt molestiae omnis distinctio sapiente corporis iste in deleniti iusto unde rerum fuga, tenetur ut, eligendi consectetur. Sit, ea."

let posts = []

app.get("/", (req, res) => {
	res.render("home", { homeStartingContent: homeStartingContent, posts: posts })
})

app.get("/about", (req, res) => {
	res.render("about", { aboutContent: aboutContent })
})

app.get("/contact", (req, res) => {
	res.render("contact", { contactContent: contactContent })
})

app.get("/compose", (req, res) => {
	res.render("compose")
})

app.get("/posts/:topic", (req, res) => {
	console.log(req.params.topic)
	let requestedPost = _.lowerCase(req.params.topic)
	posts.forEach((post) => {
		let storedPost = _.lowerCase(post.title)
		let postContent = post.content
		if (requestedPost === storedPost) {
			res.render("post", { postTitle: storedPost, postContent: postContent })
		} else {
			console.log("Match not found ")
		}
	})
})

app.post("/compose", (req, res) => {
	let postTitle = req.body.postTitle
	let postBody = req.body.postBody
	let post = {
		title: postTitle,
		content: postBody
	}
	posts.push(post)
	res.redirect("/")
})

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
