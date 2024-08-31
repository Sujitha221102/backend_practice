const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  building: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
    max: 68,
    validate: {
      validator: (v) => v % 2 == 0,
      message: (props) => `${props.value} not valid age`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: Date,
  bestFriend: { type: mongoose.SchemaTypes.ObjectId, ref: "Users" },
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log(`My name is ${this.name}`);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: name });
};

userSchema.query.queryByName = function (name) {
  return this.where({ name: name });
};

module.exports = mongoose.model("Users", userSchema);
