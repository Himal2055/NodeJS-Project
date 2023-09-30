const express = require("express")
const { blogs } = require('./model/index')
const { renderCreateBlog, createBlog, allblog, singleBlog, deleteBlog, editBlog, allBlog, renderEditblog } = require("./controller/blog/blogcontroller")
const app = express()

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

app.get("/portfolio",(req,res)=>{
    res.render("index.ejs")
})

//allBlogs
app.get("/",allBlog)


// single blog page
app.get("/single/:id",singleBlog)


// delete page
app.get("/delete/:id",deleteBlog)


//Edit blog

app.get("/edit/:id",renderEditblog)

app.post("/editBlog/:id",editBlog)

app.listen(3000,()=>{
    console.log("Nodejs has started on port 3000")
})