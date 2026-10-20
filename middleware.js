// module.exports.isLoggedIn=(req,res,next)=>{
//     if(!req.isAuthenticated()){
//         req.flash("error","you must be logged in to create listing!");
//        return res.redirect("/login");
//     }
//     next();
// }

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};
