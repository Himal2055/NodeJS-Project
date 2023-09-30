const { blogs } = require("../../model")

exports.renderCreateBlog =(req,res)=>{
    res.render("createBlogs.ejs")
}


exports.createBlog = async(req,res) =>{
    
    //first approach
    const title = req.body.title
    const subTitle = req.body.subtitle
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
    res.redirect("/")

    // This is for fontend developer lae dina paryoo vani

    // res.json({
    //     status : 200,
    //     message : "Blog created sucesfully"
    // })
}


exports.allBlog =async(req,res)=>{
    //Blogs vanni table bata vayajati sabai data dey vane ko
    const allBlogs = await blogs.findAll()
    // console.log(allBlogs)


    //blogs vanney key/name ma allBlog/data pass gareko ejs file lai
    res.render("blogs",{blogs:allBlogs})

    // This is for fontend developer lae dina paryoo vani
    // res.json({
    //     status : 200,
    //     blogs : allBlogs
    // })
}

exports.singleBlog = async(req,res)=>{
    // console.log(req.params.id)

    const id = req.params.id

    //second approach
    //const(id) = req.params

    // id ko data magnu / find garnu paryo hamro table bata
   const blog = await blogs.findAll({
        where :{
            id : id
        }
    })
    //second finding approach
    // const blog = await blogs.findAll()


    // console.log(blog)
    res.render("singleBlog",{blog:blog})
}

exports.deleteBlog =async(req,res)=>{
    const id = req.params.id
    //blogs vanni table bata tyo id ko delete garw vane ko 
   await blogs.destroy({
        where:{
            id : id
        }
    })
    res.redirect("/")
}

exports.renderEditblog = async(req,res)=>{
    // res.render("editBlog")
    const id = req.params.id
    //find blog of that id
    const blog = await blogs.findAll({
        where:{
            id : id
        }
    })

    res.render("editBlog",{blog : blog})
}

exports.editBlog = async(req,res)=>{


    //body bata j j aako xa title subTile teo sab database ma halde vane ko

    const id = req.params.id
    // console.log(req.body)

    const title = req.body.title
    const subTitle = req.body.subtitle
    const description = req.body.description 

    // First approach yo na garni kina ki yesma loophole xa

        // await blogs.update(req.body,{
        //     where :{
        //         id : id
        //     }
        // })


    //Second apprach  (JUn blog ko id ma change garya tai id ko lage rw halde vane ko )
    await blogs.update({
        title :title,
        subTitle: subTitle,
        description : description
    },{
        where : {
            id : id
        }
    })
    res.redirect("/single/" + id)
}