const express = require("express")
const { blogs } = require('./model/index')
const { renderCreateBlog, createBlog, allblog, singleBlog, deleteBlog, editBlog, allBlog, renderEditblog } = require("./controller/blog/blogcontroller")
const app = express()

//Routes Here
const blogRoute = require("./routes/blogRoute")


//database connection
require("./model/index")

// telling the nodejs to set view- engine to ejs
app.set("view engine","ejs")


// nodejs lae file access garna dey vaneko haii
app.use(express.static("public/"))
app.use(express.static("home/"))




// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("",blogRoute) // localhost:3000 + /createBlog === localhost:3000/createBlog

//Example of mathi

// app.use("/hello",blogRoute) // localhost:3000/hello + /createBlog === localhost:3000/hello/createBlog



// server listening
app.listen(3000,()=>{
    console.log("Nodejs has started on port 3000")
})