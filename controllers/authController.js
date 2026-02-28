const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authController = {
  register: async (req, res) => {
    try {
      console.log(123);

      const { email, password, name, nickname } = req.body;

      let user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ message: "Пользователь уже существует" });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({ email, password: hashedPassword, name, nickname });
      await user.save();

      res.status(201).json({ message: "Пользователь зарегистрирован" });
    } catch (error) {
      console.log(error);

      res
        .status(500)
        .json({ message: "Ошибка при регистрации", error: error.message });
    }
  },

  authorise: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Неверные данные" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Неверные данные" });

      const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {
        expiresIn: "1h",
      });

      res.json({
        token,
        user: { id: user._id, email: user.email, name: user.name },
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ошибка авторизации", error: error.message });
    }
  },
};

module.exports = authController;
