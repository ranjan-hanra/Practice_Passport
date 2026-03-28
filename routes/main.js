const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/main",async (req,res)=>{
    await res.render("main/index.ejs");
});



module.exports = router;
