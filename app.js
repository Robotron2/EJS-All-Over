const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
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

app.get("/", (req, res) => {
	res.render("home", { homeStartingContent: homeStartingContent })
})

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
