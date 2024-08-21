import React, { useEffect, useState } from 'react'
import Course from './Course'

import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'



const Allcourses = () => {

  useEffect(()=>{
    document.title="|| All courses ||"
  },[])

  //fuction  to call server:
  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then((Response)=>{
      // console.log(Response)
      console.log(Response.data)
      toast.success("Courses has been success fully loaded",{
        position:'bottom-center'
      });
      setCourses(Response.data);
    },
  (Error)=>{
    console.log(Error)
    toast.error("something went wrong");

  })
  }

  //calling loading function
  useEffect(()=>{
    getAllCoursesFromServer()
  },[]);


    const [courses,setCourses]=useState([
       
    ])


  return (
    <div>
      
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>
        {
            courses.length>0 ? courses.map((item)=><Course key={item.id} course={item}/>
            ):"No courses"
        }
    </div>
  )
}

export default Allcourses