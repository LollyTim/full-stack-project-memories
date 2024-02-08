import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  tittle: String,
  messahe: String,
  creator: String,
  tags: [String],
  selectedFIle: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
