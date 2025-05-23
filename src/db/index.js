const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected Database');
  } catch (err) {
    console.log(err)
    throw new Error(err.message);
  }
}