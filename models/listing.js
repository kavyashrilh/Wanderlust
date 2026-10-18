const mongoose=require("mongoose");
const { listingSchema } = require("../schema");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const ListingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    // image:{
    //     type:String,
    //     default:"http://images.unsplash.com/photo-1547699224-0924faf995c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZG93bmxvYWR8fDB8fHx8MTYxOTIwODA3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    //     set:(v)=>v===""?"http://images.unsplash.com/photo-1547699224-0924faf995c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZG93bmxvYWR8fDB8fHx8MTYxOTIwODA3NQ&ixlib=rb-1.2.1&q=80&w=1080":v,
    // },
    //  filename: {
    //         type: String,
    //         default: "listingimage",
    //     },
    //     image: {
    //         type: String,
    //         default: "https://images.unsplash.com/photo-1547699224-0924faf995c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZG93bmxvYWR8fDB8fHx8MTYxOTIwODA3NQ&ixlib=rb-1.2.1&q=80&w=1080",
    //     },
    image: {
        filename: {
            type: String,
            default: "listingimage",
        },

        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1547699224-0924faf995c6",
        },
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
});

// listingSchema.post("findOneAndDelete",async(req,res)=>{
//     if(listing){
//          await Review.deleteMany({_id:{$in:listing.reviews}})
//     }
   
// })
ListingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({
            _id: { $in: listing.reviews }
        });
    }
});

const Listing=mongoose.model("Listing",ListingSchema);
module.exports=Listing;