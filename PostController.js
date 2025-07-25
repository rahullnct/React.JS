const Post=require('../Model/PostModel');

exports.createPost= async(req,res)=>{
    try{
      const {title,body}=req.body;

       const post= new Post({
        title,body
       });
       const postCreated= await post.save();
       res.json({
        message:"post created successfully",
        post:postCreated
       });

    }
    catch(error){
        res.json({
            message:"post not created"
        })
    }
};