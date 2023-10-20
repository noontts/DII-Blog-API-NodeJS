const User = require("./user.model");

async function login(username, password) {
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return { status: 401, message: "User not found" };
    }

    if (user.password !== password) {
      return { status: 401, message: "Incorrect password" };
    }

    return { status: 200, message: "Login successful", user };
  } catch (error) {
    return { status: 500, message: "An error occurred during login" };
  }
}

module.exports = {
  login,
};
