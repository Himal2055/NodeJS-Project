const { renderCreateBlog, createBlog } = require("../controller/blog/blogcontroller");

const router = require("express").Router()

// kohi createBlog ma gayo vani k garney vaneko ho hae
// app.get("/createBlogs",renderCreateBlog)
// app.post("/createBlogs",createBlog )  
// yo 6 rw 7 ko line ko code equivalent xa rw both lae yo talako ek line lae handle gare dinxa . Yadi post aaya sur ko hunxa vani get aaya aarko 

// yesto lae hami restful api vanxau

router.route("/createBlog").get(renderCreateBlog).post(createBlog)

module.exports =router;