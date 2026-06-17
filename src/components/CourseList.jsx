import React from "react";
import {useShallow} from 'zustand/react/shallow'
import useCourseStore from "../app/courseStore";

const CourseList = () => {
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
);
    return (
        <>
        <ul>
            {courses.map((course, i) => {
                return(
                    <React.Fragment key={i}>
                        <li
                        className={`course-item`}
                        style={{
                            backgroundColor: course.completed ? "rgba(90, 86, 90, 0.27)" : "white",
                        }}
                        >
                            <span className="course-item-col-1">
                                <input
                                checked = {course.completed}
                                type="checkbox"
                                onChange={(e) => {
                                    toggleCourseStatus(course.id)
                                }}
                                />
                            </span>
                            <span style={{color : "black"}}>
                                {course.title}
                            </span>
                            <button 
                            onClick={() => {
                                removeCourse(course.id)
                            }}
                            className="delete-btn">Delete</button>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
        </>
    )
}

export default CourseList