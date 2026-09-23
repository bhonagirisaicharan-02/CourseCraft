const Course =require('../models/course')

async function getCourse(req,res){
    try {
        const courses = await Course.find()
        return res.status(200).send(courses)


    }catch(error){
        return res.status(500).send({
            message:"Unable to acess course"
        })
    }
   
}

async function createCourse(req,res){
    try{
        const {title, description, category, level, price, duration} = req.body

        if(!title ||!description||!category||!level|| price == undefined||!duration){
            return res.status(400).send({
                message:"Bad Request"
            })
        }
        const existingCourse = await Course.findOne({title:title})
        if(existingCourse){
            return res.status(400).send({
                "message":"Bad Request, Course already exists"
            })
        }
        const course =await Course.create({

            title:title,
            description:description,
            instructor:req.user._id,
            category:category,
            level:level,
            price:price,
            duration:duration,
        })
      
        return res.status(200).send({
            "message":"New course created"

        })
    }catch(error){
        return res.status(500).send({
            message:"Unable to create course"
        })
    }
}

function deleteCourse(req,res){

}

function updateCourse(req,res){





}

function getCourseById(req,res){
    
}

module.exports={
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
    getCourseById
}