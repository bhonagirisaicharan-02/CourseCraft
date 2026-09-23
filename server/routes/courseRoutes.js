const express = require("express")
const { protect } = require("../middleware/authMiddleware")
const { getCourse, createCourse, updateCourse, deleteCourse, getCourseById } = require("../controllers/courseController")
const courseRoute = express.Router()

courseRoute.get("/" , getCourse)
courseRoute.post("/" , createCourse)
courseRoute.get("/:id" , getCourseById)
courseRoute.put("/:id" , updateCourse)
courseRoute.delete("/:id" , deleteCourse)

module.exports = courseRoute