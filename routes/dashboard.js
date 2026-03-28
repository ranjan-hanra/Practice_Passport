const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/dashboard",(req,res)=>{
    req.flash("success","Welcome to Local-Passport Practice Session!");
    res.render("main/dashboard");
});



module.exports = router;
