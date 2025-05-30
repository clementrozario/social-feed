import express from 'express'
import { addComment,getCommentsForPost } from '../controllers/commentController.js'

const router = express.Router({ mergeParams:true});

router.post('/',addComment);

router.get('/',getCommentsForPost);

export default router;