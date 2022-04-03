const express = require("express")
const router = express.Router()
const {create,getAllblogs,singleBlog,remove,update} =require("../controllers/blogController")


//การเรียกใช้งาน
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)




module.exports=router