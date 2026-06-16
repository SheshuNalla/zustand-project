import React from "react";

import useCourseStore from "../app/courseStore";
import { useState } from "react";

const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)
    const [courseTitle, setCourseTitle] = useState('');

    const handleSubmit = () => {
        if (!courseTitle) return alert('please add a course title')
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle
    })
    
    }

    return (
        <div className="form-container">
            <input  
            value={courseTitle}
            onChange={(e) => {
                setCourseTitle(e.target.value)
            }}
            className="form-input" />
            <button 
            onClick={() => {
                handleSubmit();
            }}
            className="form-submit-btn">Add Course</button>
        </div>
    )
}

export default CourseForm;