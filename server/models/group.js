const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: String,
  usersId: [String],
  createdAt: { type: Date, defaylt: Date.now }
})

module.exports = mongoose.model('Group', GroupSchema);
