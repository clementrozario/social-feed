import express from 'express'

import { createPost,getAllPosts,getPostWithComments } from '../controllers/postController.js'

const router = express.Router();

router.post('/',createPost);

router.get('/',getAllPosts);

router.get('/:id',getPostWithComments);

export default router;