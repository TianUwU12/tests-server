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

  submitResult: async (req, res) => {
    try {
      const { category, score, totalQuestions } = req.body;
      const userId = req.user.userId;

      const percentage = Math.round((score / totalQuestions) * 100);

      const newResult = new Result({
        userId,
        category,
        score,
        totalQuestions,
        percentage,
      });

      await newResult.save();
      res
        .status(201)
        .json({ message: "Результат сохранен", result: newResult });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка при сохранении", error: error.message });
    }
  },

  getHistory: async (req, res) => {
    try {
      const userId = req.user.userId;
      const history = await Result.find({ userId }).sort({ date: -1 });
      res.json(history);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Ошибка при получении истории",
          error: error.message,
        });
    }
  },
};

module.exports = testController;
