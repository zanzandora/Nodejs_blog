import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const articleSchema = new Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Article = mongoose.model('Article', articleSchema);

export default Article;
