import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    postId: { type:mongoose.Schema.Types.ObjectId, ref:'Post', required:true},
    content: { type:String,required:true },
    author: { type:mongoose.Schema.Types.ObjectId, ref:'User', default:null}, // for future user integration
    timestamp: { type:Date, default:Date.now },
  },
  { versionKey:false }
);

export const Comment = mongoose.model('Comment', commentSchema);
