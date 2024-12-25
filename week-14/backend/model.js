const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shrid00:shrid00@cluster0.l6zpt.mongodb.net/");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  privateKey: String,
  publicKey: String,
});

const userModel = mongoose.model("user", UserSchema);

modules.export(userModel);
