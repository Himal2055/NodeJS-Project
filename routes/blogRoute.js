const { renderCreateBlog, createBlog, allBlog, singleBlog, deleteBlog, editBlog, renderEditblog } = require("../controller/blog/blogcontroller");

const router = require("express").Router()

// kohi createBlog ma gayo vani k garney vaneko ho hae
// app.get("/createBlogs",renderCreateBlog)
// app.post("/createBlogs",createBlog )  
// yo 6 rw 7 ko line ko code equivalent xa rw both lae yo talako ek line lae handle gare dinxa . Yadi post aaya sur ko hunxa vani get aaya aarko 

// yesto lae hami restful api vanxau

router.route("/createBlogs").get(renderCreateBlog).post(createBlog)

// all blogs ko lagi
router.route("/").get(allBlog)

// single blog page
router.route("/single/:id").get(singleBlog)

// delete page
router.route("/delete/:id").get(deleteBlog)

//Edit blog
router.route("/edit/:id").get(renderEditblog)
router.route("/editBlog/:id").post(editBlog)


//RESTfull api for above blog having id 

// router.route("/:id").get(singleBlog).get(deleteBlog).get(renderEditblog).post(editBlog)

module.exports =router;