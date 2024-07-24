const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});


const PhotoSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  publisherName: {
    type: String,
    required: true
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  likers: {
    type: Array,
    default: []
  },
  comments: [commentSchema] 
}, { versionKey: false });

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;