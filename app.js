const express = require("express")
const app = express()

//database connection
require("./model/index")

// telling the nodejs to set view- engine to ejs
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//allBlogs
app.get('/',(req,res)=>{
    res.render("blogs.ejs")
})



//createBlogs
app.get("/createBlogs",(req,res)=>{
    res.render("createBlogs.ejs")
})

// createBlog post
app.post("/createBlogs",(req,res)=>{
    console.log(req.body)
    res.send("form is submitted succesfully")
})

app.listen(3000,()=>{
    console.log("Nodejs has started on port 3000")
})