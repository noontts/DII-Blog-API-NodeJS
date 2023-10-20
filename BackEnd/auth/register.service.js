const User = require("./user.model");

async function register(username, password, email) {
  try {
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return { status: 400, message: "Username already exists" };
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    return { status: 200, message: "User registered successfully", user: newUser };
  } catch (error) {
    return { status: 500, message: "An error occurred while registering the user" };
  }
}

async function getAll() {
  try {
    const allUsers = await User.findAll();
    return { status: 200, users: allUsers };
  } catch (error) {
    return { status: 500, message: "An error occurred while fetching user IDs" };
  }
}

module.exports = {
  register,
  getAll,
};
