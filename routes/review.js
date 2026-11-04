const express=require("express");
const router=express.Router({ mergeParams: true });
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review=require("../models/review.js");
const {validateReview,isLoggedIn, isReviewAuthor}=require("../middleware.js");

const reviewControoler=require("../controllers/reviews.js")
// Post Reviews Route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewControoler.createReview));
// Delete Reviews Route
// router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(async(req,res)=>{
//     let{id,reviewId}=req.params;
//     await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
//     await Review.findByIdAndDelete(reviewId);
//     req.flash("success","New Review Deleted");
//     res.redirect(`/listings/${id}`)
// }));
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewControoler.destroyReview)
);
module.exports=router;