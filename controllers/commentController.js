import { Comment } from "../models/Comment.js";

export const addComment = async (req,res) => {
    try{
        const { content,author } = req.body;
        const { id:postId } = req.params;

        const comment = new Comment({postId,content,author});
        await comment.save(); 

        res.status(201).json(comment);
    }catch(error){
        res.status(500).json({error:'failed to add comment',details:error.message});
    }
}

export const getCommentsForPost = async (req,res) => {
    try{
        const { id:postId } = req.params;
        const comments = await Comment.find({postId}).sort({timestamp:-1})
        res.json(comments)
    }catch(error){
        res.status(500).json({error:'Failed to fetch comments',details:error.message})
    }
}