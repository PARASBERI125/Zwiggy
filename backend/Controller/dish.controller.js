import Dish from "../Modal/dish.modal.js";

export const getDish = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes); //status code for indicating that server has successfully processed the request
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};
