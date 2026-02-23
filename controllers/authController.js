const { categoryQuestions } = require("../data/tests");

const authController = {
  authorise: (req, res) => {
    try {
      const data = req.body;

      console.log(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при получении списка категорий", error });
    }
  },
  register: (req, res) => {
    try {
      const data = req.body;

      console.log(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при получении списка категорий", error });
    }
  },
};

module.exports = authController;
