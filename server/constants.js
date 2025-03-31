require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET
const USER_ROLES = ["user", "moderator", "admin"];

module.exports = {
  JWT_SECRET,
  USER_ROLES
}