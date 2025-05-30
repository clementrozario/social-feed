import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        title:{type:String,required:true},
        content:{type:String,required:true},
        author:{type:mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
        timestamp:{ type:Date, default:Date.now},
    },
    { versionKey:false}
)

export const Post = mongoose.model('Post',postSchema);