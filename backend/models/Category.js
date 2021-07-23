import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
}, 
  {timeStamps: true}
)

module.exports = mongoose.model('Category', CategorySchema);