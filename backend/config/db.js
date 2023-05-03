const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(`MongoDb is connected :${data.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
