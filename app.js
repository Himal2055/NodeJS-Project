const express = require("express")
const { blogs } = require('./model/index')
const app = express()

//database connection
require("./model/index")

// telling the nodejs to set view- engine to ejs
app.set("view engine","ejs")

// form bata data aairaxa parse gara or handle gar vaneko ho
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
app.post("/createBlogs",async(req,res) =>{
    
    //first approach
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description
   
    
    // //second approach
    // const {title,subtitle,description} =req.body


    // console.log(title,subTitle,description)

  
    
    //database ma halnu paryo , database sanga kahi operation await halnu parney hunxa
    // agadi,, await halepaxi mathi async halnu parni hunxa
    await blogs.create({
        title : title,
        subTitle : subTitle,
        description : description
    })
    res.send("form is submitted succesfully")
})

app.listen(3000,()=>{
    console.log("Nodejs has started on port 3000")
})