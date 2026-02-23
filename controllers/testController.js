const { categoryQuestions } = require("../data/tests");

const testController = {
  getAllCategories: (req, res) => {
    try {
      const summary = categoryQuestions.map(({ ...rest }) => rest);
      res.status(200).json(summary);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при получении списка категорий", error });
    }
  },

  getCategoryById: (req, res) => {
    try {
      const { id } = req.params;
      const category = categoryQuestions.find((item) => item.id === id);

      if (!category) {
        return res.status(404).json({ message: "Категория не найдена" });
      }

      res.status(200).json(category);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка сервера при поиске категории", error });
    }
  },
};

module.exports = testController;
