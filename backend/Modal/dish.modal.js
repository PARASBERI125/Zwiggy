import mongoose from "mongoose";
const dishSchema = mongoose.Schema({
  title: String,
  buttonText: String,
  price: Number,
  imageSrc: String,
});
const Dish = mongoose.model("Dish", dishSchema);
export default Dish;
