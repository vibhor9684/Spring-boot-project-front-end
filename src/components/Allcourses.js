import React, { useState } from 'react'
import Course from './Course'

const Allcourses = () => {
    const [courses,setCourses]=useState([
        {title:"Java Course",description:"this is demo course"},
        {title:"python Course",description:"this is demo course"},
        {title:"React.js Course",description:"this is demo course"},
        {title:"C++ Course",description:"this is demo course"}

    ])


  return (
    <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>
        {
            courses.length>0 ? courses.map((item)=><Course course={item}/>
            ):"No courses"
        }
    </div>
  )
}

export default Allcourses