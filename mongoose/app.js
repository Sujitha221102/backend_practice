const mongoose = require("mongoose");
const user = require("./user");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  try {
    // ====================================================================create
    // const userDetails = await user.create({
    //   name: "sujitha",
    //   age: 36,
    //   email: "SUji@gmail.com",
    // });
    // userDetails.name = "pavi";
    // console.log(userDetails);
    // =======================================================================findByID
    // const userDetails = await user.findById("66d18dc5f11d61ad1e5b672e");
    // console.log(userDetails);
    // =======================================================================find
    // const userDetails = await user.find();
    // const userDetails = await user.find({ name: "sujitha" });
    // console.log(userDetails);
    // ==========================================================================delete
    // const result = await user.deleteOne({ name: "sujitha" });
    // console.log(result);
    // ==========================================================================exists
    // const result = await user.exists({ name: "sujitha" });
    // console.log(result);
    // ==========================================================================populate
    // const result = await user.where("age").gt(34).limit(1);
    // const result = await user
    //   .where("name")
    //   .equals("saranya")
    //   .populate("bestFriend")
    //   .limit(1);

    // ===========================================================================schema methods

    // ======================methods

    // const result = await user.findOne({ name: "sujitha" });
    // result.sayHi();
    // console.log(result);

    // ======================statics

    const result = await user.find().queryByName("pavithraaaa");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
