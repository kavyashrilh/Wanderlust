const express=require("express");
const router=express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/users.js");

router.route("/signup")
.get(userController.renferSignupForm)
.post(wrapAsync(userController.signup))

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
   userController.login
);

router.get("/logout",userController.logout);

// router.get("/signup",userController.renferSignupForm);

// router.post("/signup",wrapAsync(userController.signup));

// router.get("/login",userController.renderLoginForm);
// router.post("/login",passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),async(req,res)=>{
//     req.flash("success","Welcome back to Wanderlust!");
//     res.redirect("/listings");
// })

// router.post("/login",saveRedirectUrl,
//     passport.authenticate("local", {
//         failureRedirect: "/login",
//         failureFlash: true
//     }),
//    userController.login
// );
// router.get("/logout",userController.logout);


module.exports=router;