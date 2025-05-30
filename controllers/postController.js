import { Post } from '../models/Post.js'
import { Comment } from '../models/Comment.js'

export const createPost = async (req,res) => {
    try{
        const { title,content,author } = req.body;
        const post = new Post({ title,content,author });
        await post.save();
        res.status(201).json(post);
    }catch(error){
        res.status(500).json({error: 'Failed to create post', details:error.message})
    }
} 

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ timestamp: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
  }
};

export const getPostWithComments = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const comments = await Comment.find({ postId }).sort({ timestamp: -1 });
    res.json({ post, comments });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post', details: error.message });
  }
};